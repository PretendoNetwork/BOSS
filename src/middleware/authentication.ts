import { getNEXDataByPID } from '@/util';
import type express from 'express';

export default async function authenticationMiddleware(request: express.Request, response: express.Response, next: express.NextFunction): Promise<void> {
	if (request.pid) {
		// TODO - Get users PNIDs
		request.nexAccount = await getNEXDataByPID(request.pid);
	}

	return next();
}
