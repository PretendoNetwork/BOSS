import express from 'express';
import { restrictHostnames } from '@/middleware/host-limit';
import { config } from '@/config-manager';
import { File } from '@/models/file';
import { getCdnFileAsStream, streamFileToResponse } from '@/cdn';

const npdi = express.Router();

npdi.get('/p01/data/1/:titleIdHash/:dataId/:fileHash', async (request, response) => {
	const { dataId, fileHash } = request.params;

	const file = await File.findOne({
		data_id: dataId,
		hash: fileHash
	});
	if (!file) {
		return response.sendStatus(404);
	}

	const fileStream = await getCdnFileAsStream('taskFile', file.file_key);
	if (!fileStream) {
		throw new Error('File not found in CDN');
	}
	return streamFileToResponse(response, fileStream, {
		// * The misspelling here is intentional, it's what the official server sets
		'Content-Type': 'applicatoin/octet-stream',
		'Content-Disposition': 'attachment',
		'Content-Transfer-Encoding': 'binary'
	});
});

const router = express.Router();

router.use(restrictHostnames(config.domains.npdi, npdi));

export default router;
