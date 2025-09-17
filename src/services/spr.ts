import crypto from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { formidable } from 'formidable';
import express from 'express';
import { getDuplicateCECData, getRandomCECData } from '@/database';
import { getFriends } from '@/util';
import { CECData } from '@/models/cec-data';
import { CECSlot } from '@/models/cec-slot';
import { SendMode } from '@/types/common/spr-slot';
import { config } from '@/config-manager';
import { restrictHostnames } from '@/middleware/host-limit';
import { logger } from '@/logger';
import { getCDNFileAsBuffer, uploadCDNFile } from '@/cdn';
import RequestException from '@/request-exception';
import type { File } from 'formidable';
import type { Request } from 'express';
import type { SPRSlot } from '@/types/common/spr-slot';

const spr = express.Router();

async function parseMultipart(request: Request): Promise<Record<string, File>> {
	const form = formidable({
		multiples: false
	});
	const parsedForm = await form.parse(request).catch((err: Error) => {
		throw new RequestException(err.message, 400);
	});

	const entries = Object.entries(parsedForm[1]);
	const entriesWithSinglefile = entries.map(v => [v[0], (v[1] ?? [])[0]]);
	return Object.fromEntries(entriesWithSinglefile);
}

spr.post('/relay/0', async (request, response) => {
	const files = await parseMultipart(request);

	if (!request.pid || !request.nexAccount) {
		response.sendStatus(401);
		return;
	}

	// * Check that the account is a 3DS and isn't banned
	if (!request.nexAccount.friendCode || request.nexAccount.accessLevel < 0) {
		logger.info(`${request.pid}: User is not a 3DS or is banned`);
		response.sendStatus(403);
		return;
	}

	const sprMetadataFile: File | undefined = files['spr-meta'];

	if (!sprMetadataFile) {
		logger.warn(`${request.pid}: Missing spr-meta file`);
		response.sendStatus(400);
		return;
	}

	const sprSlots: SPRSlot[] = [];

	// * Check spr-meta metadata headers
	const sprMetadata = await readFile(sprMetadataFile.filepath, 'utf-8');
	const metadataHeaders = sprMetadata.split('\r\n'); // * Split header lines

	if (metadataHeaders.length < 1) {
		logger.warn(`${request.pid}: spr-meta file is too short / empty`);
		response.sendStatus(400);
		return;
	}

	for (let i = 0; i < metadataHeaders.length; i++) {
		const metadataHeader = metadataHeaders[i];
		const [header, value] = metadataHeader.split(': '); // * Split header and value
		if (!header || !value) {
			logger.warn(`${request.pid}: Bad spr-meta entry`);
			response.sendStatus(400);
			return;
		}

		// * Since the headers will always use the same pattern (first the slotsize, then the metadata for each slot),
		// * we can guarantee that i must match with the slot we are looking at except for 0, which will be the slotsize
		if (i === 0) {
			if (header !== 'slotsize') {
				logger.warn(`${request.pid}: spr-meta missing slotsize`);
				response.sendStatus(400);
				return;
			}

			// * Validate slotsize
			let slotsize: number;
			try {
				slotsize = parseInt(value);
			} catch {
				logger.warn(`${request.pid}: Invalid spr-meta slotsize`);
				response.sendStatus(400);
				return;
			}

			// * We don't count the slotsize header itself in the slot count
			if (slotsize !== (metadataHeaders.length - 1)) {
				logger.warn(`${request.pid}: Bad spr-meta slotsize`);
				response.sendStatus(400);
				return;
			}

			continue;
		}

		const metadata = value.split(','); // * Split the value to get the metadata

		if (metadata.length !== 3) {
			logger.warn(`${request.pid}: Bad spr-meta entry param count`);
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
			logger.warn(`${request.pid}: Invalid spr-meta entry params`);
			response.sendStatus(400);
			return;
		}

		let data: Buffer = Buffer.alloc(0);
		if (size > 0 && sendMode !== SendMode.RecvOnly) {
			const slot = i.toString().padStart(2, '0');
			const slotDataFile: File | undefined = files['spr-slot' + slot];

			if (!slotDataFile) {
				logger.warn(`${request.pid}: Missing slot data file`);
				response.sendStatus(400);
				return;
			}

			if (slotDataFile.size !== size) {
				logger.warn(`${request.pid}: Invalid slot data size`);
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
			if (slotDataFile.size < 0x12) {
				logger.warn(`${request.pid}: Slot is too short`);
				response.sendStatus(400);
				return;
			}

			const slotData = await readFile(slotDataFile.filepath);
			if (slotData.readUInt32LE() !== 0x6161) {
				logger.warn(`${request.pid}: Slot header missmatch`);
				response.sendStatus(400);
				return;
			}

			if (slotData.readUInt32LE(4) !== size) {
				logger.warn(`${request.pid}: Slot bad size`);
				response.sendStatus(400);
				return;
			}

			if (slotData.readUInt32LE(8) !== gameID) {
				logger.warn(`${request.pid}: Slot bad gameID`);
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
					const fileKey = `${request.pid}-${dataHash}`;
					await uploadCDNFile('spr', fileKey, sprSlot.data);
					slotData = await CECData.create({
						creator_pid: request.pid,
						game_id: sprSlot.gameID,
						file_key: fileKey,
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
			sprSlot.size = 0;
			if (sprSlot.sendMode !== SendMode.SendOnly) {
				const slotData = await getRandomCECData(userFriends.pids, sprSlot.gameID);

				if (slotData) {
					const fileData = await getCDNFileAsBuffer('spr', slotData.file_key);
					if (fileData) {
						sprData = Buffer.concat([sprData, fileData]);
						sprSlot.size = slotData.size;
					}
				}
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

router.use(restrictHostnames(config.domains.spr, spr));

export default router;
