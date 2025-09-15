import { Command } from 'commander';
import { seedCmd } from './seed.cmd';

export const importCmd = new Command('import')
	.description('Import existing files into BOSS')
	.addCommand(seedCmd);
