import path from 'node:path';
import express from 'express';
import xmlbuilder from 'xmlbuilder';
import { fileErrCallback } from '@/util';
import { __appRoot } from '@/app-root';
import { config } from '@/config-manager';
import { restrictHostnames } from '@/middleware/host-limit';
import { Task } from '@/models/task';
import { File } from '@/models/file';

const npts = express.Router();

npts.get('/p01/tasksheet/:id/:hash/:taskId', async (request, response) => {
	const { id, taskId } = request.params;

	const task = await Task.findOne({
		title_id: id,
		id: taskId
	});
	if (!task) {
		return response.sendStatus(404);
	}

	const files = await File.find({
		task_id: taskId
	});

	const xmlContent = {
		TaskSheet: {
			TitleId: task.title_id,
			TaskId: task.id,
			ServiceStatus: task.status,
			Files: {
				File: files.map(f => ({
					Filename: f.name,
					DataId: f.data_id,
					Type: f.type,
					Url: `https://${config.domains.npdi}/p01/data/1/${task.title_id}/${f.data_id}/${f.hash}`
				}))
			}
		}
	};

	response.set('Content-Type', 'application/xml; charset=utf-8');
	response.send(xmlbuilder.create(xmlContent, { headless: true }).end({ pretty: true }));
});

npts.get('/p01/tasksheet/:id/:hash/:subfolder/:fileName', (request, response) => {
	const { id, hash, subfolder, fileName } = request.params;
	const tasksheetPath = path.normalize(`${__appRoot}/../cdn/tasksheet/${id}/${hash}/_subfolder/${subfolder}/${fileName}`);

	// TODO add subfolder support
	response.sendFile(tasksheetPath, {
		headers: {
			'Content-Type': 'text/xml'
		}
	}, fileErrCallback(response));
});

const router = express.Router();

router.use(restrictHostnames(config.domains.npts, npts));

export default router;
