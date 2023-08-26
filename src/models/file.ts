import mongoose from 'mongoose';
import { AutoIncrementID }  from '@typegoose/auto-increment';
import { IFile, IFileMethods, FileModel } from '@/types/mongoose/file';

const FileSchema = new mongoose.Schema<IFile, FileModel, IFileMethods>({
	deleted: {
		type: Boolean,
		default: false
	},
	data_id: Number, // TODO - Wait until https://github.com/typegoose/auto-increment/pull/21 is merged and then change this to BigInt
	task_id: String,
	boss_app_id: String,
	supported_countries: [String],
	supported_languages: [String],
	creator_pid: Number,
	name: String,
	type: String,
	hash: String,
	size: BigInt,
	notify_on_new: [String],
	notify_led: Boolean,
	created: BigInt,
	updated: BigInt
}, { id: false });

FileSchema.plugin(AutoIncrementID, {
	startAt: 50000, // * Start very high to avoid conflicts with Nintendo Data IDs
	field: 'data_id'
});

export const File: FileModel = mongoose.model<IFile, FileModel>('File', FileSchema);