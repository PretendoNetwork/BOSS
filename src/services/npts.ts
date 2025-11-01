import express from 'express';
import xmlbuilder from 'xmlbuilder';
import { config } from '@/config-manager';
import { restrictHostnames } from '@/middleware/host-limit';
import { getTask, getWUPTaskFile, getWUPTaskFiles } from '@/database';
import type { HydratedFileWUPDocument } from '@/types/mongoose/file-wup';
import type { HydratedTaskDocument } from '@/types/mongoose/task';

const npts = express.Router();

const xmlHeadSettings = { encoding: 'UTF-8', version: '1.0' };

function buildFile(task: HydratedTaskDocument, file: HydratedFileWUPDocument): any {
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

npts.get('/p01/tasksheet/:id/:bossAppId/:taskId', async (request: express.Request<{
	id: string;
	bossAppId: string;
	taskId: string;
}, any, any, {
	c?: string;
	l?: string;
}>, response) => {
	const { bossAppId, taskId } = request.params;
	const country = request.query.c;
	const language = request.query.l;

	const task = await getTask(bossAppId, taskId);
	if (!task) {
		return response.sendStatus(404);
	}

	const files = await getWUPTaskFiles(false, bossAppId, taskId, country, language);

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

npts.get('/p01/tasksheet/:id/:bossAppId/:taskId/:fileName', async (request: express.Request<{
	id: string;
	bossAppId: string;
	taskId: string;
	fileName: string;
}, any, any, {
	c?: string;
	l?: string;
}>, response) => {
	const { bossAppId, taskId, fileName } = request.params;
	const country = request.query.c;
	const language = request.query.l;

	const task = await getTask(bossAppId, taskId);
	if (!task) {
		return response.sendStatus(404);
	}

	const file = await getWUPTaskFile(bossAppId, taskId, fileName, country, language);
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
