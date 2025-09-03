import { Command } from 'commander';
import { getCliContext, prettyTrunc } from './utils';

const listCmd = new Command('ls')
	.description('List all apps in BOSS')
	.action(async () => {
		const ctx = getCliContext();
		const { apps } = await ctx.grpc.listKnownBOSSApps({});
		console.table(apps.map(v => ({
			'App ID': v.bossAppId,
			'Name': prettyTrunc(v.name, 20),
			'Title ID': v.titleId,
			'Title region': v.titleRegion
		})));
	});

const viewCmd = new Command('view')
	.description('Look up a specific BOSS app')
	.argument('<id>', 'BOSS app ID to lookup')
	.action(async (id: string) => {
		const ctx = getCliContext();
		const { apps } = await ctx.grpc.listKnownBOSSApps({});
		const app = apps.find(v => v.bossAppId === id);
		if (!app) {
			console.log(`Could not find BOSS app with ID ${id}`);
			return;
		}

		console.log({
			appId: app.bossAppId,
			name: app.name,
			titleId: app.titleId,
			titleRegion: app.titleRegion,
			knownTasks: app.tasks
		});
	});

export const appCmd = new Command('app')
	.description('Manage all the apps in BOSS')
	.addCommand(listCmd)
	.addCommand(viewCmd);
