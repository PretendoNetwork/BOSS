import express from 'express';
import { getTaskFile } from '@/database';
import { config } from '@/config-manager';
import { restrictHostnames } from '@/middleware/host-limit';
import { getCdnFileAsStream, streamFileToResponse } from '@/cdn';

const npdl = express.Router();

npdl.get([
	'/p01/nsa/:appID/:taskID/:fileName',
	'/p01/nsa/:appID/:taskID/:languageCode/:fileName',
	'/p01/nsa/:appID/:taskID/:countryCode/:languageCode/:fileName'
], async (request: express.Request<{
	appID: string;
	taskID: string;
	countryCode?: string;
	languageCode?: string;
	fileName: string;
}, any, any, {
	ap?: string;
	tm?: string;
}>, response) => {
	const { appID, taskID, countryCode, languageCode, fileName } = request.params;

	const file = await getTaskFile(appID, taskID, fileName, countryCode, languageCode);

	if (!file) {
		response.sendStatus(404);
		return;
	}

	const readStream = await getCdnFileAsStream('taskFile', file.file_key);
	if (!readStream) {
		response.sendStatus(404);
		return;
	}

	return streamFileToResponse(response, readStream, {
		'Last-Modified': new Date(Number(file.updated)).toUTCString()
	});
});

const router = express.Router();

router.use(restrictHostnames(config.domains.npdl, npdl));

export default router;
