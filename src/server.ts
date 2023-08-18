process.title = 'Pretendo - BOSS';

import express from 'express';
import morgan from 'morgan';
import { LOG_INFO, LOG_SUCCESS } from '@/logger';
import { config } from '@/config-manager';

import nppl from '@/services/nppl';
import npts from '@/services/npts';
import npdi from '@/services/npdi';

const app = express();

app.set('etag', false);
app.disable('x-powered-by');

LOG_INFO('Setting up Middleware');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.use(nppl);
app.use(npts);
app.use(npdi);

LOG_INFO('Creating 404 status handler');
app.use((_request, response) => {
	response.status(404);
	response.json({
		app: 'api',
		status: 404,
		error: 'Route not found'
	});
});

LOG_INFO('Creating non-404 status handler');
app.use((error: any, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
	const status: number = error.status || 500;

	response.status(status);
	response.json({
		app: 'boss',
		status: status,
		error: error
	});
});

LOG_INFO('Starting server');
app.listen(config.http.port, () => {
	LOG_SUCCESS(`Server started on port ${config.http.port}`);
});