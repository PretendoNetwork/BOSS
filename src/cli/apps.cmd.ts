import { Command } from 'commander';
import { commandHandler, getCliContext, prettyTrunc } from './utils';
import { logOutputList, logOutputObject } from './output';

const listCmd = new Command('ls')
	.description('List all apps in BOSS')
	.action(commandHandler<[]>(async (cmd): Promise<void> => {
		const ctx = getCliContext();
		const { apps } = await ctx.grpc.listKnownBOSSApps({});
		logOutputList(cmd.format, apps.map(v => ({
			name: prettyTrunc(v.name, 20)
		})), {
			bossAppId: 'App ID',
			name: 'Name',
			titleId: 'Title ID',
			titleRegion: 'Title region'
		});
	}));

const viewCmd = new Command('view')
	.description('Look up a specific BOSS app')
	.argument('<id>', 'BOSS app ID to lookup')
	.action(commandHandler<[string]>(async (cmd): Promise<void> => {
		const [id] = cmd.args;
		const ctx = getCliContext();
		const { apps } = await ctx.grpc.listKnownBOSSApps({});
		const app = apps.find(v => v.bossAppId === id);
		if (!app) {
			console.log(`Could not find BOSS app with ID ${id}`);
			return;
		}

		logOutputObject(cmd.format, {
			appId: app.bossAppId,
			name: app.name,
			titleId: app.titleId,
			titleRegion: app.titleRegion,
			knownTasks: app.tasks
		});
	}));

export const appCmd = new Command('app')
	.description('Manage all the apps in BOSS')
	.addCommand(listCmd)
	.addCommand(viewCmd);
