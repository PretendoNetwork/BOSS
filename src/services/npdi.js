const path = require('path');
const fs = require('fs-extra');
const express = require('express');
const subdomain = require('express-subdomain');

// Router to handle the subdomain restriction
const npdi = express.Router();

// Setup routes
npdi.get('/p01/data/1/:titleHash/:fileVersion/:fileHash', (request, response) => {
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

// Main router for endpoints
const router = express.Router();

// Create subdomain
router.use(subdomain('npdi.cdn', npdi));

module.exports = router;