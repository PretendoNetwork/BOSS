import express from 'express';
import xmlbuilder from 'xmlbuilder';
import { config } from '@/config-manager';
import { restrictHostnames } from '@/middleware/host-limit';
import { getTask, getTaskFile, getTaskFiles } from '@/database';
import type { HydratedFileDocument } from '@/types/mongoose/file';
import type { HydratedTaskDocument } from '@/types/mongoose/task';

const npts = express.Router();

const xmlHeadSettings = { encoding: 'UTF-8', version: '1.0' };

function buildFile(task: HydratedTaskDocument, file: HydratedFileDocument): any {
	return {
		Filename: file.name,
		DataId: file.data_id,
		Type: file.type,
		Url: `https://${config.domains.npdi}/p01/data/1/${task.boss_app_id}/${file.data_id}/${file.hash}`,
		Size: file.size,
		Notify: {
			New: file.notify_on_new.join(','),
			LED: file.notify_led
		}
	};
}

npts.get('/p01/tasksheet/:id/:bossAppId/:taskId', async (request, response) => {
	const { bossAppId, taskId } = request.params;

	const task = await getTask(bossAppId, taskId);
	if (!task) {
		return response.sendStatus(404);
	}

	const files = await getTaskFiles(false, bossAppId, taskId);

	const xmlContent = {
		TaskSheet: {
			TitleId: task.title_id,
			TaskId: task.id,
			ServiceStatus: task.status,
			Files: {
				File: files.map(f => buildFile(task, f))
			}
		}
	};

	response.set('Content-Type', 'application/xml; charset=utf-8');
	response.send(xmlbuilder.create(xmlContent, xmlHeadSettings).end({ pretty: true }));
});

npts.get('/p01/tasksheet/:id/:bossAppId/:taskId/:fileName', async (request, response) => {
	const { bossAppId, taskId, fileName } = request.params;

	const task = await getTask(bossAppId, taskId);
	if (!task) {
		return response.sendStatus(404);
	}

	const file = await getTaskFile(bossAppId, taskId, fileName);
	if (!file) {
		return response.sendStatus(404);
	}

	const xmlContent = {
		TaskSheet: {
			TitleId: task.title_id,
			TaskId: task.id,
			ServiceStatus: task.status,
			Files: {
				File: buildFile(task, file)
			}
		}
	};

	response.set('Content-Type', 'application/xml; charset=utf-8');
	response.send(xmlbuilder.create(xmlContent, xmlHeadSettings).end({ pretty: true }));
});

const router = express.Router();

router.use(restrictHostnames(config.domains.npts, npts));

export default router;
