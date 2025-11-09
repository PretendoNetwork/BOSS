import { ServerError, Status } from 'nice-grpc';
import { getTask } from '@/database';
import { Task } from '@/models/task';
import { hasPermission } from '@/services/grpc/boss/v1/middleware/authentication-middleware';
import type { AuthenticationCallContextExt } from '@/services/grpc/boss/v1/middleware/authentication-middleware';
import type { CallContext } from 'nice-grpc';
import type { RegisterTaskRequest, RegisterTaskResponse } from '@pretendonetwork/grpc/boss/register_task';

const BOSS_APP_ID_FILTER_REGEX = /^[A-Za-z0-9]*$/;

export async function registerTask(request: RegisterTaskRequest, context: CallContext & AuthenticationCallContextExt): Promise<RegisterTaskResponse> {
	if (!hasPermission(context, 'createBossTasks')) {
		throw new ServerError(Status.PERMISSION_DENIED, 'PNID not authorized to register new tasks');
	}

	const taskID = request.id.trim();
	const bossAppID = request.bossAppId.trim();
	const titleID = request.titleId.trim().toLocaleLowerCase();
	const description = request.description.trim();

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

	if (await getTask(bossAppID, taskID)) {
		throw new ServerError(Status.ALREADY_EXISTS, `Task ${taskID} already exists for BOSS app ${bossAppID}`);
	}

	// * BOSS tasks have 2 IDs
	// * - 1: The ID which is registered in-game
	// * - 2: The ID which is registered on the server
	// * The in-game task ID can be any length, but the
	// * ID registered on the server is capped at 7 characters.
	// * When querying tasks in the API, the server ignores
	// * all characters after the 7th. For example, Splatoon
	// * registers task optdata2 in-game, but the server
	// * tracks it as task optdata

	const task = await Task.create({
		id: taskID.slice(0, 7),
		in_game_id: taskID,
		boss_app_id: bossAppID,
		creator_pid: context.user?.pid,
		status: 'open',
		title_id: titleID,
		description: description,
		created: Date.now(),
		updated: Date.now()
	});

	return {
		task: {
			deleted: task.deleted,
			id: task.id,
			inGameId: task.in_game_id,
			bossAppId: task.boss_app_id,
			creatorPid: task.creator_pid,
			status: task.status,
			titleId: task.title_id,
			description: task.description,
			createdTimestamp: task.created,
			updatedTimestamp: task.updated
		}
	};
}
