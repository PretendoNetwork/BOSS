import { Model, HydratedDocument } from 'mongoose';

export interface IFile {
	deleted: boolean;
	data_id: bigint;
	task_id: string;
	boss_app_id: string;
	supported_countries: string[];
	supported_languages: string[];
	password: string;
	attribute1: string;
	attribute2: string;
	attribute3: string;
	creator_pid: number;
	name: string;
	type: string;
	hash: string;
	size: bigint;
	notify_on_new: string[];
	notify_led: boolean;
	created: bigint;
	updated: bigint;
}

export interface IFileMethods {}

interface IFileQueryHelpers {}

export interface FileModel extends Model<IFile, IFileQueryHelpers, IFileMethods> {}

export type HydratedFileDocument = HydratedDocument<IFile, IFileMethods>