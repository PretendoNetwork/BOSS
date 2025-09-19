import { Command } from 'commander';
import { commandHandler, getCliContext } from './utils';
import { logOutputList, logOutputObject } from './output';

const listCmd = new Command('ls')
	.description('List all tasks in BOSS')
	.argument('<app_id>', 'BOSS app to search in')
	.action(commandHandler<[string]>(async (cmd): Promise<void> => {
		const [appId] = cmd.args;
		const ctx = getCliContext();
		const { tasks } = await ctx.grpc.listTasks({});
		const filteredTasks = tasks.filter(v => v.bossAppId === appId);
		logOutputList(cmd.format, filteredTasks, {
			id: 'Task ID',
			description: 'Description',
			status: 'Status'
		});
	}));

const viewCmd = new Command('view')
	.description('Look up a specific task')
	.argument('<app_id>', 'BOSS app ID that contains the task')
	.argument('<id>', 'Task ID to lookup')
	.action(commandHandler<[string, string]>(async (cmd): Promise<void> => {
		const [appId, taskId] = cmd.args;
		const ctx = getCliContext();
		const { tasks } = await ctx.grpc.listTasks({});
		const task = tasks.find(v => v.bossAppId === appId && v.id === taskId);
		if (!task) {
			console.log(`Could not find task with ID ${taskId} in app ${appId}`);
			return;
		}
		logOutputObject(cmd.format, {
			taskId: task.id,
			inGameId: task.inGameId,
			description: task.description,
			titleId: task.titleId,
			bossAppId: task.bossAppId,
			creatorPid: task.creatorPid,
			status: task.status,
			createdAt: new Date(Number(task.createdTimestamp)),
			updatedAt: new Date(Number(task.updatedTimestamp))
		});
	}));

const createCmd = new Command('create')
	.description('Create a new task')
	.argument('<app_id>', 'BOSS app to store the task in')
	.requiredOption('--id <id>', 'Id of the task')
	.requiredOption('--title-id <titleId>', 'Title ID for the task')
	.option('--desc [desc]', 'Description of the task')
	.action(commandHandler<[string]>(async (cmd): Promise<void> => {
		const [appId] = cmd.args;
		const ctx = getCliContext();
		const opts = cmd.opts<{ id: string; titleId: string; desc?: string }>();
		const { task } = await ctx.grpc.registerTask({
			bossAppId: appId,
			id: opts.id,
			titleId: opts.titleId,
			description: opts.desc ?? '',
			country: 'This value isnt used'
		});
		if (!task) {
			console.log(`Failed to create task!`);
			return;
		}
		console.log(`Created task with ID ${task.id}`);
	}));

const deleteCmd = new Command('delete')
	.description('Delete a task')
	.argument('<app_id>', 'BOSS app ID that contains the task')
	.argument('<id>', 'Task ID to delete')
	.action(commandHandler<[string, string]>(async (cmd): Promise<void> => {
		const [appId, taskId] = cmd.args;
		const ctx = getCliContext();
		await ctx.grpc.deleteTask({
			bossAppId: appId,
			id: taskId
		});
		console.log(`Deleted task with ID ${taskId}`);
	}));

export const taskCmd = new Command('task')
	.description('Manage all the tasks in BOSS')
	.addCommand(listCmd)
	.addCommand(createCmd)
	.addCommand(deleteCmd)
	.addCommand(viewCmd);
