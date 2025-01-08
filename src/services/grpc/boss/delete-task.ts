import { Status, ServerError } from 'nice-grpc';
import { getTask } from '@/database';
import type { CallContext } from 'nice-grpc';
import type { DeleteTaskRequest } from '@pretendonetwork/grpc/boss/delete_task';
import type { GetUserDataResponse } from '@pretendonetwork/grpc/account/get_user_data_rpc';
import type { AuthenticationCallContextExt } from '@/services/grpc/boss/middleware/authentication-middleware';
import type { Empty } from '@pretendonetwork/grpc/boss/google/protobuf/empty';

export async function deleteTask(request: DeleteTaskRequest, context: CallContext & AuthenticationCallContextExt): Promise<Empty> {
	// * This is asserted in authentication middleware, we know this is never null
	const user: GetUserDataResponse = context.user!;

	if (!user.permissions?.deleteBossTasks) {
		throw new ServerError(Status.PERMISSION_DENIED, 'PNID not authorized to delete tasks');
	}

	const taskID = request.id.trim();
	const bossAppID = request.bossAppId.trim();

	if (!taskID) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing task ID');
	}

	if (!bossAppID) {
		throw new ServerError(Status.INVALID_ARGUMENT, 'Missing BOSS app ID');
	}

	const task = await getTask(bossAppID, taskID);

	if (!task) {
		throw new ServerError(Status.INVALID_ARGUMENT, `Task ${taskID} not found for BOSS app ${bossAppID}`);
	}

	task.deleted = true;
	task.updated = BigInt(Date.now());

	await task.save();

	return {};
}
