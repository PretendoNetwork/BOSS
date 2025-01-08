import { Status, ServerError } from 'nice-grpc';
import { isValidCountryCode, isValidLanguage } from '@/util';
import { getTaskFiles } from '@/database';
import type { ListFilesRequest, ListFilesResponse } from '@pretendonetwork/grpc/boss/list_files';

const BOSS_APP_ID_FILTER_REGEX = /^[A-Za-z0-9]*$/;

export async function listFiles(request: ListFilesRequest): Promise<ListFilesResponse> {
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

	const files = await getTaskFiles(false, bossAppID, taskID, country, language);

	return {
		files: files.map(file => ({
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
		}))
	};
}
