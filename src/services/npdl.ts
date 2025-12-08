import express from 'express';
import { getCTRTaskFile } from '@/database';
import { config } from '@/config-manager';
import { restrictHostnames } from '@/middleware/host-limit';
import { getCDNFileAsStream, streamFileToResponse } from '@/cdn';
import { handleEtag, isValidCountryCode, sendEtagCacheResponse } from '@/util';

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

	// * There are some special cases that we need to account for some specific 3DS task files:
	// *
	// * 1. The country and language being represented in a single parameter with an underscore :languageCode_:countryCode
	// * 2. Only the country parameter being set instead of the language
	// *
	// * This isn't the standard behavior as it doesn't work for all tasks, only some of them do need it
	// * (this is so unstandard that you can't officially find tasks which use an underscore with the file list endpoint).
	// * I'm sure whoever designed this behavior must be the most evil person I've ever met
	let country: string | undefined;
	let language: string | undefined;
	if (countryCode == undefined && languageCode !== undefined && languageCode.includes('_')) {
		[language, country] = languageCode.split('_');
	} else if (countryCode == undefined && languageCode !== undefined && isValidCountryCode(languageCode)) {
		country = languageCode;
	} else {
		country = countryCode;
		language = languageCode;
	}

	const file = await getCTRTaskFile(appID, taskID, fileName, country, language);

	if (!file) {
		response.sendStatus(404);
		return;
	}

	const { clientHasCached } = handleEtag(request, response, file.hash);
	if (clientHasCached) {
		return sendEtagCacheResponse(response);
	}

	const readStream = await getCDNFileAsStream('taskFile', file.file_key);
	if (!readStream) {
		response.sendStatus(404);
		return;
	}

	return streamFileToResponse(response, readStream.stream, readStream.size, {
		'Last-Modified': new Date(Number(file.updated)).toUTCString()
	});
});

const router = express.Router();

router.use(restrictHostnames(config.domains.npdl, npdl));

export default router;
