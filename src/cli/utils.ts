import { BOSSDefinition } from '@pretendonetwork/grpc/boss/boss_service';
import { createChannel, createClient, Metadata } from 'nice-grpc';
import dotenv from 'dotenv';
import type { BOSSClient } from '@pretendonetwork/grpc/boss/boss_service';

export type WiiUKeys = { aesKey: string; hmacKey: string };

export type CliContext = {
	grpc: BOSSClient;
	npdiDomain: string;
	getWiiUKeys: () => WiiUKeys;
};

export function getCliContext(): CliContext {
	dotenv.config();
	const grpcAddress = process.env.PN_BOSS_CONFIG_GRPC_BOSS_SERVER_ADDRESS ?? '';
	const grpcPort = process.env.PN_BOSS_CONFIG_GRPC_BOSS_SERVER_PORT ?? '';
	const grpcKey = process.env.PN_BOSS_CONFIG_GRPC_BOSS_SERVER_API_KEY ?? '';

	if (!grpcAddress) {
		throw new Error('Missing env variable PN_BOSS_CONFIG_GRPC_BOSS_SERVER_ADDRESS');
	}
	if (!grpcPort) {
		throw new Error('Missing env variable PN_BOSS_CONFIG_GRPC_BOSS_SERVER_PORT');
	}
	if (!grpcKey) {
		throw new Error('Missing env variable PN_BOSS_CONFIG_GRPC_BOSS_SERVER_API_KEY');
	}

	const channel = createChannel(grpcAddress + ':' + grpcPort);
	const client: BOSSClient = createClient(BOSSDefinition, channel, {
		'*': {
			metadata: new Metadata({
				'X-API-Key': grpcKey
			})
		}
	});

	return {
		grpc: client,
		npdiDomain: (process.env.PN_BOSS_CONFIG_DOMAINS_NPDI ?? 'npdi.cdn.pretendo.cc').split(',')[0],
		getWiiUKeys(): WiiUKeys {
			const aesKey = process.env.PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY ?? '';
			const hmacKey = process.env.PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY ?? '';

			if (!aesKey) {
				throw new Error('Missing env variable PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY - needed for decryption');
			}
			if (!hmacKey) {
				throw new Error('Missing env variable PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY - needed for decryption');
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
