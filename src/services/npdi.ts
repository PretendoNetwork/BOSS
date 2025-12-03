import express from 'express';
import { restrictHostnames } from '@/middleware/host-limit';
import { config } from '@/config-manager';
import { getCDNFileAsStream, streamFileToResponse } from '@/cdn';
import { getWUPTaskFileByDataID } from '@/database';
import { handleEtag, sendEtagCacheResponse } from '@/util';

const npdi = express.Router();

npdi.get('/p01/data/1/:bossAppId/:dataId/:fileHash', async (request, response) => {
	const { dataId, fileHash, bossAppId } = request.params;

	const file = await getWUPTaskFileByDataID(BigInt(dataId));
	if (!file) {
		return response.sendStatus(404);
	}

	if (file.hash !== fileHash || file.boss_app_id !== bossAppId) {
		return response.sendStatus(404);
	}

	const { clientHasCached } = handleEtag(request, response, file.hash);
	if (clientHasCached) {
		return sendEtagCacheResponse(response);
	}

	const fileStream = await getCDNFileAsStream('taskFile', file.file_key);
	if (!fileStream) {
		throw new Error('File not found in CDN');
	}

	return streamFileToResponse(response, fileStream.stream, fileStream.size, {
		// * The misspelling here is intentional, it's what the official server sets
		'Content-Type': 'applicatoin/octet-stream',
		'Content-Disposition': 'attachment',
		'Content-Transfer-Encoding': 'binary'
	});
});

const router = express.Router();

router.use(restrictHostnames(config.domains.npdi, npdi));

export default router;
