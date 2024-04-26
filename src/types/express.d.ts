import { GetUserDataResponse } from '@pretendonetwork/grpc/account/get_user_data_rpc';

declare global {
	namespace Express {
		interface Request {
			files?: Record<string, any>;
			pid: number;
			pnid: GetUserDataResponse | null;
		}
	}
}
