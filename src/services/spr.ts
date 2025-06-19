import crypto from 'node:crypto';
import { Stream } from 'node:stream';
import express from 'express';
import subdomain from 'express-subdomain';
import Dicer from 'dicer';
import { getDuplicateCECData, getRandomCECData } from '@/database';
import { getFriends } from '@/util';
import { CECData } from '@/models/cec-data';
import { CECSlot } from '@/models/cec-slot';
import { SendMode } from '@/types/common/spr-slot';
import RequestException from '@/request-exception';
import type { SPRSlot } from '@/types/common/spr-slot';
import { LOG_WARN, LOG_INFO } from '@/logger';

const spr = express.Router();

function multipartParser(request: express.Request, response: express.Response, next: express.NextFunction): void {
	const RE_BOUNDARY = /^multipart\/.+?(?:; boundary=(?:(?:"(.+)")|(?:([^\s]+))))$/i;
	const RE_FILE_NAME = /name="(.*)"/;

	const contentType = request.header('content-type');

	if (!contentType) {
		return next();
	}

	const boundary = RE_BOUNDARY.exec(contentType);

	if (!boundary) {
		return next();
	}

	const dicer = new Dicer({ boundary: boundary[1] || boundary[2] });
	const files: Record<string, Buffer> = {};

	dicer.on('part', (part: Dicer.PartStream) => {
		let fileBuffer = Buffer.alloc(0);
		let fileName = '';

		part.on('header', (header) => {
			const contentDisposition = header['content-disposition' as keyof object];
			const regexResult = RE_FILE_NAME.exec(contentDisposition);

			if (regexResult) {
				fileName = regexResult[1];
			}
		});

		part.on('data', (data: Buffer | string) => {
			if (typeof data === 'string') {
				data = Buffer.from(data);
			}

			fileBuffer = Buffer.concat([fileBuffer, data]);
		});

		part.on('end', () => {
			files[fileName] = fileBuffer;
		});

		part.on('error', (error: Error) => {
			return next(new RequestException(error.message, 400));
		});
	});

	dicer.on('finish', function () {
		request.files = files;
		return next();
	});

	Stream.pipeline(request, dicer, (error: Error | null) => {
		if (error) {
			return next(new RequestException(error.message, 400));
		}
	});
}

