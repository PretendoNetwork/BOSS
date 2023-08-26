import { ListTasksResponse } from '@pretendonetwork/grpc/boss/list_tasks';
import { getAllTasks } from '@/database';

export async function listTasks(): Promise<ListTasksResponse> {
	const tasks = await getAllTasks(false);

	return {
		tasks: tasks.map(task => ({
			deleted: task.deleted,
			id: task.id,
			bossAppId: task.boss_app_id,
			creatorPid: task.creator_pid,
			status: task.status,
			titleId: task.title_id,
			description: task.description,
			createdTimestamp: task.created,
			updatedTimestamp: task.updated
		}))
	};
}
