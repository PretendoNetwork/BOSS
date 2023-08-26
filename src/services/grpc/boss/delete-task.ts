import { CallContext, Status, ServerError } from 'nice-grpc';
import { DeleteTaskRequest } from '../../../../../grpc-ts/dist/boss/delete_task';
import { GetUserDataResponse } from '../../../../../grpc-ts/dist/account/get_user_data_rpc';
import { getTask } from '@/database';
import { AuthenticationCallContextExt } from '@/services/grpc/boss/middleware/authentication-middleware';
import { Empty } from '../../../../../grpc-ts/dist/boss/google/protobuf/empty';

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
