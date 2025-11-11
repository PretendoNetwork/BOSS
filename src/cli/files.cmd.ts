import fs from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import { request } from 'undici';
import { Command } from 'commander';
import { decryptWiiU } from '@pretendonetwork/boss-crypto';
import { PlatformType } from '@pretendonetwork/grpc/boss/v2/platform_type';
import { commandHandler, getCliContext } from './utils';
import { logOutputList, logOutputObject } from './output';

const listCmd = new Command('ls')
	.description('List all task files in BOSS')
	.argument('<app_id>', 'BOSS app to search in')
	.argument('<task_id>', 'Task to search in')
	.option('-c, --country [country]', 'Country to filter with')
	.option('-l, --language [language]', 'Language to filter with')
	.option('-a, --any', 'Shows any file regardless of country and language requirements')
	.action(commandHandler<[string, string]>(async (cmd): Promise<void> => {
		const [appId, taskId] = cmd.args;
		const opts = cmd.opts<{ country?: string; language?: string; any: boolean }>();
		const ctx = getCliContext();
		const { files } = await ctx.grpc.listFilesWUP({
			bossAppId: appId,
			taskId: taskId,
			country: opts.country,
			language: opts.language,
			any: opts.any
		});
		logOutputList(files, {
			format: cmd.format,
			onlyIncludeKeys: ['dataId', 'name', 'type', 'size'],
			mapping: {
				dataId: 'Data ID',
				name: 'Name',
				type: 'Type',
				size: 'Size (bytes)'
			}
		});
	}));

const viewCmd = new Command('view')
	.description('Look up a specific task file')
	.argument('<app_id>', 'BOSS app that contains the task')
	.argument('<task_id>', 'Task that contains the task file')
	.argument('<id>', 'Task file ID to lookup', BigInt)
	.action(commandHandler<[string, string, bigint]>(async (cmd): Promise<void> => {
		const [appId, taskId, dataId] = cmd.args;
		const ctx = getCliContext();
		const { files } = await ctx.grpc.listFilesWUP({
			bossAppId: appId,
			taskId: taskId,
			any: true
		});
		const file = files.find(v => v.dataId === dataId);
		if (!file) {
			console.log(`Could not find task file with data ID ${dataId} in task ${taskId}`);
			return;
		}
		logOutputObject({
			dataId: file.dataId,
			name: file.name,
			type: file.type,
			size: file.size,
			hash: file.hash,
			supportedCountries: file.supportedCountries,
			supportedLanguages: file.supportedLanguages,
			creatorPid: file.creatorPid,
			notify: {
				new: file.notifyOnNew,
				led: file.notifyLed
			},
			createdAt: new Date(Number(file.createdTimestamp)),
			updatedAt: new Date(Number(file.updatedTimestamp))
		}, {
			format: cmd.format
		});
	}));

const downloadCmd = new Command('download')
	.description('Download a task file')
	.argument('<app_id>', 'BOSS app that contains the task')
	.argument('<task_id>', 'Task that contains the task file')
	.argument('<id>', 'Task file ID to lookup', BigInt)
	.option('-d, --decrypt', 'Decrypt the file before return')
	.action(commandHandler<[string, string, bigint]>(async (cmd): Promise<void> => {
		const [appId, taskId, dataId] = cmd.args;
		const ctx = getCliContext();
		const { files } = await ctx.grpc.listFilesWUP({
			bossAppId: appId,
			taskId: taskId,
			any: true
		});
		const file = files.find(v => v.dataId === dataId);
		if (!file) {
			console.error(`Could not find task file with data ID ${dataId} in task ${taskId}`);
			process.exit(1);
		}

		const npdi = ctx.getNpdiUrl();
		const { body, statusCode } = await request(`${npdi.url}/p01/data/1/${file.bossAppId}/${file.dataId}/${file.hash}`, {
			headers: {
				Host: npdi.host
			}
		});
		if (statusCode > 299) {
			console.error(`Failed to download: invalid status code (${statusCode})`);
			process.exit(1);
		}

		const chunks: Buffer[] = [];
		for await (const chunk of body) {
			chunks.push(Buffer.from(chunk));
		}

		let buffer: Buffer = Buffer.concat(chunks);

		if (cmd.opts().decrypt) {
			const keys = ctx.getWiiUKeys();
			const decrypted = decryptWiiU(buffer, keys.aesKey, keys.hmacKey);
			buffer = decrypted.content;
		}

		await pipeline(Readable.from(buffer), process.stdout);
	}));

const createCmd = new Command('create')
	.description('Create a new task file')
	.argument('<app_id>', 'BOSS app to store the task file in')
	.argument('<task_id>', 'Task to store the task file in')
	.requiredOption('--name <name>', 'Name of the task file')
	.requiredOption('--type <type>', 'Type of task file')
	.requiredOption('--file <file>', 'Path of the file to upload')
	.option('--country <country...>', 'Countries for this task file')
	.option('--lang <language...>', 'Languages for this task file')
	.option('--attribute1 [attribute1]', 'Attribute 1 for this task file')
	.option('--attribute2 [attribute2]', 'Attribute 2 for this task file')
	.option('--attribute3 [attribute3]', 'Attribute 3 for this task file')
	.option('--desc [desc]', 'Description for this task file')
	.option('--name-as-id', 'Force the name as the data ID')
	.option('--notify-new <type...>', 'Add entry to NotifyNew')
	.option('--notify-led', 'Enable NotifyLED')
	.action(commandHandler<[string, string]>(async (cmd): Promise<void> => {
		const [appId, taskId] = cmd.args;
		const opts = cmd.opts<{ name: string; country: string[]; notifyNew: string[]; notifyLed: boolean; lang: string[]; attribute1?: string; attribute2?: string; attribute3?: string; desc?: string; nameAsId?: boolean; type: string; file: string }>();
		const fileBuf = await fs.readFile(opts.file);
		const ctx = getCliContext();
		const { file } = await ctx.grpc.uploadFileWUP({
			taskId: taskId,
			bossAppId: appId,
			name: opts.name,
			supportedCountries: opts.country,
			supportedLanguages: opts.lang,
			attributes: {
				attribute1: opts.attribute1,
				attribute2: opts.attribute2,
				attribute3: opts.attribute3,
				description: opts.desc
			},
			type: opts.type,
			nameEqualsDataId: opts.nameAsId ?? false,
			data: fileBuf,
			notifyOnNew: opts.notifyNew,
			notifyLed: opts.notifyLed
		});
		if (!file) {
			console.log(`Failed to create file!`);
			return;
		}
		console.log(`Created file with ID ${file.dataId}`);
	}));

const deleteCmd = new Command('delete')
	.description('Delete a task file')
	.argument('<app_id>', 'BOSS app that contains the task')
	.argument('<task_id>', 'Task that contains the task file')
	.argument('<id>', 'Task file ID to delete', BigInt)
	.action(commandHandler<[string, string, bigint]>(async (cmd): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars -- I want to use destructuring
		const [appId, _taskId, dataId] = cmd.args;
		const ctx = getCliContext();
		await ctx.grpc.deleteFile({
			bossAppId: appId,
			dataId: dataId,
			platformType: PlatformType.PLATFORM_TYPE_WUP
		});
		console.log(`Deleted task file with ID ${dataId}`);
	}));

export const fileCmd = new Command('file')
	.description('Manage all the Wii U task files in BOSS')
	.addCommand(listCmd)
	.addCommand(createCmd)
	.addCommand(deleteCmd)
	.addCommand(downloadCmd)
	.addCommand(viewCmd);
