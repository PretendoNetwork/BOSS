import { Command } from 'commander';

const listCmd = new Command('ls')
	.description('List all task files in BOSS')
	.argument('<app_id>', 'BOSS app to search in')
	.argument('<task_id>', 'Task to search in')
	.action(async () => {
		console.log('Test');
	});

const viewCmd = new Command('view')
	.description('Look up a specific task file')
	.argument('<app_id>', 'BOSS app that contains the task')
	.argument('<task_id>', 'Task that contains the task file')
	.argument('<id>', 'Task file ID to lookup')
	.action(async () => {
		console.log('Test');
	});

const createCmd = new Command('create')
	.description('Create a new task file')
	.argument('<app_id>', 'BOSS app to store the task file in')
	.argument('<task_id>', 'Task to store the task file in')
	.action(async () => {
		console.log('Test');
	});

const deleteCmd = new Command('delete')
	.description('Delete a task file')
	.argument('<app_id>', 'BOSS app that contains the task')
	.argument('<task_id>', 'Task that contains the task file')
	.argument('<id>', 'Task file ID to delete')
	.action(async () => {
		console.log('Test');
	});

// TODO add updateCmd

export const fileCmd = new Command('file')
	.description('Manage all the task files in BOSS')
	.addCommand(listCmd)
	.addCommand(createCmd)
	.addCommand(deleteCmd)
	.addCommand(viewCmd);
