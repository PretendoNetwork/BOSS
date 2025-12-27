import crypto from 'node:crypto';
import path from 'node:path';
import fs from 'fs-extra';
import dotenv from 'dotenv';
import pinoPretty from 'pino-pretty';
import { pino } from 'pino';

// temporary logger - just for configuration (as log level and format is not yet known in this file)
const logger = pino(pinoPretty());

dotenv.config();

// * Defined here to prevent circular dependencies
function md5(input: crypto.BinaryLike): string {
	return crypto.createHash('md5').update(input).digest('hex');
}

const BOSS_WIIU_AES_KEY_MD5_HASH = '5202ce5099232c3d365e28379790a919';
const BOSS_WIIU_HMAC_KEY_MD5_HASH = 'b4482fef177b0100090ce0dbeb8ce977';
const BOSS_3DS_AES_KEY_MD5_HASH = '86fbc2bb4cb703b2a4c6cc9961319926';

const warnings: string[] = [];
const errors: string[] = [];

export const disabledFeatures = {
	s3: false,
	spr: false
};

export const config = {
	http: {
		port: Number(process.env.PN_BOSS_CONFIG_HTTP_PORT?.trim() || '')
	},
	log: {
		format: process.env.PN_BOSS_CONFIG_LOG_FORMAT?.trim() || 'pretty',
		level: process.env.PN_BOSS_CONFIG_LOG_LEVEL?.trim() || 'info'
	},
	crypto: {
		wup: {
			aes_key: process.env.PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY?.trim() || '',
			hmac_key: process.env.PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY?.trim() || ''
		},
		ctr: {
			aes_key: Buffer.from(process.env.PN_BOSS_CONFIG_BOSS_3DS_AES_KEY?.trim() || '', 'hex')
		}
	},
	grpc: {
		max_receive_message_length: Number(process.env.PN_BOSS_CONFIG_GRPC_MAX_RECEIVE_MESSAGE_LENGTH_MB?.trim() || '4'),
		max_send_message_length: Number(process.env.PN_BOSS_CONFIG_GRPC_MAX_SEND_MESSAGE_LENGTH_MB?.trim() || '4'),
		boss: {
			address: process.env.PN_BOSS_CONFIG_GRPC_BOSS_SERVER_ADDRESS?.trim() || '',
			port: Number(process.env.PN_BOSS_CONFIG_GRPC_BOSS_SERVER_PORT?.trim() || ''),
			api_key: process.env.PN_BOSS_CONFIG_GRPC_BOSS_SERVER_API_KEY?.trim() || ''
		},
		account: {
			address: process.env.PN_BOSS_CONFIG_GRPC_ACCOUNT_SERVER_ADDRESS?.trim() || '',
			port: Number(process.env.PN_BOSS_CONFIG_GRPC_ACCOUNT_SERVER_PORT?.trim() || ''),
			api_key: process.env.PN_BOSS_CONFIG_GRPC_ACCOUNT_SERVER_API_KEY?.trim() || ''
		},
		friends: {
			address: process.env.PN_BOSS_CONFIG_GRPC_FRIENDS_SERVER_ADDRESS?.trim() || '',
			port: Number(process.env.PN_BOSS_CONFIG_GRPC_FRIENDS_SERVER_PORT?.trim() || ''),
			api_key: process.env.PN_BOSS_CONFIG_GRPC_FRIENDS_SERVER_API_KEY?.trim() || ''
		}
	},
	mongoose: {
		connection_string: process.env.PN_BOSS_CONFIG_MONGO_CONNECTION_STRING?.trim() || ''
	},
	cdn: {
		s3: {
			endpoint: process.env.PN_BOSS_CONFIG_S3_ENDPOINT?.trim() || '',
			region: process.env.PN_BOSS_CONFIG_S3_REGION?.trim() || '',
			bucket: process.env.PN_BOSS_CONFIG_S3_BUCKET?.trim() || '',
			key: process.env.PN_BOSS_CONFIG_S3_ACCESS_KEY?.trim() || '',
			secret: process.env.PN_BOSS_CONFIG_S3_ACCESS_SECRET?.trim() || ''
		},
		disk_path: process.env.PN_BOSS_CONFIG_CDN_DISK_PATH?.trim() || ''
	},
	spr: {
		enabled: process.env.PN_BOSS_CONFIG_STREETPASS_RELAY_ENABLED?.trim().toLowerCase() === 'true',
		cleanOldData: process.env.PN_BOSS_CONFIG_STREETPASS_RELAY_CLEAN_OLD_DATA?.trim().toLowerCase() === 'true'
	},
	domains: {
		npdi: (process.env.PN_BOSS_CONFIG_DOMAINS_NPDI || 'npdi.cdn.pretendo.cc').split(','),
		npdl: (process.env.PN_BOSS_CONFIG_DOMAINS_NPDL || 'npdl.cdn.pretendo.cc').split(','),
		npfl: (process.env.PN_BOSS_CONFIG_DOMAINS_NPFL || 'npfl.c.app.pretendo.cc').split(','),
		nppl: (process.env.PN_BOSS_CONFIG_DOMAINS_NPPL || 'nppl.app.pretendo.cc,nppl.c.app.pretendo.cc').split(','),
		npts: (process.env.PN_BOSS_CONFIG_DOMAINS_NPTS || 'npts.app.pretendo.cc').split(','),
		spr: (process.env.PN_BOSS_CONFIG_DOMAINS_SPR || 'service.spr.app.pretendo.cc').split(',')
	}
};

if (!config.http.port) {
	errors.push('Failed to find HTTP port. Set the PN_BOSS_CONFIG_HTTP_PORT environment variable');
}

