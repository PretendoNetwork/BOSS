import { createServer } from 'nice-grpc';
import { BOSSDefinition as BossServiceDefinitionV1 } from '@pretendonetwork/grpc/boss/boss_service';
import { apiKeyMiddleware as apiKeyMiddlewareV1 } from '@/services/grpc/boss/v1/middleware/api-key-middleware';
import { authenticationMiddleware as authenticationMiddlewareV1 } from '@/services/grpc/boss/v1/middleware/authentication-middleware';
import { bossServiceImplementationV1 } from '@/services/grpc/boss/v1/implementation';
import { config } from '@/config-manager';
import type { Server } from 'nice-grpc';

export async function startGRPCServer(): Promise<void> {
	const server: Server = createServer();

	server.with(apiKeyMiddlewareV1).with(authenticationMiddlewareV1).add(BossServiceDefinitionV1, bossServiceImplementationV1);

	await server.listen(`${config.grpc.boss.address}:${config.grpc.boss.port}`);
}
