import path from 'node:path';
import fs from 'fs-extra';
import express from 'express';
import subdomain from 'express-subdomain';

const npdi = express.Router();

npdi.get('/p01/data/1/:titleHash/:dataID/:fileHash', (request, response) => {
	const { titleHash, fileHash } = request.params;
	const contentPath = path.normalize(`${__dirname}/../../cdn/content/encrypted/${titleHash}/${fileHash}`);

	if (fs.existsSync(contentPath)) {
		response.set('Content-Type', 'applicatoin/octet-stream');
		response.set('Content-Disposition', 'attachment');
		response.set('Content-Transfer-Encoding', 'binary');
		response.set('Content-Type', 'applicatoin/octet-stream');
		response.sendFile(contentPath);
	} else {
		response.sendStatus(404);
	}
});

const router = express.Router();

router.use(subdomain('npdi.cdn', npdi));

export default router;