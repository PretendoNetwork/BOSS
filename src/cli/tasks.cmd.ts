import { Command } from 'commander';

const listCmd = new Command('ls')
	.description('List all tasks in BOSS')
	.argument('<app_id>', 'BOSS app to search in')
	.action(async () => {
		console.log('Test');
	});

const viewCmd = new Command('view')
	.description('Look up a specific task')
	.argument('<app_id>', 'BOSS app ID that contains the task')
	.argument('<id>', 'Task ID to lookup')
	.action(async () => {
		console.log('Test');
	});

const createCmd = new Command('create')
	.description('Create a new task')
	.argument('<app_id>', 'BOSS app to store the task in')
	.action(async () => {
		console.log('Test');
	});

const deleteCmd = new Command('delete')
	.description('Delete a task')
	.argument('<app_id>', 'BOSS app ID that contains the task')
	.argument('<id>', 'Task ID to delete')
	.action(async () => {
		console.log('Test');
	});

// TODO add updateCmd

export const taskCmd = new Command('task')
	.description('Manage all the tasks in BOSS')
	.addCommand(listCmd)
	.addCommand(createCmd)
	.addCommand(deleteCmd)
	.addCommand(viewCmd);
