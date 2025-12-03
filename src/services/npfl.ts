import crypto from 'node:crypto';
import express from 'express';
import { getCTRTaskFilesWithAttributes } from '@/database';
import { restrictHostnames } from '@/middleware/host-limit';
import { config } from '@/config-manager';

const ALLOWED_QUERY_PARMS = [
	'c', 'l',
	'a1', 'a2', 'a3',
	'ap', 'tm'
];

const npfl = express.Router();

npfl.get('/p01/filelist/:appID/:taskID', async (request: express.Request<{
	appID: string;
	taskID: string;
}, any, any, {
	c?: string;
	l?: string;
	a1?: string;
	a2?: string;
	a3?: string;
	ap?: string;
	tm?: string;
}>, response) => {
	for (const param in request.query) {
		// * Beats me why the real server does this.
		// * Just doing accurate emulation ¯\_(ツ)_/¯
		if (!ALLOWED_QUERY_PARMS.includes(param)) {
			response.sendStatus(403);
			return;
		}
	}

	const { appID, taskID } = request.params;
	const country = request.query.c;
	const language = request.query.l;
	const attribute1 = request.query.a1;
	const attribute2 = request.query.a2;
	const attribute3 = request.query.a3;

	const files = await getCTRTaskFilesWithAttributes(false, appID, taskID, country, language, attribute1, attribute2, attribute3);

	// * https://gist.github.com/DaniElectra/ada7ecc930a84432f2045f6fcabac84f#nintendo-boss-file-list-server-npfl
	// *
	// * File list has the following structure:
	// *
	// *	- SHA1 hash of all following lines, including size line
	// *	- Size of whole file, include current line and hash line
	// *		- Size line is padded with spaces to 10 characters
	// *		- Size line has a trailing CRLF if no files found
	// *	- Files
	// *
	// * File lines have the following fields:
	// *
	// *	- File name
	// *	- Description
	// *	- Attribute 1
	// *	- Attribute 2
	// *	- Attribute 3
	// *	- Content size (size of the first payload content)
	// *	- Updated time (seconds)
	// *
	// * All fields of a file line are separated by a tab (\t) and are present even if no value.
	// * All line breaks are CRLF (\r\n).
	// * There is always a trailing CRLF, even if no files are returned (minimum 3 lines).
	// *
	// * Example:
	// *
	// * 9268c2ae0c210df07a417683e35dd67b42df19f4
	// *        132
	// * 007	anniversary	7	tj	5_50	0	1523520046
	// * 019	THANKYOU	19	tj	3_15	0	1557371320

	let size = 0;

	size += 40 + 2; // * SHA1 hash of the remaining file + CRLF
	size += 10 + 2; // * Size line is padded to 10 chars + CRLF

	let body = '';

	for (const file of files) {
		const params = [
			file.name,
			file.attributes.description,
			file.attributes.attribute1,
			file.attributes.attribute2,
			file.attributes.attribute3,
			file.payload_contents[0]?.size ?? 0,
			file.updated / 1000n // * Expects time as seconds, not milliseconds
		];
		const line = `${params.join('\t')}\r\n`;

		body += line;
		size += line.length;
	}

	const sizeLine = `${size}`.padStart(10, ' ');

	body = `${sizeLine}\r\n${body}`;

	const hash = crypto.createHash('sha1').update(body).digest('hex');

	body = `${hash}\r\n${body}`;

	response.setHeader('Content-Type', 'text/plain');
	response.send(body);
});

const router = express.Router();

router.use(restrictHostnames(config.domains.npfl, npfl));

export default router;
