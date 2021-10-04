const path = require('path');
const fs = require('fs-extra');
const express = require('express');
const subdomain = require('express-subdomain');

// Router to handle the subdomain restriction
const npts = express.Router();

// Setup routes
npts.get('/p01/policylist/1/1/:region', (request, response) => {
	//const { region } = request.params;
	const policylistPath = path.normalize(`${__dirname}/../../cdn/policylist/policylist.xml`);

	if (fs.existsSync(policylistPath)) {
		response.set('Content-Type', 'application/xml; charset=utf-8');
		response.sendFile(policylistPath);
	} else {
		response.sendStatus(404);
	}
});

// Main router for endpoints
const router = express.Router();

// Create subdomain
router.use(subdomain('nppl.app', npts));

module.exports = router;