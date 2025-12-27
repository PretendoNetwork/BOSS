import { Status, ServerError } from 'nice-grpc';
import { getTask } from '@/database';
import { hasPermission } from '@/services/grpc/boss/v1/middleware/authentication-middleware';
import type { AuthenticationCallContextExt } from '@/services/grpc/boss/v1/middleware/authentication-middleware';
import type { CallContext } from 'nice-grpc';
import type { DeleteTaskRequest } from '@pretendonetwork/grpc/boss/delete_task';
import type { Empty } from '@pretendonetwork/grpc/google/protobuf/empty';

export async function deleteTask(request: DeleteTaskRequest, context: CallContext & AuthenticationCallContextExt): Promise<Empty> {
	if (!hasPermission(context, 'deleteBossTasks')) {
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
