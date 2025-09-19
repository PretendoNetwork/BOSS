import fs from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import { request } from 'undici';
import { Command } from 'commander';
import { decryptWiiU } from '@pretendonetwork/boss-crypto';
import { commandHandler, getCliContext } from './utils';
import { logOutputList, logOutputObject } from './output';

const listCmd = new Command('ls')
	.description('List all task files in BOSS')
	.argument('<app_id>', 'BOSS app to search in')
	.argument('<task_id>', 'Task to search in')
	.action(commandHandler<[string, string]>(async (cmd): Promise<void> => {
		const [appId, taskId] = cmd.args;
		const ctx = getCliContext();
		const { files } = await ctx.grpc.listFiles({
			bossAppId: appId,
			taskId: taskId
		});
		logOutputList(cmd.format, files.map(v => ({
			...v,
			size: v.size,
			dataId: v.dataId
		}), {
			dataId: 'Data ID',
			name: 'Name',
			type: 'Type',
			size: 'Size (bytes)'
		}));
	}));

const viewCmd = new Command('view')
	.description('Look up a specific task file')
	.argument('<app_id>', 'BOSS app that contains the task')
	.argument('<task_id>', 'Task that contains the task file')
	.argument('<id>', 'Task file ID to lookup', BigInt)
	.action(commandHandler<[string, string, bigint]>(async (cmd): Promise<void> => {
		const [appId, taskId, dataId] = cmd.args;
		const ctx = getCliContext();
		const { files } = await ctx.grpc.listFiles({
			bossAppId: appId,
			taskId: taskId
		});
		const file = files.find(v => v.dataId === dataId);
		if (!file) {
			console.log(`Could not find task file with data ID ${dataId} in task ${taskId}`);
			return;
		}
		logOutputObject(cmd.format, {
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
		const { files } = await ctx.grpc.listFiles({
			bossAppId: appId,
			taskId: taskId
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
	.option('--name-as-id', 'Force the name as the data ID')
	.option('--notify-new <type...>', 'Add entry to NotifyNew')
	.option('--notify-led', 'Enable NotifyLED')
	.action(commandHandler<[string, string]>(async (cmd): Promise<void> => {
		const [appId, taskId] = cmd.args;
		const opts = cmd.opts<{ name: string; country: string[]; notifyNew: string[]; notifyLed: boolean; lang: string[]; nameAsId?: boolean; type: string; file: string }>();
		const fileBuf = await fs.readFile(opts.file);
		const ctx = getCliContext();
		const { file } = await ctx.grpc.uploadFile({
			taskId: taskId,
			bossAppId: appId,
			name: opts.name,
			supportedCountries: opts.country,
			supportedLanguages: opts.lang,
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
			dataId: dataId
		});
		console.log(`Deleted task file with ID ${dataId}`);
	}));

export const fileCmd = new Command('file')
	.description('Manage all the task files in BOSS')
	.addCommand(listCmd)
	.addCommand(createCmd)
	.addCommand(deleteCmd)
	.addCommand(downloadCmd)
	.addCommand(viewCmd);
