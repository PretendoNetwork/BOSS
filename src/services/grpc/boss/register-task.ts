import { CallContext, Status, ServerError } from 'nice-grpc';
import { RegisterTaskRequest, RegisterTaskResponse } from '../../../../../grpc-ts/dist/boss/register_task';
import { GetUserDataResponse } from '../../../../../grpc-ts/dist/account/get_user_data_rpc';
import { getTask } from '@/database';
import { Task } from '@/models/task';
import { AuthenticationCallContextExt } from '@/services/grpc/boss/middleware/authentication-middleware';

const BOSS_APP_ID_FILTER_REGEX = /^[A-Za-z0-9]*$/;

export async function registerTask(request: RegisterTaskRequest, context: CallContext & AuthenticationCallContextExt): Promise<RegisterTaskResponse> {
	// * This is asserted in authentication middleware, we know this is never null
	const user: GetUserDataResponse = context.user!;

	if (!user.permissions?.createBossTasks) {
		throw new ServerError(Status.PERMISSION_DENIED, 'PNID not authorized to register new tasks');
	}

	const taskID = request.id.trim();
	const bossAppID = request.bossAppId.trim();
	const titleID = request.titleId.trim().toLocaleLowerCase();
	const description = request.description.trim();

	if (!taskID) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing task ID');
	}

	if (taskID.length < 7) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Task ID must be 1-7 characters');
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

	const task = await Task.create({
		id: taskID,
		boss_app_id: bossAppID,
		creator_pid: user.pid,
		status: 'open', // TODO - Make this configurable
		title_id: titleID,
		description: description,
		created: Date.now(),
		updated: Date.now()
	});

	return {
		task: {
			deleted: task.deleted,
			id: task.id,
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
