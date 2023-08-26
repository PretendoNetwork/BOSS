import { createServer, Server } from 'nice-grpc';
import { BOSSDefinition } from '@pretendonetwork/grpc/boss/boss_service';
import { apiKeyMiddleware } from '@/services/grpc/boss/middleware/api-key-middleware';
import { authenticationMiddleware } from '@/services/grpc/boss/middleware/authentication-middleware';
import { implementation } from '@/services/grpc/boss/implementation';
import { config } from '@/config-manager';

export async function startGRPCServer(): Promise<void> {
	const server: Server = createServer();

	server.with(apiKeyMiddleware).with(authenticationMiddleware).add(BOSSDefinition, implementation);

	await server.listen(`${config.grpc.boss.address}:${config.grpc.boss.port}`);
}