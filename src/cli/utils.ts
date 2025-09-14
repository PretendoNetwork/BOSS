import { BOSSDefinition } from '@pretendonetwork/grpc/boss/boss_service';
import { createChannel, createClient, Metadata } from 'nice-grpc';
import type { BOSSClient } from '@pretendonetwork/grpc/boss/boss_service';

export type WiiuKeys = { aesKey: string; hmacKey: string };

export type CliContext = {
	grpc: BOSSClient;
	getWiiuKeys: () => WiiuKeys;
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

	const channel = createChannel(grpcHost);
	const client: BOSSClient = createClient(BOSSDefinition, channel, {
		'*': {
			metadata: new Metadata({
				'X-API-Key': grpcKey
			})
		}
	});

	return {
		grpc: client,
		getWiiuKeys(): WiiuKeys {
			const aesKey = process.env.PN_BOSS_CLI_WIIU_AES_KEY ?? '';
			const hmacKey = process.env.PN_BOSS_CLI_WIIU_HMAC_KEY ?? '';

			if (!aesKey) {
				throw new Error('Missing env variable PN_BOSS_CLI_WIIU_AES_KEY - needed for decryption');
			}
			if (!hmacKey) {
				throw new Error('Missing env variable PN_BOSS_CLI_WIIU_HMAC_KEY - needed for decryption');
			}
			return {
				aesKey,
				hmacKey
			};
		}
	};
}

export function prettyTrunc(str: string, len: number): string {
	if (str.length > len) {
		return `${str.slice(0, len)}...`;
	}
	return str;
}
