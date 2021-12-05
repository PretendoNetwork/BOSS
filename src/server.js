process.title = 'Pretendo - BOSS';

const express = require('express');
const morgan = require('morgan');
const logger = require('../logger');
const config = require('../config.json');

const { http: { port } } = config;
const app = express();

const nptsService = require('./services/npts');
const npplService = require('./services/nppl');
const npdiService = require('./services/npdi');

// START APPLICATION
app.set('etag', false);
app.disable('x-powered-by');

// Create router
logger.info('Setting up Middleware');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.use(nptsService);
app.use(npplService);
app.use(npdiService);

// 404 handler
logger.info('Creating 404 status handler');
app.use((request, response) => {
	response.status(404);
	response.json({
		app: 'api',
		status: 404,
		error: 'Route not found'
	});
});

// non-404 error handler
logger.info('Creating non-404 status handler');
app.use((error, request, response) => {
	const status = error.status || 500;

	response.status(status);
	response.json({
		app: 'api',
		status,
		error: error.message
	});
});

// Starts the server
logger.info('Starting server');

app.listen(port, () => {
	logger.success(`Server started on port ${port}`);
});