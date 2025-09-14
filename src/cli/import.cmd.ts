import { Command } from 'commander';
import { seedCmd } from './seed.cmd';

const oldCdnCmd = new Command('old-cdn')
	.description('Copy old CDN format data into new database')
	.argument('<folder>', 'CDN folder to import')
	.action(async (_folder: string) => {
		// const ctx = getCliContext();
	});

export const importCmd = new Command('import')
	.description('Import existing files into BOSS')
	.addCommand(oldCdnCmd)
	.addCommand(seedCmd);
