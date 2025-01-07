import express from 'express';
import subdomain from 'express-subdomain';
import { getTaskFile } from '@/database';
import { getCDNFileStream } from '@/util';
import { Stream } from 'node:stream';
import { LOG_ERROR } from '@/logger';

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

	const key = `${appID}/${taskID}/${file.hash}`;
	const readStream = await getCDNFileStream(key);

	if (!readStream) {
		response.sendStatus(404);
		return;
	}

	response.setHeader('Last-Modified', new Date(Number(file.updated)).toUTCString());

	Stream.pipeline(readStream, response, (err) => {
		if (err) {
			LOG_ERROR('Error with response stream: ' + err.message);
			response.end();
		}
	});
});

const router = express.Router();

router.use(subdomain('npdl.cdn', npdl));

export default router;
