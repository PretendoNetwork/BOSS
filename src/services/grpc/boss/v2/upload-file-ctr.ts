import { Status, ServerError } from 'nice-grpc';
import { CTR_BOSS_FLAGS, encrypt3DS } from '@pretendonetwork/boss-crypto';
import { isValidCountryCode, isValidLanguage, md5 } from '@/util';
import { connection as databaseConnection, getTask, getCTRTaskFile } from '@/database';
import { FileCTR } from '@/models/file-ctr';
import { config } from '@/config-manager';
import { uploadCDNFile } from '@/cdn';
import { hasPermission } from '@/services/grpc/boss/v2/middleware/authentication-middleware';
import type { AuthenticationCallContextExt } from '@/services/grpc/boss/v2/middleware/authentication-middleware';
import type { CallContext } from 'nice-grpc';
import type { UploadFileCTRRequest, UploadFileCTRResponse } from '@pretendonetwork/grpc/boss/v2/upload_file_ctr';
import type { HydratedFileCTRDocument } from '@/types/mongoose/file-ctr';

const BOSS_APP_ID_FILTER_REGEX = /^[A-Za-z0-9]*$/;

export async function uploadFileCTR(request: UploadFileCTRRequest, context: CallContext & AuthenticationCallContextExt): Promise<UploadFileCTRResponse> {
	if (!hasPermission(context, 'uploadBossFiles')) {
		throw new ServerError(Status.PERMISSION_DENIED, 'PNID not authorized to upload new files');
	}

	const taskID = request.taskId.trim();
	const bossAppID = request.bossAppId.trim();
	const supportedCountries = request.supportedCountries;
	const supportedLanguages = request.supportedLanguages;
	const name = request.name.trim();
	const payloads = request.payloadContents;

	if (!taskID) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing task ID');
	}

	if (!bossAppID) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing BOSS app ID');
	}

	if (bossAppID.length !== 16) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'BOSS app ID must be 16 characters');
	}

	if (!BOSS_APP_ID_FILTER_REGEX.test(bossAppID)) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'BOSS app ID must only contain letters and numbers');
	}

	if (!(await getTask(bossAppID, taskID))) {
		throw new ServerError(Status.NOT_FOUND, `Task ${taskID} does not exist for BOSS app ${bossAppID}`);
	}

	for (const country of supportedCountries) {
		if (!isValidCountryCode(country)) {
			throw new ServerError(Status.INVALID_ARGUMENT, `${country} is not a valid country`);
		}
	}

	for (const language of supportedLanguages) {
		if (!isValidLanguage(language)) {
			throw new ServerError(Status.INVALID_ARGUMENT, `${language} is not a valid language`);
		}
	}

	if (!request.attributes) {
		request.attributes = {
			attribute1: '',
			attribute2: '',
			attribute3: '',
			description: ''
		};
	}

	const session = await databaseConnection().startSession();
	await session.startTransaction();

	let file: HydratedFileCTRDocument | null;

	try {
		// * Create the FileCTR first since encrypt3DS relies on the serial number
		file = await getCTRTaskFile(bossAppID, taskID, name);

		if (file) {
			file.deleted = true;
			file.updated = BigInt(Date.now());

			await file.save({ session });
		}

		[file] = await FileCTR.create([{
			creator_pid: context.user?.pid,
			// * hash: String,
			// * file_key: String,
			// * size: BigInt,
			task_id: taskID,
			boss_app_id: bossAppID,
			supported_countries: supportedCountries,
			supported_languages: supportedLanguages,
			attributes: request.attributes,
			name: name,
			payload_contents: payloads.map(payload => ({
				title_id: payload.titleId,
				content_datatype: payload.contentDatatype,
				ns_data_id: payload.nsDataId,
				version: payload.version,
				size: payload.content.length
			})),
			flags: {
				mark_arrived_privileged: request.flags?.markArrivedPrivileged || false
			},
			created: Date.now(),
			updated: Date.now()
		}], { session });

		const cryptoOptions = payloads.map(payload => ({
			program_id: payload.titleId,
			content_datatype: payload.contentDatatype,
			ns_data_id: payload.nsDataId,
			version: payload.version,
			content: payload.content
		}));

		let flags = 0n;
		if (request.flags?.markArrivedPrivileged) {
			flags |= CTR_BOSS_FLAGS.MARK_ARRIVED_PRIVILEGED;
		}

		// TODO - Somehow support pre-encrypted content?
		const encryptedData = encrypt3DS(config.crypto.ctr.aes_key, file.serial_number, cryptoOptions, flags);
		const contentHash = md5(encryptedData);
		const key = `${bossAppID}/${taskID}/${contentHash}`;

		await uploadCDNFile('taskFile', key, encryptedData);

		file.hash = contentHash;
		file.file_key = key;
		file.size = BigInt(encryptedData.length);

		await file.save({ session });
		await session.commitTransaction();
	} catch (error: unknown) {
		let message = 'Unknown file upload error';

		if (error instanceof Error) {
			message = error.message;
		}

		throw new ServerError(Status.ABORTED, message);
	} finally {
		await session.endSession();
	}

	return {
		file: {
			deleted: file.deleted,
			dataId: file.serial_number,
			taskId: file.task_id,
			bossAppId: file.boss_app_id,
			supportedCountries: file.supported_countries,
			supportedLanguages: file.supported_languages,
			attributes: file.attributes,
			creatorPid: file.creator_pid,
			name: file.name,
			hash: file.hash,
			serialNumber: file.serial_number,
			payloadContents: file.payload_contents.map(payloadContentInfo => ({
				titleId: payloadContentInfo.title_id,
				contentDatatype: payloadContentInfo.content_datatype,
				nsDataId: payloadContentInfo.ns_data_id,
				version: payloadContentInfo.version,
				size: payloadContentInfo.size
			})),
			size: file.size,
			createdTimestamp: file.created,
			updatedTimestamp: file.updated,
			flags: {
				markArrivedPrivileged: file.flags.mark_arrived_privileged
			}
		}
	};
}
