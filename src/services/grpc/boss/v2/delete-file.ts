import { Status, ServerError } from 'nice-grpc';
import { PlatformType } from '@pretendonetwork/grpc/boss/v2/platform_type';
import { getCTRTaskFileBySerialNumber, getWUPTaskFileByDataID } from '@/database';
import { hasPermission } from '@/services/grpc/boss/v2/middleware/authentication-middleware';
import type { AuthenticationCallContextExt } from '@/services/grpc/boss/v2/middleware/authentication-middleware';
import type { CallContext } from 'nice-grpc';
import type { DeleteFileRequest } from '@pretendonetwork/grpc/boss/v2/delete_file';
import type { Empty } from '@pretendonetwork/grpc/google/protobuf/empty';
import type { HydratedFileCTRDocument } from '@/types/mongoose/file-ctr';
import type { HydratedFileWUPDocument } from '@/types/mongoose/file-wup';

export async function deleteFile(request: DeleteFileRequest, context: CallContext & AuthenticationCallContextExt): Promise<Empty> {
	if (!hasPermission(context, 'deleteBossFiles')) {
		throw new ServerError(Status.PERMISSION_DENIED, 'PNID not authorized to delete files');
	}

	const dataID = request.dataId;
	const bossAppID = request.bossAppId.trim();

	if (!dataID) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing file data ID');
	}

	let file: HydratedFileCTRDocument | HydratedFileWUPDocument | null;

	if (request.platformType === PlatformType.PLATFORM_TYPE_CTR) {
		file = await getCTRTaskFileBySerialNumber(dataID);
	} else if (request.platformType === PlatformType.PLATFORM_TYPE_WUP) {
		file = await getWUPTaskFileByDataID(dataID);
	} else {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Invalid platform type');
	}

	if (!file || file.boss_app_id !== bossAppID) {
		throw new ServerError(Status.INVALID_ARGUMENT, `File ${dataID} not found for BOSS app ${bossAppID}`);
	}

	file.deleted = true;
	file.updated = BigInt(Date.now());

	await file.save();

	return {};
}
