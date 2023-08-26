import express from 'express';
import { getUserDataByPID } from '@/util';

export default async function authenticationMiddleware(request: express.Request, response: express.Response, next: express.NextFunction): Promise<void> {
	if (request.pid) {
		// TODO - Handle 3DS NEX accounts
		request.pnid = await getUserDataByPID(request.pid);
	}

	return next();
}
