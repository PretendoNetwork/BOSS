import { CallContext, Status, ServerError } from 'nice-grpc';
import { DeleteFileRequest } from '@pretendonetwork/grpc/boss/delete_file';
import { GetUserDataResponse } from '@pretendonetwork/grpc/account/get_user_data_rpc';
import { getTaskFileByDataID } from '@/database';
import { AuthenticationCallContextExt } from '@/services/grpc/boss/middleware/authentication-middleware';
import { Empty } from '@pretendonetwork/grpc/boss/google/protobuf/empty';

export async function deleteFile(request: DeleteFileRequest, context: CallContext & AuthenticationCallContextExt): Promise<Empty> {
	// * This is asserted in authentication middleware, we know this is never null
	const user: GetUserDataResponse = context.user!;

	if (!user.permissions?.deleteBossFiles) {
		throw new ServerError(Status.PERMISSION_DENIED, 'PNID not authorized to delete files');
	}

	const dataID = request.dataId;
	const bossAppID = request.bossAppId.trim();

	if (!dataID) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing file data ID');
	}

	const file = await getTaskFileByDataID(dataID);

	if (!file || file.boss_app_id !== bossAppID) {
		throw new ServerError(Status.INVALID_ARGUMENT, `File ${dataID} not found for BOSS app ${bossAppID}`);
	}

	file.deleted = true;
	file.updated = BigInt(Date.now());

	await file.save();

	return {};
}
