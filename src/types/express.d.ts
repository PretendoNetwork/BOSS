import { GetUserDataResponse } from '@pretendonetwork/grpc/account/get_user_data_rpc';

declare global {
	namespace Express {
		interface Request {
			pid: number;
			pnid: GetUserDataResponse | null;
		}
	}
}