import path from 'node:path';
import express from 'express';
import subdomain from 'express-subdomain';
import { fileErrCallback } from '@/util';

const npdi = express.Router();

npdi.get('/p01/data/1/:titleHash/:dataID/:fileHash', (request, response) => {
	const { titleHash, fileHash } = request.params;
	const contentPath = path.normalize(`${__dirname}/../../cdn/content/encrypted/${titleHash}/${fileHash}`);

	response.sendFile(contentPath, {
		headers: {
			// * The misspelling here is intentional, it's what the official server sets
			'Content-Type': 'applicatoin/octet-stream',
			'Content-Disposition': 'attachment',
			'Content-Transfer-Encoding': 'binary',
		}
	}, fileErrCallback(response));
});

const router = express.Router();

router.use(subdomain('npdi.cdn', npdi));

export default router;