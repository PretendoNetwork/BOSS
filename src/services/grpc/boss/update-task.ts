import { Status, ServerError } from 'nice-grpc';
import { getTask } from '@/database';
import type { CallContext } from 'nice-grpc';
import type { UpdateTaskRequest } from '@pretendonetwork/grpc/boss/update_task';
import type { GetUserDataResponse } from '@pretendonetwork/grpc/account/get_user_data_rpc';
import type { AuthenticationCallContextExt } from '@/services/grpc/boss/middleware/authentication-middleware';
import type { Empty } from '@pretendonetwork/grpc/boss/google/protobuf/empty';

export async function updateTask(request: UpdateTaskRequest, context: CallContext & AuthenticationCallContextExt): Promise<Empty> {
	// * This is asserted in authentication middleware, we know this is never null
	const user: GetUserDataResponse = context.user!;

	if (!user.permissions?.updateBossTasks) {
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

	if (updateData.status !== 'open') {
		throw new ServerError(Status.INVALID_ARGUMENT, `Status ${updateData.status} is invalid`);
	}

	task.id = updateData.id;
	task.boss_app_id = updateData.bossAppId;
	task.title_id = updateData.titleId;
	task.status = updateData.status;
	task.description = updateData.description;
	task.updated = BigInt(Date.now());

	await task.save();

	return {};
}
