import { Status, ServerError } from 'nice-grpc';
import { getTask } from '@/database';
import { hasPermission } from '@/services/grpc/boss/v2/middleware/authentication-middleware';
import type { AuthenticationCallContextExt } from '@/services/grpc/boss/v2/middleware/authentication-middleware';
import type { CallContext } from 'nice-grpc';
import type { UpdateTaskRequest } from '@pretendonetwork/grpc/boss/v2/update_task';
import type { Empty } from '@pretendonetwork/grpc/google/protobuf/empty';

export async function updateTask(request: UpdateTaskRequest, context: CallContext & AuthenticationCallContextExt): Promise<Empty> {
	if (!hasPermission(context, 'updateBossTasks')) {
		throw new ServerError(Status.PERMISSION_DENIED, 'PNID not authorized to update tasks');
	}

	const taskID = request.id.trim();
	const bossAppID = request.bossAppId.trim();
	const updateData = request.updateData;

	if (!taskID) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing task ID');
	}

	if (!bossAppID) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing BOSS app ID');
	}

	if (!updateData) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing task update data');
	}

	const task = await getTask(bossAppID, taskID);

	if (!task) {
		throw new ServerError(Status.INVALID_ARGUMENT, `Task ${taskID} not found for BOSS app ${bossAppID}`);
	}

	if (updateData.status !== 'open' && updateData.status !== 'close') {
		throw new ServerError(Status.INVALID_ARGUMENT, `Status ${updateData.status} is invalid`);
	}

	if (updateData.id) {
		task.id = updateData.id.slice(0, 7);
		task.in_game_id = updateData.id;
	}

	task.boss_app_id = updateData.bossAppId ? updateData.bossAppId : task.boss_app_id;
	task.title_id = updateData.titleId ? updateData.titleId.toString(16).toLowerCase().padStart(16, '0') : task.title_id;
	task.status = updateData.status ? updateData.status : task.status;
	task.interval = updateData.interval ? updateData.interval : task.interval;
	task.description = updateData.description ? updateData.description : task.description;
	task.updated = BigInt(Date.now());

	await task.save();

	return {};
}
