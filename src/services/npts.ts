import express from 'express';
import xmlbuilder from 'xmlbuilder';
import { config } from '@/config-manager';
import { restrictHostnames } from '@/middleware/host-limit';
import { Task } from '@/models/task';
import { File } from '@/models/file';
import type { HydratedFileDocument } from '@/types/mongoose/file';

const npts = express.Router();

function buildFile(file: HydratedFileDocument): any {
	return {
		Filename: file.name,
		DataId: file.data_id,
		Type: file.type,
		Url: `https://${config.domains.npdi}/p01/data/1/${task.title_id}/${file.data_id}/${file.hash}`,
		Size: file.size,
		Notify: file.isNew
			? {
					New: file.notify_on_new.join(','),
					LED: file.notify_led
				}
			: undefined
	};
}

npts.get('/p01/tasksheet/:id/:titleIdHash/:taskId', async (request, response) => {
	const { titleIdHash, taskId } = request.params;

	const task = await Task.findOne({
		id: taskId,
		title_id_hash: titleIdHash
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
				File: files.map(f => buildFile(f))
			}
		}
	};

	response.set('Content-Type', 'application/xml; charset=utf-8');
	response.send(xmlbuilder.create(xmlContent, { headless: true }).end({ pretty: true }));
});

npts.get('/p01/tasksheet/:id/:titleIdHash/:taskId/:fileName', async (request, response) => {
	const { titleIdHash, taskId, fileName } = request.params;

	const task = await Task.findOne({
		id: taskId,
		title_id_hash: titleIdHash
	});
	if (!task) {
		return response.sendStatus(404);
	}

	const file = await File.findOne({
		name: fileName,
		task_id: taskId
	});
	if (!file) {
		return response.sendStatus(404);
	}

	const xmlContent = {
		TaskSheet: {
			TitleId: task.title_id,
			TaskId: task.id,
			ServiceStatus: task.status,
			Files: {
				File: buildFile(file)
			}
		}
	};

	response.set('Content-Type', 'application/xml; charset=utf-8');
	response.send(xmlbuilder.create(xmlContent, { headless: true }).end({ pretty: true }));
});

const router = express.Router();

router.use(restrictHostnames(config.domains.npts, npts));

export default router;
