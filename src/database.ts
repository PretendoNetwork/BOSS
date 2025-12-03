import mongoose from 'mongoose';
import { CECData } from '@/models/cec-data';
import { CECSlot } from '@/models/cec-slot';
import { Task } from '@/models/task';
import { FileCTR } from '@/models/file-ctr';
import { FileWUP } from '@/models/file-wup';
import { config } from '@/config-manager';
import type { HydratedCECDataDocument } from '@/types/mongoose/cec-data';
import type { HydratedCECSlotDocument, ICECSlot } from '@/types/mongoose/cec-slot';
import type { HydratedTaskDocument, ITask } from '@/types/mongoose/task';
import type { HydratedFileCTRDocument, IFileCTR } from '@/types/mongoose/file-ctr';
import type { HydratedFileWUPDocument, IFileWUP } from '@/types/mongoose/file-wup';

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

export function getCTRTaskFiles(allowDeleted: boolean, bossAppID: string, taskID: string, country?: string, language?: string, any: boolean = false): Promise<HydratedFileCTRDocument[]> {
	verifyConnected();

	const filter: mongoose.FilterQuery<IFileCTR> = {
		task_id: taskID.slice(0, 7),
		boss_app_id: bossAppID,
		$and: []
	};

	if (!allowDeleted) {
		filter.deleted = false;
	}

	if (country) {
		filter.$and?.push({
			$or: [
				{ supported_countries: { $eq: [] } },
				{ supported_countries: country }
			]
		});
	} else if (!any) {
		filter.$and?.push({
			supported_countries: { $eq: [] }
		});
	}

	if (language) {
		filter.$and?.push({
			$or: [
				{ supported_languages: { $eq: [] } },
				{ supported_languages: language }
			]
		});
	} else if (!any) {
		filter.$and?.push({
			supported_languages: { $eq: [] }
		});
	}

	if (filter.$and?.length === 0) {
		delete filter.$and;
	}

	return FileCTR.find(filter);
}

export function getWUPTaskFiles(allowDeleted: boolean, bossAppID: string, taskID: string, country?: string, language?: string, any: boolean = false): Promise<HydratedFileWUPDocument[]> {
	verifyConnected();

	const filter: mongoose.FilterQuery<IFileWUP> = {
		task_id: taskID.slice(0, 7),
		boss_app_id: bossAppID,
		$and: []
	};

	if (!allowDeleted) {
		filter.deleted = false;
	}

	if (country) {
		filter.$and?.push({
			$or: [
				{ supported_countries: { $eq: [] } },
				{ supported_countries: country }
			]
		});
	} else if (!any) {
		filter.$and?.push({
			supported_countries: { $eq: [] }
		});
	}

	if (language) {
		filter.$and?.push({
			$or: [
				{ supported_languages: { $eq: [] } },
				{ supported_languages: language }
			]
		});
	} else if (!any) {
		filter.$and?.push({
			supported_languages: { $eq: [] }
		});
	}

	if (filter.$and?.length === 0) {
		delete filter.$and;
	}

	return FileWUP.find(filter);
}

export function getCTRTaskFilesWithAttributes(allowDeleted: boolean, bossAppID: string, taskID: string, country?: string, language?: string, attribute1?: string, attribute2?: string, attribute3?: string): Promise<HydratedFileCTRDocument[]> {
	verifyConnected();

	const filter: mongoose.FilterQuery<IFileCTR> = {
		task_id: taskID.slice(0, 7),
		boss_app_id: bossAppID,
		$and: []
	};

	if (!allowDeleted) {
		filter.deleted = false;
	}

	if (country) {
		filter.$and?.push({
			$or: [
				{ supported_countries: { $eq: [] } },
				{ supported_countries: country }
			]
		});
	} else {
		filter.$and?.push({
			supported_countries: { $eq: [] }
		});
	}

	if (language) {
		filter.$and?.push({
			$or: [
				{ supported_languages: { $eq: [] } },
				{ supported_languages: language }
			]
		});
	} else {
		filter.$and?.push({
			supported_languages: { $eq: [] }
		});
	}

	if (attribute1) {
		filter.attributes.attribute1 = attribute1;
	}

	if (attribute2) {
		filter.attributes.attribute2 = attribute2;
	}

	if (attribute3) {
		filter.attributes.attribute3 = attribute3;
	}

	if (filter.$and?.length === 0) {
		delete filter.$and;
	}

	return FileCTR.find(filter);
}

export function getCTRTaskFile(bossAppID: string, taskID: string, name: string, country?: string, language?: string): Promise<HydratedFileCTRDocument | null> {
	verifyConnected();

	const filter: mongoose.FilterQuery<IFileCTR> = {
		deleted: false,
		boss_app_id: bossAppID,
		task_id: taskID.slice(0, 7),
		name: name,
		$and: []
	};

	if (country) {
		filter.$and?.push({
			$or: [
				{ supported_countries: { $eq: [] } },
				{ supported_countries: country }
			]
		});
	} else {
		filter.$and?.push({
			supported_countries: { $eq: [] }
		});
	}

	if (language) {
		filter.$and?.push({
			$or: [
				{ supported_languages: { $eq: [] } },
				{ supported_languages: language }
			]
		});
	} else {
		filter.$and?.push({
			supported_languages: { $eq: [] }
		});
	}

	return FileCTR.findOne<HydratedFileCTRDocument>(filter);
}

export function getWUPTaskFile(bossAppID: string, taskID: string, name: string, country?: string, language?: string): Promise<HydratedFileWUPDocument | null> {
	verifyConnected();

	const filter: mongoose.FilterQuery<IFileWUP> = {
		deleted: false,
		boss_app_id: bossAppID,
		task_id: taskID.slice(0, 7),
		name: name,
		$and: []
	};

	if (country) {
		filter.$and?.push({
			$or: [
				{ supported_countries: { $eq: [] } },
				{ supported_countries: country }
			]
		});
	} else {
		filter.$and?.push({
			supported_countries: { $eq: [] }
		});
	}

	if (language) {
		filter.$and?.push({
			$or: [
				{ supported_languages: { $eq: [] } },
				{ supported_languages: language }
			]
		});
	} else {
		filter.$and?.push({
			supported_languages: { $eq: [] }
		});
	}

	return FileWUP.findOne<HydratedFileWUPDocument>(filter);
}

export function getCTRTaskFileBySerialNumber(serialNumber: bigint): Promise<HydratedFileCTRDocument | null> {
	verifyConnected();

	return FileCTR.findOne<HydratedFileCTRDocument>({
		deleted: false,
		serial_number: serialNumber
	});
}

export function getWUPTaskFileByDataID(dataID: bigint): Promise<HydratedFileWUPDocument | null> {
	verifyConnected();

	return FileWUP.findOne<HydratedFileWUPDocument>({
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

export async function deleteOldCECData(olderThan: Date, limit: number): Promise<{ id: string; file_key: string }[]> {
	verifyConnected();

	const toDelete = await CECData.find({
		created: {
			$lt: olderThan.getTime()
		}
	}).limit(limit).sort({ created: 1 }).select({ file_key: 1 });
	const ids = toDelete.map(v => v.id);

	await CECData.deleteMany({
		_id: {
			$in: ids
		}
	});

	// Remove slot if their newest data is what we've just deleted
	// This is safe because everything older than the deleted data is also gone
	await CECSlot.deleteMany({
		latest_data_id: {
			$in: ids
		}
	});

	return toDelete.map(v => ({ id: v.id, file_key: v.file_key }));
}
