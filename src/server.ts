import express from 'express';
import { connect as connectDatabase } from '@/database';
import { startGRPCServer } from '@/services/grpc/server';
import RequestException from '@/request-exception';
import { logger, loggerHttp } from '@/logger';
import { config } from '@/config-manager';
import parseUserAgentMiddleware from '@/middleware/parse-user-agent';
import authenticationMiddleware from '@/middleware/authentication';
import nppl from '@/services/nppl';
import npts from '@/services/npts';
import npdi from '@/services/npdi';
import npfl from '@/services/npfl';
import npdl from '@/services/npdl';
import spr from '@/services/spr';
import { setupScheduler } from './scheduled';

process.title = 'Pretendo - BOSS';
process.on('SIGTERM', () => {
	process.exit(0);
});

const app = express();

logger.info('Setting up Middleware');
app.use(loggerHttp);
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.use(parseUserAgentMiddleware);
app.use(authenticationMiddleware);

app.use(nppl);
app.use(npts);
app.use(npdi);
app.use(npfl);
app.use(npdl);
app.use(spr);

logger.info('Creating 404 status handler');
app.use((_request, response) => {
	response.status(404);
	response.json({
		app: 'api',
		status: 404,
		error: 'Route not found'
	});
});

logger.info('Creating non-404 status handler');
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
	logger.info('Starting server');

	await connectDatabase();
	logger.success('Database connected');

	await setupScheduler();
	logger.success('Scheduler started');

	await startGRPCServer();
	logger.success(`gRPC server started at address ${config.grpc.boss.address}:${config.grpc.boss.port}`);

	app.listen(config.http.port, () => {
		logger.success(`HTTP server started on port ${config.http.port}`);
	});
}

main().catch(console.error);
