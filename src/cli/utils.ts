import { BOSSDefinition } from '@pretendonetwork/grpc/boss/boss_service';
import { createChannel, createClient, Metadata } from 'nice-grpc';
import dotenv from 'dotenv';
import type { BOSSClient } from '@pretendonetwork/grpc/boss/boss_service';

export type WiiUKeys = { aesKey: string; hmacKey: string };
export type NpdiUrl = {
	host: string;
	url: string;
};

export type CliContext = {
	grpc: BOSSClient;
	getNpdiUrl: () => NpdiUrl;
	getWiiUKeys: () => WiiUKeys;
};

export function getCliContext(): CliContext {
	dotenv.config();
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
		getNpdiUrl(): NpdiUrl {
			const npdiUrl = process.env.PN_BOSS_CLI_NPDI_URL ?? 'https://npdi.cdn.pretendo.cc';
			const npdiHost = process.env.PN_BOSS_CLI_NPDI_HOST ?? new URL(npdiUrl).host;

			return {
				url: npdiUrl,
				host: npdiHost
			};
		},
		getWiiUKeys(): WiiUKeys {
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
