import { program as baseProgram } from 'commander';
import { taskCmd } from './tasks.cmd';
import { fileCmd } from './files.cmd';
import { file3DSCmd } from './files-3ds.cmd';
import { appCmd } from './apps.cmd';
import { importCmd } from './import.cmd';

const program = baseProgram
	.name('BOSS')
	.description('CLI to manage and view BOSS data')
	.option('--json', 'Output as JSON')
	.addCommand(appCmd)
	.addCommand(taskCmd)
	.addCommand(importCmd)
	.addCommand(fileCmd)
	.addCommand(file3DSCmd);

program.parseAsync(process.argv)
	.catch(console.error)
	.then(() => {
		process.exit(0); // forcibly close as GRPC channels keep process going
	});
