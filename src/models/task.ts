import mongoose from 'mongoose';
import { ITask, ITaskMethods, TaskModel } from '@/types/mongoose/task';

const TaskSchema = new mongoose.Schema<ITask, TaskModel, ITaskMethods>({
	deleted: {
		type: Boolean,
		default: false
	},
	id: String,
	in_game_id: String,
	boss_app_id: String,
	creator_pid: Number,
	status: {
		type: String,
		enum : ['open'] // TODO - What else is there?
	},
	title_id: String,
	description: Number,
	created: BigInt,
	updated: BigInt
}, { id: false });

export const Task: TaskModel = mongoose.model<ITask, TaskModel>('Task', TaskSchema);