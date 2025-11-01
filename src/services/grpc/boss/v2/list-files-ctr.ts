import { Status, ServerError } from 'nice-grpc';
import { isValidCountryCode, isValidLanguage } from '@/util';
import { getCTRTaskFiles } from '@/database';
import type { ListFilesCTRRequest, ListFilesCTRResponse } from '@pretendonetwork/grpc/boss/v2/list_files_ctr';

const BOSS_APP_ID_FILTER_REGEX = /^[A-Za-z0-9]*$/;

export async function listFilesCTR(request: ListFilesCTRRequest): Promise<ListFilesCTRResponse> {
	const taskID = request.taskId.trim();
	const bossAppID = request.bossAppId.trim();
	const country = request.country?.trim();
	const language = request.language?.trim();

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

	if (country && !isValidCountryCode(country)) {
		throw new ServerError(Status.INVALID_ARGUMENT, `${country} is not a valid country`);
	}

	if (language && !isValidLanguage(language)) {
		throw new ServerError(Status.INVALID_ARGUMENT, `${language} is not a valid language`);
	}

	const files = await getCTRTaskFiles(false, bossAppID, taskID, country, language);

	return {
		files: files.map(file => ({
			deleted: file.deleted,
			dataId: file.serial_number, // TODO - Is this okay?
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
		}))
	};
}
