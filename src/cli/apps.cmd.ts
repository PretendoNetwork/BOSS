import { Command } from 'commander';
import { getCliContext } from './utils';

const listCmd = new Command('ls')
	.description('List all apps in BOSS')
	.action(async () => {
		const ctx = getCliContext();
		const apps = await ctx.grpc.listKnownBOSSApps({});
		console.log(apps);
	});

const viewCmd = new Command('view')
	.description('Look up a specific BOSS app')
	.argument('<id>', 'BOSS app ID to lookup')
	.action(async () => {
		console.log('Test');
	});

export const appCmd = new Command('app')
	.description('Manage all the apps in BOSS')
	.addCommand(listCmd)
	.addCommand(viewCmd);
