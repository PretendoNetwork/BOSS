import { getAllTasks } from '@/database';
import type { ListTasksResponse } from '@pretendonetwork/grpc/boss/v2/list_tasks';

export async function listTasks(): Promise<ListTasksResponse> {
	const tasks = await getAllTasks(false);

	return {
		tasks: tasks.map(task => ({
			deleted: task.deleted,
			id: task.id,
			inGameId: task.in_game_id,
			bossAppId: task.boss_app_id,
			creatorPid: task.creator_pid,
			status: task.status,
			interval: 0, // TODO - Don't stub this
			titleId: BigInt(parseInt(task.title_id, 16)),
			description: task.description,
			createdTimestamp: task.created,
			updatedTimestamp: task.updated
		}))
	};
}
