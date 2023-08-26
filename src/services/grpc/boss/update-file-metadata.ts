import { CallContext, Status, ServerError } from 'nice-grpc';
import { UpdateFileMetadataRequest } from '@pretendonetwork/grpc/boss/update_file_metadata';
import { GetUserDataResponse } from '@pretendonetwork/grpc/account/get_user_data_rpc';
import { getTaskFileByDataID } from '@/database';
import { AuthenticationCallContextExt } from '@/services/grpc/boss/middleware/authentication-middleware';
import { Empty } from '@pretendonetwork/grpc/boss/google/protobuf/empty';
import { isValidFileNotifyCondition, isValidFileType } from '@/util';

export async function updateFileMetadata(request: UpdateFileMetadataRequest, context: CallContext & AuthenticationCallContextExt): Promise<Empty> {
	// * This is asserted in authentication middleware, we know this is never null
	const user: GetUserDataResponse = context.user!;

	if (!user.permissions?.updateBossFiles) {
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

	const file = await getTaskFileByDataID(dataID);

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
	file.name = updateData.name;
	file.type = updateData.type;
	file.notify_on_new = updateData.notifyOnNew;
	file.notify_led = updateData.notifyLed;
	file.updated = BigInt(Date.now());

	await file.save();

	return {};
}