spr.post('/relay/0', multipartParser, async (request, response) => {
	if (!request.files) {
		response.sendStatus(400);
		return;
	}

	if (!request.pid || !request.nexAccount) {
		response.sendStatus(401);
		return;
	}

	// * Check that the account is a 3DS and isn't banned
	if (!request.nexAccount.friendCode || request.nexAccount.accessLevel < 0) {
		LOG_INFO(`{request.pid}: User is banned`);
		response.sendStatus(403);
		return;
	}

	const sprMetadataBuffer: Buffer | undefined = request.files['spr-meta'];

	if (!sprMetadataBuffer) {
		LOG_WARN(`{request.pid}: Missing spr-meta file`);
		response.sendStatus(400);
		return;
	}

	const sprSlots: SPRSlot[] = [];

	// * Check spr-meta metadata headers
	const sprMetadata = sprMetadataBuffer.toString();
	const metadataHeaders = sprMetadata.split('\r\n'); // * Split header lines

	if (metadataHeaders.length < 1) {
		LOG_WARN(`{request.pid}: spr-meta file is too short / empty`);
		response.sendStatus(400);
		return;
	}

	for (let i = 0; i < metadataHeaders.length; i++) {
		const metadataHeader = metadataHeaders[i];
		const [header, value] = metadataHeader.split(': '); // * Split header and value
		if (!header || !value) {
			LOG_WARN(`{request.pid}: Bad spr-meta entry`);
			response.sendStatus(400);
			return;
		}

		// * Since the headers will always use the same pattern (first the slotsize, then the metadata for each slot),
		// * we can guarantee that i must match with the slot we are looking at except for 0, which will be the slotsize
		if (i === 0) {
			if (header !== 'slotsize') {
				LOG_WARN(`{request.pid}: spr-meta missing slotsize`);
				response.sendStatus(400);
				return;
			}

			// * Validate slotsize
			let slotsize: number;
			try {
				slotsize = parseInt(value);
			} catch {
				LOG_WARN(`{request.pid}: Invalid spr-meta slotsize`);
				response.sendStatus(400);
				return;
			}

			// * We don't count the slotsize header itself in the slot count
			if (slotsize !== (metadataHeaders.length - 1)) {
				LOG_WARN(`{request.pid}: Bad spr-meta slotsize`);
				response.sendStatus(400);
				return;
			}

			continue;
		}

		const metadata = value.split(','); // * Split the value to get the metadata

		if (metadata.length !== 3) {
			LOG_WARN(`{request.pid}: Bad spr-meta entry param count`);
			response.sendStatus(400);
			return;
		}

		let sendMode: SendMode;
		let gameID: number;
		let size: number;
		try {
			sendMode = parseInt(metadata[0]);
			gameID = parseInt(metadata[1], 16);
			size = parseInt(metadata[2]);
		} catch {
			LOG_WARN(`{request.pid}: Invalid spr-meta entry params`);
			response.sendStatus(400);
			return;
		}

		let data: Buffer = Buffer.alloc(0);
		if (size > 0 && sendMode !== SendMode.RecvOnly) {
			const slot = i.toString().padStart(2, '0');
			const slotData: Buffer | undefined = request.files['spr-slot' + slot];

			if (!slotData) {
				LOG_WARN(`{request.pid}: Missing slot data file`);
				response.sendStatus(400);
				return;
			}

			if (slotData.length !== size) {
				LOG_WARN(`{request.pid}: Invalid slot data size`);
				response.sendStatus(400);
				return;
			}

			// * Integrity checks for slot data. Every StreetPass message sent over relays has the following header:
			// * uint32 magic 0x6161
			// * uint32 size
			// * uint32 gameID
			// * uint32 unknown1
			// * uint32 unknown2
			// * This is then followed by a CecMessageHeader (see https://github.com/NarcolepticK/CECDocs/blob/master/Structs/CecMessageHeader.md)

			// * Check that we at least have enough size for the StreetPass header
			if (slotData.length < 0x12) {
				LOG_WARN(`{request.pid}: Slot is too short`);
				response.sendStatus(400);
				return;
			}

			if (slotData.readUInt32LE() !== 0x6161) {
				LOG_WARN(`{request.pid}: Slot header missmatch`);
				response.sendStatus(400);
				return;
			}

			if (slotData.readUInt32LE(4) !== size) {
				LOG_WARN(`{request.pid}: Slot bad size`);
				response.sendStatus(400);
				return;
			}

			if (slotData.readUInt32LE(8) !== gameID) {
				LOG_WARN(`{request.pid}: Slot bad gameID`);
				response.sendStatus(400);
				return;
			}

			data = slotData;
		}

		sprSlots.push({
			sendMode,
			gameID,
			size,
			data
		});
	}

	const userFriends = await getFriends(request.pid);

	let sprData: Buffer = Buffer.alloc(0);
	try {
		for (let i = 0; i < sprSlots.length; i++) {
			const sprSlot = sprSlots[i];
			const slot = String(i + 1).padStart(2, '0');

			// * Upload slot data
			if (sprSlot.size > 0 && sprSlot.sendMode !== SendMode.RecvOnly) {
				const dataHash = crypto.createHash('sha256').update(sprSlot.data).digest('base64');
				let slotData = await getDuplicateCECData(request.pid, sprSlot.gameID);

				if (!slotData || slotData.data_hash !== dataHash) {
					slotData = await CECData.create({
						creator_pid: request.pid,
						game_id: sprSlot.gameID,
						data: sprSlot.data.toString('base64'),
						data_hash: dataHash,
						size: sprSlot.size,
						created: BigInt(Date.now())
					});
				}

				if (slotData.id) {
					await CECSlot.findOneAndUpdate({
						creator_pid: request.pid,
						game_id: slotData.game_id
					}, { latest_data_id: slotData.id }, { upsert: true });
				}
			}

			if (!userFriends || userFriends.pids.length === 0) {
				continue; // * Nothing to receive
			}

			// * Receive slot data
			if (sprSlot.sendMode !== SendMode.SendOnly) {
				const slotData = await getRandomCECData(userFriends.pids, sprSlot.gameID);

				if (slotData) {
					sprData = Buffer.concat([sprData, Buffer.from(slotData.data, 'base64')]);
					sprSlot.size = slotData.size;
				} else {
					sprSlot.size = 0;
				}
			} else {
				sprSlot.size = 0;
			}

			response.setHeader(`X-Spr-Slot${slot}-Result`, `${sprSlot.gameID.toString(16).toUpperCase().padStart(8, '0')},${sprSlot.sendMode},${sprSlot.size}`);
		}
	} catch (error) {
		console.log(error);
		response.sendStatus(400);
		return;
	}

	response.send(sprData);
});

const router = express.Router();

router.use(subdomain('service.spr.app', spr));

export default router;
