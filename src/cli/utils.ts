import { BossServiceDefinition } from '@pretendonetwork/grpc/boss/v2/boss_service';
import { createChannel, createClient, Metadata } from 'nice-grpc';
import dotenv from 'dotenv';
import type { BossServiceClient } from '@pretendonetwork/grpc/boss/v2/boss_service';
import type { Command } from 'commander';
import type { FormatOption } from './output';

export type WiiUKeys = { aesKey: string; hmacKey: string };
export type CtrKeys = { aesKey: string };
export type NpdiUrl = {
	host: string;
	url: string;
};
export type NpdlUrl = {
	host: string;
	url: string;
};

export type CliContext = {
	grpc: BossServiceClient;
	getNpdiUrl: () => NpdiUrl;
	getNpdlUrl: () => NpdlUrl;
	getWiiUKeys: () => WiiUKeys;
	get3DSKeys: () => CtrKeys;
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
	const client: BossServiceClient = createClient(BossServiceDefinition, channel, {
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
		getNpdlUrl(): NpdiUrl {
			const npdlUrl = process.env.PN_BOSS_CLI_NPDL_URL ?? 'https://npdl.cdn.pretendo.cc';
			const npdlHost = process.env.PN_BOSS_CLI_NPDL_HOST ?? new URL(npdlUrl).host;

			return {
				url: npdlUrl,
				host: npdlHost
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
		},
		get3DSKeys(): CtrKeys {
			const aesKey = process.env.PN_BOSS_CLI_3DS_AES_KEY ?? '';

			if (!aesKey) {
				throw new Error('Missing env variable PN_BOSS_CLI_3DS_AES_KEY - needed for decryption');
			}
			return {
				aesKey
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

export type CommandHandlerCtx<T extends any[]> = {
	opts: <T = Record<string, any>>() => T;
	globalOpts: {
		json?: boolean;
	};
	format: FormatOption;
	args: T;
};

export function commandHandler<T extends any[]>(cb: (ctx: CommandHandlerCtx<T>) => Promise<void>) {
	return (...args: any[]): Promise<void> => {
		const cmd: Command = args[args.length - 1];

		let topCmd = cmd;
		while (topCmd.parent) {
			topCmd = topCmd.parent;
		}
		const globalOpts = topCmd.opts() ?? {};

		const ctx: CommandHandlerCtx<T> = {
			args: args as T,
			globalOpts,
			format: globalOpts.json ? 'json' : 'pretty',
			opts: () => cmd.opts() as any
		};

		return cb(ctx);
	};
}
