import { Status, ServerError } from 'nice-grpc';
import { encryptWiiU } from '@pretendonetwork/boss-crypto';
import { isValidCountryCode, isValidFileNotifyCondition, isValidFileType, isValidLanguage, md5 } from '@/util';
import { getTask, getWUPTaskFile } from '@/database';
import { FileWUP } from '@/models/file-wup';
import { config } from '@/config-manager';
import { uploadCDNFile } from '@/cdn';
import { hasPermission } from '@/services/grpc/boss/v1/middleware/authentication-middleware';
import type { AuthenticationCallContextExt } from '@/services/grpc/boss/v1/middleware/authentication-middleware';
import type { CallContext } from 'nice-grpc';
import type { UploadFileRequest, UploadFileResponse } from '@pretendonetwork/grpc/boss/upload_file';

const BOSS_APP_ID_FILTER_REGEX = /^[A-Za-z0-9]*$/;

export async function uploadFile(request: UploadFileRequest, context: CallContext & AuthenticationCallContextExt): Promise<UploadFileResponse> {
	if (!hasPermission(context, 'uploadBossFiles')) {
		throw new ServerError(Status.PERMISSION_DENIED, 'PNID not authorized to upload new files');
	}

	const taskID = request.taskId.trim();
	const bossAppID = request.bossAppId.trim();
	const supportedCountries = request.supportedCountries;
	const supportedLanguages = request.supportedLanguages;
	const name = request.name.trim();
	const type = request.type.trim();
	const notifyOnNew = [...new Set(request.notifyOnNew)];
	const notifyLed = request.notifyLed;
	const data = request.data;
	const nameEqualsDataID = request.nameEqualsDataId;

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

	if (!name && !nameEqualsDataID) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Must provide a file name is enable nameEqualsDataId');
	}

	if (!isValidFileType(type)) {
		throw new ServerError(Status.INVALID_ARGUMENT, `${type} is not a valid type`);
	}

	for (const notifyCondition of notifyOnNew) {
		if (!isValidFileNotifyCondition(notifyCondition)) {
			throw new ServerError(Status.INVALID_ARGUMENT, `${notifyCondition} is not a valid notify condition`);
		}
	}

	if (data.length === 0) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Cannot upload empty file');
	}

	let encryptedData: Buffer;

	try {
		encryptedData = encryptWiiU(data, config.crypto.wup.aes_key, config.crypto.wup.hmac_key);
	} catch (error: unknown) {
		let message = 'Unknown file encryption error';

		if (error instanceof Error) {
			message = error.message;
		}

		throw new ServerError(Status.ABORTED, message);
	}

	const contentHash = md5(encryptedData);

	// * Upload file first to prevent ghost DB entries on upload failures
	const key = `${bossAppID}/${taskID}/${contentHash}`;
	try {
		// * Some tasks have file names which are dynamic.
		// * They change depending on the files data ID.
		// * Because of this, using the file name in the
		// * upload key is not viable, as it is not always
		// * known during upload
		await uploadCDNFile('taskFile', key, encryptedData);
	} catch (error: unknown) {
		let message = 'Unknown file upload error';

		if (error instanceof Error) {
			message = error.message;
		}

		throw new ServerError(Status.ABORTED, message);
	}

	let file = await getWUPTaskFile(bossAppID, taskID, name);

	if (file) {
		file.deleted = true;
		file.updated = BigInt(Date.now());

		await file.save();
	}

	file = await FileWUP.create({
		task_id: taskID.slice(0, 7),
		boss_app_id: bossAppID,
		file_key: key,
		supported_countries: supportedCountries,
		supported_languages: supportedLanguages,
		creator_pid: context.user?.pid,
		name: name,
		type: type,
		hash: contentHash,
		size: BigInt(encryptedData.length),
		notify_on_new: notifyOnNew,
		notify_led: notifyLed,
		created: Date.now(),
		updated: Date.now()
	});

	if (nameEqualsDataID) {
		file.name = file.data_id.toString(16).padStart(8, '0');
		await file.save();
	}

	return {
		file: {
			deleted: file.deleted,
			dataId: file.data_id,
			taskId: file.task_id,
			bossAppId: file.boss_app_id,
			supportedCountries: file.supported_countries,
			supportedLanguages: file.supported_languages,
			password: file.password,
			attribute1: file.attribute1,
			attribute2: file.attribute2,
			attribute3: file.attribute3,
			creatorPid: file.creator_pid,
			name: file.name,
			type: file.type,
			hash: file.hash,
			size: file.size,
			notifyOnNew: file.notify_on_new,
			notifyLed: file.notify_led,
			createdTimestamp: file.created,
			updatedTimestamp: file.updated
		}
	};
}