const possibleConfigFormats = ['pretty', 'json'];
if (!possibleConfigFormats.includes(config.log.format)) {
	errors.push(`Invalid log format, possible values: ${possibleConfigFormats.join(', ')}`);
}

const possibleconfigLevels = ['error', 'warn', 'info', 'debug', 'trace'];
if (!possibleconfigLevels.includes(config.log.level)) {
	errors.push(`Invalid log level, possible values: ${possibleConfigFormats.join(', ')}`);
}

if (md5(config.crypto.wup.aes_key) !== BOSS_WIIU_AES_KEY_MD5_HASH) {
	warnings.push('Invalid BOSS WiiU AES key. Uploading and encrypting new BOSS content for the Wii U won\'t work! Set or correct the PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY environment variable');
}

if (md5(config.crypto.wup.hmac_key) !== BOSS_WIIU_HMAC_KEY_MD5_HASH) {
	warnings.push('Invalid BOSS WiiU HMAC key. Uploading and encrypting new BOSS content for the Wii U won\'t work! Set or correct the PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY environment variable');
}

if (md5(config.crypto.ctr.aes_key) !== BOSS_3DS_AES_KEY_MD5_HASH) {
	warnings.push('Invalid BOSS 3DS AES key. Uploading and encrypting new BOSS content for the 3DS won\'t work! Set or correct the PN_BOSS_CONFIG_BOSS_3DS_AES_KEY environment variable');
}

if (!config.grpc.boss.address) {
	errors.push('Failed to find BOSS server gRPC address. Set the PN_BOSS_CONFIG_GRPC_BOSS_SERVER_ADDRESS environment variable');
}

if (!config.grpc.boss.port) {
	errors.push('Failed to find BOSS server gRPC port. Set the PN_BOSS_CONFIG_GRPC_BOSS_SERVER_PORT environment variable');
}

if (!config.grpc.boss.api_key) {
	errors.push('Failed to find BOSS server gRPC API key. Set the PN_BOSS_CONFIG_GRPC_BOSS_SERVER_API_KEY environment variable');
}

if (!config.grpc.account.address) {
	errors.push('Failed to find account server gRPC address. Set the PN_BOSS_CONFIG_GRPC_ACCOUNT_SERVER_ADDRESS environment variable');
}

if (!config.grpc.account.port) {
	errors.push('Failed to find account server gRPC port. Set the PN_BOSS_CONFIG_GRPC_ACCOUNT_SERVER_PORT environment variable');
}

if (!config.grpc.account.api_key) {
	errors.push('Failed to find account server gRPC API key. Set the PN_BOSS_CONFIG_GRPC_ACCOUNT_SERVER_API_KEY environment variable');
}

if (!config.grpc.friends.address) {
	errors.push('Failed to find account server gRPC address. Set the PN_BOSS_CONFIG_GRPC_FRIENDS_SERVER_ADDRESS environment variable');
}

if (!config.grpc.friends.port) {
	errors.push('Failed to find account server gRPC port. Set the PN_BOSS_CONFIG_GRPC_FRIENDS_SERVER_PORT environment variable');
}

if (!config.grpc.friends.api_key) {
	errors.push('Failed to find account server gRPC API key. Set the PN_BOSS_CONFIG_GRPC_FRIENDS_SERVER_API_KEY environment variable');
}

if (!config.mongoose.connection_string) {
	errors.push('Failed to find MongoDB connection string. Set the PN_BOSS_CONFIG_MONGO_CONNECTION_STRING environment variable');
}

if (!config.cdn.s3.endpoint) {
	warnings.push('Failed to find s3 endpoint config. Disabling feature. To enable feature set the PN_BOSS_CONFIG_S3_ENDPOINT environment variable');
	disabledFeatures.s3 = true;
}

if (!config.cdn.s3.region) {
	warnings.push('Failed to find s3 region config. Disabling feature. To enable feature set the PN_BOSS_CONFIG_S3_REGION environment variable');
	disabledFeatures.s3 = true;
}

if (!config.cdn.s3.bucket) {
	warnings.push('Failed to find s3 bucket config. Disabling feature. To enable feature set the PN_BOSS_CONFIG_S3_BUCKET environment variable');
	disabledFeatures.s3 = true;
}

if (!config.cdn.s3.key) {
	warnings.push('Failed to find s3 access key config. Disabling feature. To enable feature set the PN_BOSS_CONFIG_S3_ACCESS_KEY environment variable');
	disabledFeatures.s3 = true;
}

if (!config.cdn.s3.secret) {
	warnings.push('Failed to find s3 secret key config. Disabling feature. To enable feature set the PN_BOSS_CONFIG_S3_ACCESS_SECRET environment variable');
	disabledFeatures.s3 = true;
}

if (!config.spr.enabled) {
	warnings.push('PN_BOSS_CONFIG_STREETPASS_RELAY_ENABLED is not set or disabled. Disabling feature. To enable feature set the PN_BOSS_CONFIG_STREETPASS_RELAY_ENABLED environment variable');
	disabledFeatures.spr = true;
}

if (disabledFeatures.s3) {
	if (!config.cdn.disk_path) {
		errors.push('s3 file storage is disabled and no CDN disk path was set. Set the PN_BOSS_CONFIG_CDN_DISK_PATH environment variable');
	}

	config.cdn.disk_path = path.resolve(config.cdn.disk_path);

	fs.ensureDirSync(config.cdn.disk_path);
}

for (const warning of warnings) {
	logger.warn(warning);
}

if (errors.length !== 0) {
	for (const error of errors) {
		logger.error(error);
	}

	process.exit(0);
}
