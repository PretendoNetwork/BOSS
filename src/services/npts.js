const path = require('path');
const fs = require('fs-extra');
const express = require('express');
const subdomain = require('express-subdomain');

// Router to handle the subdomain restriction
const npts = express.Router();

// Setup routes
npts.get('/p01/tasksheet/1/:id/:hash/:fileName', (request, response) => {
	const { id, fileName } = request.params;
	const tasksheetPath = path.normalize(`${__dirname}/../../cdn/tasksheet/${id}/${hash}/${fileName}`);

	if (fs.existsSync(tasksheetPath)) {
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