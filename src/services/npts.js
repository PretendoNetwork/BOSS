const path = require('path');
const fs = require('fs-extra');
const express = require('express');
const subdomain = require('express-subdomain');

// Router to handle the subdomain restriction
const npts = express.Router();

// Setup routes
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

// Main router for endpoints
const router = express.Router();

// Create subdomain
router.use(subdomain('npts.app', npts));

module.exports = router;