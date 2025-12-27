import { Status, ServerError } from 'nice-grpc';
import { getCTRTaskFileBySerialNumber } from '@/database';
import { hasPermission } from '@/services/grpc/boss/v2/middleware/authentication-middleware';
import type { AuthenticationCallContextExt } from '@/services/grpc/boss/v2/middleware/authentication-middleware';
import type { CallContext } from 'nice-grpc';
import type { UpdateFileMetadataCTRRequest } from '@pretendonetwork/grpc/boss/v2/update_file_metadata_ctr';
import type { Empty } from '@pretendonetwork/grpc/google/protobuf/empty';

export async function updateFileMetadataCTR(request: UpdateFileMetadataCTRRequest, context: CallContext & AuthenticationCallContextExt): Promise<Empty> {
	if (!hasPermission(context, 'updateBossFiles')) {
		throw new ServerError(Status.PERMISSION_DENIED, 'PNID not authorized to update file metadata');
	}

	const serialNumber = request.dataId;
	const updateData = request.updateData;

	if (!serialNumber) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing file serial number');
	}

	if (!updateData) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing file update data');
	}

	const file = await getCTRTaskFileBySerialNumber(serialNumber);

	if (!file || file.deleted) {
		throw new ServerError(Status.INVALID_ARGUMENT, `File ${serialNumber} not found`);
	}

	file.task_id = updateData.taskId.slice(0, 7);
	file.boss_app_id = updateData.bossAppId;
	file.supported_countries = updateData.supportedCountries;
	file.supported_languages = updateData.supportedLanguages;
	file.attributes.attribute1 = updateData.attributes ? updateData.attributes.attribute1 : file.attributes.attribute1;
	file.attributes.attribute2 = updateData.attributes ? updateData.attributes.attribute2 : file.attributes.attribute2;
	file.attributes.attribute3 = updateData.attributes ? updateData.attributes.attribute3 : file.attributes.attribute3;
	file.attributes.description = updateData.attributes ? updateData.attributes.description : file.attributes.description;
	file.name = updateData.name;
	file.updated = BigInt(Date.now());

	if (updateData.payloadContents.length !== 0) {
		file.payload_contents = updateData.payloadContents.map(payload => ({
			title_id: payload.titleId,
			content_datatype: payload.contentDatatype,
			ns_data_id: payload.nsDataId,
			version: payload.version,
			size: payload.size
		}));
	}

	await file.save();

	return {};
}
