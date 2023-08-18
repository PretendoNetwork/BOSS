import path from 'node:path';
import fs from 'fs-extra';
import express from 'express';
import subdomain from 'express-subdomain';

const npts = express.Router();

npts.get('/p01/tasksheet/:id/:hash/:fileName', (request, response) => {
	const { id, hash, fileName } = request.params;
	const tasksheetPath = path.normalize(`${__dirname}/../../cdn/tasksheet/${id}/${hash}/${fileName}`);

	if (fs.existsSync(tasksheetPath)) {
		response.set('Content-Type', 'text/xml');
		response.sendFile(tasksheetPath);
	} else {
		response.sendStatus(404);
	}
});

npts.get('/p01/tasksheet/:id/:hash/:subfolder/:fileName', (request, response) => {
	const { id, hash, subfolder, fileName } = request.params;
	const tasksheetPath = path.normalize(`${__dirname}/../../cdn/tasksheet/${id}/${hash}/_subfolder/${subfolder}/${fileName}`);

	if (fs.existsSync(tasksheetPath)) {
		response.set('Content-Type', 'text/xml');
		response.sendFile(tasksheetPath);
	} else {
		response.sendStatus(404);
	}
});

const router = express.Router();

router.use(subdomain('npts.app', npts));

export default router;