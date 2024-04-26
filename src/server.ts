process.title = 'Pretendo - BOSS';

import express from 'express';
import morgan from 'morgan';
import { connect as connectDatabase } from '@/database';
import { startGRPCServer } from '@/services/grpc/server';
import RequestException from '@/request-exception';
import { LOG_INFO, LOG_SUCCESS } from '@/logger';
import { config } from '@/config-manager';

import parseUserAgentMiddleware from '@/middleware/parse-user-agent';
// import authenticationMiddleware from '@/middleware/authentication';

import nppl from '@/services/nppl';
import npts from '@/services/npts';
import npdi from '@/services/npdi';
import npfl from '@/services/npfl';
import npdl from '@/services/npdl';
import spr from '@/services/spr';

const app = express();

LOG_INFO('Setting up Middleware');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.use(parseUserAgentMiddleware);
// app.use(authenticationMiddleware);

app.use(nppl);
app.use(npts);
app.use(npdi);
app.use(npfl);
app.use(npdl);
app.use(spr);

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
app.use((error: unknown, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
	let status: number = 500;
	let message: string = 'Unknown error';

	if (error instanceof RequestException) {
		status = error.status;
		message = error.message;
	}

	console.log(error);

	response.status(status);
	response.json({
		app: 'boss',
		status: status,
		error: message
	});
});

async function main(): Promise<void> {
	LOG_INFO('Starting server');

	await connectDatabase();
	LOG_SUCCESS('Database connected');

	await startGRPCServer();
	LOG_SUCCESS(`gRPC server started at address ${config.grpc.boss.address}:${config.grpc.boss.port}`);

	app.listen(config.http.port, () => {
		LOG_SUCCESS(`HTTP server started on port ${config.http.port}`);
	});
}

main().catch(console.error);
