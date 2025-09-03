import { BOSSDefinition } from '@pretendonetwork/grpc/boss/boss_service';
import { createChannel, createClient, Metadata } from 'nice-grpc';
import type { BOSSClient } from '@pretendonetwork/grpc/boss/boss_service';

export type CliContext = {
	grpc: BOSSClient;
};

export function getCliContext(): CliContext {
	const grpcHost = process.env.PN_BOSS_CLI_GRPC_HOST ?? '';
	const grpcKey = process.env.PN_BOSS_CLI_GRPC_APIKEY ?? '';

	if (!grpcHost) {
		throw new Error('Missing env variable PN_BOSS_CLI_GRPC_HOST');
	}
	if (!grpcKey) {
		throw new Error('Missing env variable PN_BOSS_CLI_GRPC_APIKEY');
	}

	console.log(`Connecting to BOSS server at ${grpcHost}`);

	const channel = createChannel(grpcHost);
	const client: BOSSClient = createClient(BOSSDefinition, channel, {
		'*': {
			metadata: new Metadata({
				'X-API-Key': grpcKey
			})
		}
	});

	return {
		grpc: client
	};
}
