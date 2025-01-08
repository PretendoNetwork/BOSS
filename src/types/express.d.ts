declare namespace Express {
	interface Request {
		files?: Record<string, any>;
		pid: number;
	}
}
