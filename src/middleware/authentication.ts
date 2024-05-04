import express from 'express';
import { getNEXDataByPID } from '@/util';

export default async function authenticationMiddleware(request: express.Request, response: express.Response, next: express.NextFunction): Promise<void> {
	if (request.pid) {
		// TODO - Get users PNIDs
		request.nexAccount = await getNEXDataByPID(request.pid);
	}

	return next();
}
