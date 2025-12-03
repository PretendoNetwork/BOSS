import { Status, ServerError } from 'nice-grpc';
import { isValidCountryCode, isValidLanguage } from '@/util';
import { getWUPTaskFiles } from '@/database';
import type { ListFilesWUPRequest, ListFilesWUPResponse } from '@pretendonetwork/grpc/boss/v2/list_files_wup';

const BOSS_APP_ID_FILTER_REGEX = /^[A-Za-z0-9]*$/;

export async function listFilesWUP(request: ListFilesWUPRequest): Promise<ListFilesWUPResponse> {
	const taskID = request.taskId.trim();
	const bossAppID = request.bossAppId.trim();
	const country = request.country?.trim();
	const language = request.language?.trim();
	const any = request.any;

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

	const files = await getWUPTaskFiles(false, bossAppID, taskID, country, language, any);

	return {
		files: files.map(file => ({
			deleted: file.deleted,
			dataId: file.data_id,
			taskId: file.task_id,
			bossAppId: file.boss_app_id,
			supportedCountries: file.supported_countries,
			supportedLanguages: file.supported_languages,
			attributes: file.attributes,
			creatorPid: file.creator_pid,
			name: file.name,
			type: file.type,
			hash: file.hash,
			size: file.size,
			notifyOnNew: file.notify_on_new,
			notifyLed: file.notify_led,
			conditionPlayed: file.condition_played,
			autoDelete: file.auto_delete,
			createdTimestamp: file.created,
			updatedTimestamp: file.updated
		}))
	};
}
