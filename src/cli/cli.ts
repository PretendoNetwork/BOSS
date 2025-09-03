import { program as baseProgram } from 'commander';
import { taskCmd } from './tasks.cmd';
import { fileCmd } from './files.cmd';
import { appCmd } from './apps.cmd';

const program = baseProgram
	.name('BOSS')
	.description('CLI to manage and view BOSS data')
	.addCommand(appCmd)
	.addCommand(taskCmd)
	.addCommand(fileCmd);

program.parseAsync(process.argv)
	.catch(console.error)
	.then(() => {
		process.exit(0); // forcibly close as GRPC channels keep process going
	});
