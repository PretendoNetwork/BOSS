import mongoose from 'mongoose';
import { CECData } from '@/models/cec-data';
import { CECSlot } from '@/models/cec-slot';
import { Task } from '@/models/task';
import { File } from '@/models/file';
import { config } from '@/config-manager';
import type { HydratedCECDataDocument } from '@/types/mongoose/cec-data';
import type { HydratedCECSlotDocument, ICECSlot } from '@/types/mongoose/cec-slot';
import type { HydratedTaskDocument, ITask } from '@/types/mongoose/task';
import type { HydratedFileDocument, IFile } from '@/types/mongoose/file';

const connection_string: string = config.mongoose.connection_string;

let _connection: mongoose.Connection;

export async function connect(): Promise<void> {
	await mongoose.connect(connection_string);

	_connection = mongoose.connection;
	_connection.on('error', console.error.bind(console, 'connection error:'));
}

export function connection(): mongoose.Connection {
	return _connection;
}

export function verifyConnected(): void {
	if (!connection()) {
		throw new Error('Cannot make database requests without being connected');
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

export function getTaskFilesWithAttributes(allowDeleted: boolean, bossAppID: string, taskID: string, country?: string, language?: string, attribute1?: string, attribute2?: string, attribute3?: string): Promise<HydratedFileDocument[]> {
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

	if (attribute1) {
		filter.attribute1 = attribute1;
	}

	if (attribute2) {
		filter.attribute2 = attribute2;
	}

	if (attribute3) {
		filter.attribute3 = attribute3;
	}

	return File.find(filter);
}

export function getTaskFile(bossAppID: string, taskID: string, name: string, country?: string, language?: string): Promise<HydratedFileDocument | null> {
	verifyConnected();

	const filter: mongoose.FilterQuery<IFile> = {
		deleted: false,
		boss_app_id: bossAppID,
		task_id: taskID.slice(0, 7),
		name: name
	};

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

	return File.findOne<HydratedFileDocument>(filter);
}

export function getTaskFileByDataID(dataID: bigint): Promise<HydratedFileDocument | null> {
	verifyConnected();

	return File.findOne<HydratedFileDocument>({
		deleted: false,
		data_id: Number(dataID)
	});
}

export function getDuplicateCECData(pid: number, gameID: number): Promise<HydratedCECDataDocument | null> {
	verifyConnected();

	return CECData.findOne<HydratedCECDataDocument>({
		creator_pid: pid,
		game_id: gameID
	});
}

export async function getRandomCECData(pids: number[], gameID: number): Promise<HydratedCECDataDocument | null> {
	verifyConnected();

	// * We search through the CECSlot so that everyone has the same chance of getting their data picked up
	const filter: mongoose.FilterQuery<ICECSlot> = {
		creator_pid: {
			$in: pids
		},
		game_id: gameID
	};

	const count = await CECSlot.countDocuments(filter);
	const rand = Math.floor(Math.random() * count);

	const cecSlot = await CECSlot.findOne<HydratedCECSlotDocument>(filter).skip(rand);

	if (cecSlot) {
		return CECData.findById(cecSlot.latest_data_id);
	}

	return null;
}
