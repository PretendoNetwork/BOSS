import mongoose from 'mongoose';
import { Task } from '@/models/task';
import { File } from '@/models/file';
import { config } from '@/config-manager';
import { HydratedTaskDocument, ITask } from '@/types/mongoose/task';
import { HydratedFileDocument, IFile } from '@/types/mongoose/file';

const connection_string: string = config.mongoose.connection_string;
const options: mongoose.ConnectOptions = config.mongoose.options;

let _connection: mongoose.Connection;

export async function connect(): Promise<void> {
	await mongoose.connect(connection_string, options);

	_connection = mongoose.connection;
	_connection.on('error', console.error.bind(console, 'connection error:'));
}

export function connection(): mongoose.Connection {
	return _connection;
}

export function verifyConnected(): void {
	if (!connection()) {
		throw new Error('Cannot make database requets without being connected');
	}
}

export function getAllTasks(allowDeleted: boolean): Promise<HydratedTaskDocument[]> {
	verifyConnected();

	const filter: mongoose.FilterQuery<ITask> = {};

	if (!allowDeleted) {
		filter.deleted = false;
	}

	return Task.find(filter);
}

export function getTask(bossAppID: string, taskID: string): Promise<HydratedTaskDocument | null> {
	verifyConnected();

	return Task.findOne<HydratedTaskDocument>({
		deleted: false,
		id: taskID.slice(0, 7),
		boss_app_id: bossAppID
	});
}

export function getTaskFiles(allowDeleted: boolean, bossAppID: string, taskID: string, country?: string, language?: string): Promise<HydratedFileDocument[]> {
	verifyConnected();

	const filter: mongoose.FilterQuery<IFile> = {
		task_id: taskID.slice(0, 7),
		boss_app_id: bossAppID
	};

	if (!allowDeleted) {
		filter.deleted = false;
	}

	if (country) {
		filter.supported_countries = {
			$in: [country]
		};
	}

	if (language) {
		filter.supported_languages = {
			$in: [language]
		};
	}

	return File.find(filter);
}

export function getTaskFile(bossAppID: string, taskID: string, name: string): Promise<HydratedFileDocument | null> {
	verifyConnected();

	return File.findOne<HydratedFileDocument>({
		deleted: false,
		boss_app_id: bossAppID,
		task_id: taskID.slice(0, 7),
		name: name
	});
}

export function getTaskFileByDataID(dataID: bigint): Promise<HydratedFileDocument | null> {
	verifyConnected();

	return File.findOne<HydratedFileDocument>({
		deleted: false,
		data_id: dataID
	});
}