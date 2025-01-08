import path from 'node:path';
import express from 'express';
import subdomain from 'express-subdomain';
import { fileErrCallback } from '@/util';

const npts = express.Router();

npts.get('/p01/tasksheet/:id/:hash/:fileName', (request, response) => {
	const { id, hash, fileName } = request.params;
	const tasksheetPath = path.normalize(`${__dirname}/../../cdn/tasksheet/${id}/${hash}/${fileName}`);

	response.sendFile(tasksheetPath, {
		headers: {
			'Content-Type': 'text/xml'
		}
	}, fileErrCallback(response));
});

npts.get('/p01/tasksheet/:id/:hash/:subfolder/:fileName', (request, response) => {
	const { id, hash, subfolder, fileName } = request.params;
	const tasksheetPath = path.normalize(`${__dirname}/../../cdn/tasksheet/${id}/${hash}/_subfolder/${subfolder}/${fileName}`);

	response.sendFile(tasksheetPath, {
		headers: {
			'Content-Type': 'text/xml'
		}
	}, fileErrCallback(response));
});

const router = express.Router();

router.use(subdomain('npts.app', npts));

export default router;
