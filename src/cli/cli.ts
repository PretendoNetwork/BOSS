import { program as baseProgram } from 'commander';
import { taskCmd } from './tasks.cmd';
import { fileCmd } from './files.cmd';
import { appCmd } from './apps.cmd';
import { importCmd } from './import.cmd';

const program = baseProgram
	.name('BOSS')
	.description('CLI to manage and view BOSS data')
	.option('--json', 'Output as JSON')
	.addCommand(appCmd)
	.addCommand(taskCmd)
	.addCommand(importCmd)
	.addCommand(fileCmd);

program.parseAsync(process.argv)
	.catch((err) => {
		console.error(err);
		process.exit(1);
	})
	.then(() => {
		process.exit(0); // forcibly close as GRPC channels keep process going
	});
