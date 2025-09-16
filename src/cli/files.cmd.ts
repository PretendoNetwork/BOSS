import fs from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import { Command } from 'commander';
import { decryptWiiU } from '@pretendonetwork/boss-crypto';
import { getCliContext } from './utils';

const listCmd = new Command('ls')
	.description('List all task files in BOSS')
	.argument('<app_id>', 'BOSS app to search in')
	.argument('<task_id>', 'Task to search in')
	.action(async (appId: string, taskId: string) => {
		const ctx = getCliContext();
		const { files } = await ctx.grpc.listFiles({
			bossAppId: appId,
			taskId: taskId
		});
		console.table(files.map(v => ({
			'Data ID': Number(v.dataId),
			'Name': v.name,
			'Type': v.type,
			'Size (bytes)': Number(v.size)
		})));
	});

const viewCmd = new Command('view')
	.description('Look up a specific task file')
	.argument('<app_id>', 'BOSS app that contains the task')
	.argument('<task_id>', 'Task that contains the task file')
	.argument('<id>', 'Task file ID to lookup', BigInt)
	.action(async (appId: string, taskId: string, dataId: bigint) => {
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
		console.log({
			dataId: Number(file.dataId),
			name: file.name,
			type: file.type,
			size: Number(file.size),
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
	});

const downloadCmd = new Command('download')
	.description('Download a task file')
	.argument('<app_id>', 'BOSS app that contains the task')
	.argument('<task_id>', 'Task that contains the task file')
	.argument('<id>', 'Task file ID to lookup', BigInt)
	.option('-d, --decrypt', 'Decrypt the file before return')
	.action(async (appId: string, taskId: string, dataId: bigint, ops: { decrypt: boolean }) => {
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

		const fetchResult = await fetch(`${ctx.npdiDomain}/p01/data/1/${file.bossAppId}/${file.dataId}/${file.hash}`);
		if (fetchResult.status > 299) {
			console.error(`Failed to download: invalid status code (${fetchResult.status})`);
			process.exit(1);
		}

		const arrayBuffer = await fetchResult.arrayBuffer();
		let buffer = Buffer.from(arrayBuffer);

		if (ops.decrypt) {
			const keys = ctx.getWiiUKeys();
			const decrypted = decryptWiiU(buffer, keys.aesKey, keys.hmacKey);
			buffer = decrypted.content;
		}

		await pipeline(Readable.from(buffer), process.stdout);
	});

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
	.action(async (appId: string, taskId: string, opts: { name: string; country: string[]; lang: string[]; nameAsId?: boolean; type: string; file: string }) => {
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
			data: fileBuf
		});
		if (!file) {
			console.log(`Failed to create file!`);
			return;
		}
		console.log(`Created file with ID ${file.dataId}`);
	});

const deleteCmd = new Command('delete')
	.description('Delete a task file')
	.argument('<app_id>', 'BOSS app that contains the task')
	.argument('<task_id>', 'Task that contains the task file')
	.argument('<id>', 'Task file ID to delete', BigInt)
	.action(async (appId: string, taskId: string, dataId: bigint) => {
		const ctx = getCliContext();
		await ctx.grpc.deleteFile({
			bossAppId: appId,
			dataId: dataId
		});
		console.log(`Deleted task file with ID ${dataId}`);
	});

export const fileCmd = new Command('file')
	.description('Manage all the task files in BOSS')
	.addCommand(listCmd)
	.addCommand(createCmd)
	.addCommand(deleteCmd)
	.addCommand(downloadCmd)
	.addCommand(viewCmd);
