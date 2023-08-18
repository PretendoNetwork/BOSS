import path from 'node:path';
import fs from 'fs-extra';
import express from 'express';
import subdomain from 'express-subdomain';

const nppl = express.Router();

nppl.get('/p01/policylist/1/1/:region', (_request, response) => {
	const policylistPath = path.normalize(`${__dirname}/../../cdn/policylist/policylist.xml`);

	if (fs.existsSync(policylistPath)) {
		response.set('Content-Type', 'application/xml; charset=utf-8');
		response.sendFile(policylistPath);
	} else {
		response.sendStatus(404);
	}
});

const router = express.Router();

router.use(subdomain('nppl.app', nppl));

export default router;