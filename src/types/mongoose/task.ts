import { Model, HydratedDocument } from 'mongoose';

export interface ITask {
	deleted: boolean;
	id: string;
	in_game_id: string;
	boss_app_id: string;
	creator_pid: number;
	status: 'open';  // TODO - Make this a union. What else is there?
	title_id: string;
	description: string;
	created: bigint;
	updated: bigint;
}

export interface ITaskMethods {}

interface ITaskQueryHelpers {}

export interface TaskModel extends Model<ITask, ITaskQueryHelpers, ITaskMethods> {}

export type HydratedTaskDocument = HydratedDocument<ITask, ITaskMethods>