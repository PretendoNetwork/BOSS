import { Status, ServerError } from 'nice-grpc';
import { getTaskFileByDataID } from '@/database';
import { hasPermission } from '@/services/grpc/boss/middleware/authentication-middleware';
import type { AuthenticationCallContextExt } from '@/services/grpc/boss/middleware/authentication-middleware';
import type { CallContext } from 'nice-grpc';
import type { DeleteFileRequest } from '@pretendonetwork/grpc/boss/delete_file';
import type { Empty } from '@pretendonetwork/grpc/boss/google/protobuf/empty';

export async function deleteFile(request: DeleteFileRequest, context: CallContext & AuthenticationCallContextExt): Promise<Empty> {
	if (!hasPermission(context, 'deleteBossFiles')) {
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
