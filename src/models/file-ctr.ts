import mongoose from 'mongoose';
import { AutoIncrementID } from '@typegoose/auto-increment';
import type { IFileCTR, IFileCTRMethods, FileCTRModel } from '@/types/mongoose/file-ctr';

const FileCTRSchema = new mongoose.Schema<IFileCTR, FileCTRModel, IFileCTRMethods>({
	deleted: {
		type: Boolean,
		default: false
	},
	creator_pid: Number,
	hash: String,
	file_key: String,
	size: BigInt,
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
	name: String,
	serial_number: Number, // * This is effectively the predecessor of the Wii U DataID. TODO - 3DBrew says this is a uint64?
	payload_contents: [{
		title_id: BigInt,
		content_datatype: Number,
		ns_data_id: Number, // * Should payload contents be put in their own collection with their own autoincrementing IDs?
		version: Number,
		size: Number
	}],
	flags: {
		mark_arrived_privileged: Boolean
	},
	created: BigInt,
	updated: BigInt
}, { id: false });

FileCTRSchema.plugin(AutoIncrementID, {
	startAt: 50000, // * Start very high to avoid conflicts with Nintendo Data IDs
	field: 'serial_number'
});

FileCTRSchema.index({ task_id: 1, boss_app_id: 1 });
FileCTRSchema.index({ task_id: 1, boss_app_id: 1, name: 1 });

export const FileCTR = mongoose.model<IFileCTR, FileCTRModel>('FileCTR', FileCTRSchema, 'files-ctr');
