import { Status, ServerError } from 'nice-grpc';
import { getWUPTaskFileByDataID } from '@/database';
import { isValidFileNotifyCondition, isValidFileType } from '@/util';
import { hasPermission } from '@/services/grpc/boss/v1/middleware/authentication-middleware';
import type { AuthenticationCallContextExt } from '@/services/grpc/boss/v1/middleware/authentication-middleware';
import type { CallContext } from 'nice-grpc';
import type { UpdateFileMetadataRequest } from '@pretendonetwork/grpc/boss/update_file_metadata';
import type { Empty } from '@pretendonetwork/grpc/google/protobuf/empty';

export async function updateFileMetadata(request: UpdateFileMetadataRequest, context: CallContext & AuthenticationCallContextExt): Promise<Empty> {
	if (!hasPermission(context, 'updateBossFiles')) {
		throw new ServerError(Status.PERMISSION_DENIED, 'PNID not authorized to update file metadata');
	}

	const dataID = request.dataId;
	const updateData = request.updateData;

	if (!dataID) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing file data ID');
	}

	if (!updateData) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing file update data');
	}

	const file = await getWUPTaskFileByDataID(dataID);

	if (!file || file.deleted) {
		throw new ServerError(Status.INVALID_ARGUMENT, `File ${dataID} not found`);
	}

	if (!isValidFileType(updateData.type)) {
		throw new ServerError(Status.INVALID_ARGUMENT, `${updateData.type} is not a valid type`);
	}

	for (const notifyCondition of updateData.notifyOnNew) {
		if (!isValidFileNotifyCondition(notifyCondition)) {
			throw new ServerError(Status.INVALID_ARGUMENT, `${notifyCondition} is not a valid notify condition`);
		}
	}

	file.task_id = updateData.taskId.slice(0, 7);
	file.boss_app_id = updateData.bossAppId;
	file.supported_countries = updateData.supportedCountries;
	file.supported_languages = updateData.supportedLanguages;
	file.password = updateData.password;
	file.attribute1 = updateData.attribute1;
	file.attribute2 = updateData.attribute2;
	file.attribute3 = updateData.attribute3;
	file.name = updateData.name;
	file.type = updateData.type;
	file.notify_on_new = updateData.notifyOnNew;
	file.notify_led = updateData.notifyLed;
	file.updated = BigInt(Date.now());

	await file.save();

	return {};
}
