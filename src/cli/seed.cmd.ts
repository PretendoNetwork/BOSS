import path from 'path';
import fs from 'fs/promises';
import { Command } from 'commander';
import { xml2js } from 'xml-js';
import BOSS from 'boss-js';
import { getCliContext } from './utils';
import { seedFolder } from './root';
import type { CliContext } from './utils';

type UploadFileOptions = {
	ctx: CliContext;
	taskFiles: string[];
	fileXml: Record<string, any>;
	bossAppId: string;
	taskId: string;
	dataId: string;
};

export async function uploadFileIfChanged(ops: UploadFileOptions): Promise<void> {
	const newTaskFileName = ops.taskFiles.find(v => v.startsWith(`${ops.dataId}.`));
	if (!newTaskFileName) {
		console.warn(`${ops.dataId}: Could not find file on disk the specified data ID - skipping`);
		return;
	}
	let fileContents = await fs.readFile(path.join(seedFolder, 'files', newTaskFileName));
	if (newTaskFileName.startsWith(`${ops.dataId}.enc.`)) {
		// File is encrypted, let's decrypt before processing
		console.log(`${ops.dataId}: File is encrypted, decrypting...`);
		const keys = ops.ctx.getWiiuKeys();
		const decryptedContents = BOSS.decryptWiiU(fileContents, keys.aesKey, keys.hmacKey);
		fileContents = decryptedContents.content;
	}

	const allExistingTaskFiles = await ops.ctx.grpc.listFiles({
		bossAppId: ops.bossAppId,
		taskId: ops.taskId
	});
	const existingTaskFile = allExistingTaskFiles.files.find(v => v.dataId === BigInt(ops.dataId));
	if (existingTaskFile) {
		console.warn(`${ops.dataId}: File already uploaded, reuploading`);
		await ops.ctx.grpc.deleteFile({
			bossAppId: ops.bossAppId,
			dataId: BigInt(ops.dataId)
		});
	}

	await ops.ctx.grpc.uploadFile({
		bossAppId: ops.bossAppId,
		taskId: ops.taskId,
		name: ops.fileXml.Filename._text,
		type: ops.fileXml.Type._text,
		notifyLed: ops.fileXml.Notify.LED._text === 'true',
		notifyOnNew: ops.fileXml.Notify.New._text.split(','),
		data: fileContents,
		supportedLanguages: [],
		supportedCountries: []
	});
	console.log(`${ops.dataId}: Uploaded file!`);
}

export async function processTasksheet(ctx: CliContext, taskFiles: string[], filename: string, contents: string): Promise<void> {
	console.log(`${filename}: Processing tasksheet`);
	const [unknownNumber, bossAppId, taskName] = filename.split('.');
	if (!unknownNumber || !bossAppId || !taskName) {
		console.warn(`${filename}: Invalid syntax tasksheet - skipping`);
		return;
	}

	const xmlContents: any = xml2js(contents, { compact: true });
	if (xmlContents.TaskSheet.TaskId._text !== taskName) {
		console.warn(`${filename}: Taskname in tasksheet doesn't match filename - skipping`);
		return;
	}

	const res = await ctx.grpc.listTasks({});
	const existingTask = res.tasks.find(v => v.bossAppId === bossAppId && v.id === taskName);
	if (!existingTask) {
		await ctx.grpc.registerTask({
			bossAppId: bossAppId,
			id: taskName,
			titleId: xmlContents.TaskSheet.TitleId._text,
			country: 'This value isnt used'
		});
		console.log(`${filename}: Created task`);
	}
	await ctx.grpc.updateTask({
		bossAppId: bossAppId,
		id: taskName,
		updateData: {
			titleId: xmlContents.TaskSheet.TitleId._text,
			status: xmlContents.TaskSheet.ServiceStatus._text
		}
	});
	console.log(`${filename}: Updated title ID and status`);

	for (const file of xmlContents.TaskSheet.Files?.File ?? []) {
		await uploadFileIfChanged({
			bossAppId: bossAppId,
			ctx: ctx,
			dataId: file.DataId._text,
			fileXml: file,
			taskFiles: taskFiles,
			taskId: taskName
		});
	}

	console.log(`${filename}: Successfully processed tasksheet`);
}

export const seedCmd = new Command('seed')
	.description('Seed the BOSS database with initial data')
	.action(async () => {
		const ctx = getCliContext();

		const taskFilesDirEntries = await fs.readdir(path.join(seedFolder, 'files'), { withFileTypes: true });
		const taskFiles = taskFilesDirEntries.filter(v => v.isFile()).map(v => v.name);

		const tasksheetDirEntries = await fs.readdir(path.join(seedFolder, 'tasksheets'), { withFileTypes: true });
		const tasksheets = tasksheetDirEntries.filter(v => v.isFile() && v.name.endsWith('.tasksheet.xml')).map(v => v.name);
		console.log(`Found ${tasksheets.length} tasksheets - starting seeding`);

		for (const tasksheetFilename of tasksheets) {
			const contents = await fs.readFile(path.join(seedFolder, 'tasksheets', tasksheetFilename), { encoding: 'utf-8' });
			await processTasksheet(ctx, taskFiles, tasksheetFilename, contents);
		}

		console.log(`Completed seeding!`);
	});
