import mongoose from 'mongoose';
import { AutoIncrementID } from '@typegoose/auto-increment';
import type { IFileWUP, IFileWUPMethods, FileWUPModel } from '@/types/mongoose/file-wup';

const FileWUPSchema = new mongoose.Schema<IFileWUP, FileWUPModel, IFileWUPMethods>({
	deleted: {
		type: Boolean,
		default: false
	},
	file_key: String,
	data_id: BigInt,
	task_id: String,
	boss_app_id: String,
	supported_countries: [String],
	supported_languages: [String],
	attributes: {
		attribute1: String,
		attribute2: String,
		attribute3: String,
		description: String
	},
	creator_pid: Number,
	name: String,
	type: String,
	hash: String,
	size: BigInt,
	notify_on_new: [String],
	notify_led: Boolean,
	condition_played: BigInt,
	auto_delete: Boolean, // * We don't know what this does, but it exists on WUP tasks. So track it
	created: BigInt,
	updated: BigInt
}, { id: false });

FileWUPSchema.plugin(AutoIncrementID, {
	startAt: 50000, // * Start very high to avoid conflicts with Nintendo Data IDs
	field: 'data_id'
});

FileWUPSchema.index({ task_id: 1, boss_app_id: 1 });
FileWUPSchema.index({ task_id: 1, boss_app_id: 1, name: 1 });

export const FileWUP = mongoose.model<IFileWUP, FileWUPModel>('FileWUP', FileWUPSchema, 'files-wup');
