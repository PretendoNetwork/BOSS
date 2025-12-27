import { Status, ServerError } from 'nice-grpc';
import { getUserDataByToken } from '@/util';
import type { ServerMiddlewareCall, CallContext } from 'nice-grpc';
import type { GetUserDataResponse } from '@pretendonetwork/grpc/account/get_user_data_rpc';
import type { PNIDPermissionFlags } from '@pretendonetwork/grpc/account/pnid_permission_flags';

export type AuthenticationCallContextExt = {
	user: GetUserDataResponse | null;
};

export async function* authenticationMiddleware<Request, Response>(
	call: ServerMiddlewareCall<Request, Response, AuthenticationCallContextExt>,
	context: CallContext
): AsyncGenerator<Response, Response | void, undefined> {
	const token: string | undefined = context.metadata.get('X-Token')?.trim();

	try {
		let user: GetUserDataResponse | null = null;

		if (token) {
			user = await getUserDataByToken(token);
			if (!user) {
				throw new ServerError(Status.UNAUTHENTICATED, 'User could not be found');
			}
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

export function hasPermission(ctx: AuthenticationCallContextExt, perm: keyof PNIDPermissionFlags): boolean {
	if (!ctx.user) {
		return true; // Non users are always allowed
	}
	if (!ctx.user.permissions) {
		return false; // No permissions, no entry
	}
	return ctx.user.permissions[perm];
}
