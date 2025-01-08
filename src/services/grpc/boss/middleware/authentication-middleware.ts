import { Status, ServerError } from 'nice-grpc';
import { getUserDataByToken } from '@/util';
import type { ServerMiddlewareCall, CallContext } from 'nice-grpc';
import type { GetUserDataResponse } from '@pretendonetwork/grpc/account/get_user_data_rpc';

const TOKEN_REQUIRED_PATHS = [
	'/boss.BOSS/RegisterTask',
	'/boss.BOSS/UpdateTask',
	'/boss.BOSS/DeleteTask',
	'/boss.BOSS/UploadFile',
	'/boss.BOSS/DeleteFile'
];

export type AuthenticationCallContextExt = {
	user: GetUserDataResponse | null;
};

export async function* authenticationMiddleware<Request, Response>(
	call: ServerMiddlewareCall<Request, Response, AuthenticationCallContextExt>,
	context: CallContext
): AsyncGenerator<Response, Response | void, undefined> {
	const token: string | undefined = context.metadata.get('X-Token')?.trim();

	if (!token && TOKEN_REQUIRED_PATHS.includes(call.method.path)) {
		throw new ServerError(Status.UNAUTHENTICATED, 'Missing or invalid authentication token');
	}

	try {
		let user: GetUserDataResponse | null = null;

		if (token) {
			user = await getUserDataByToken(token);
		}

		if (!user && TOKEN_REQUIRED_PATHS.includes(call.method.path)) {
			throw new ServerError(Status.UNAUTHENTICATED, 'Missing or invalid authentication token');
		}

		return yield* call.next(call.request, {
			...context,
			user
		});
	} catch (error) {
		let message: string = 'Unknown server error';

		console.log(error);

		if (error instanceof Error) {
			message = error.message;
		}

		throw new ServerError(Status.INVALID_ARGUMENT, message);
	}
}
