import crypto from 'node:crypto';
import path from 'node:path';
import fs from 'fs-extra';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { LOG_INFO, LOG_WARN, LOG_ERROR } from '@/logger';
import { DisabledFeatures, Config } from '@/types/common/config';

dotenv.config();

// * Defined here to prevent circular dependencies
function md5(input: crypto.BinaryLike): string {
	return crypto.createHash('md5').update(input).digest('hex');
}

const BOSS_WIIU_AES_KEY_MD5_HASH = '5202ce5099232c3d365e28379790a919';
const BOSS_WIIU_HMAC_KEY_MD5_HASH = 'b4482fef177b0100090ce0dbeb8ce977';
const BOSS_3DS_AES_KEY_MD5_HASH = '86fbc2bb4cb703b2a4c6cc9961319926';

LOG_INFO('Loading config');

const warnings: string[] = [];
const errors: string[] = [];

let mongooseConnectOptionsMain: mongoose.ConnectOptions = {};

if (process.env.PN_BOSS_CONFIG_MONGOOSE_CONNECT_OPTIONS_PATH?.trim()) {
	mongooseConnectOptionsMain = fs.readJSONSync(process.env.PN_BOSS_CONFIG_MONGOOSE_CONNECT_OPTIONS_PATH?.trim());
} else {
	warnings.push('No Mongoose connection options found for main connection. To add connection options, set PN_BOSS_CONFIG_MONGOOSE_CONNECT_OPTIONS_PATH to the path of your options JSON file');
}

export const disabledFeatures: DisabledFeatures = {
	s3: false
};

export const config: Config = {
	http: {
		port: Number(process.env.PN_BOSS_CONFIG_HTTP_PORT?.trim() || '')
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
		connection_string: process.env.PN_BOSS_CONFIG_MONGO_CONNECTION_STRING?.trim() || '',
		options: mongooseConnectOptionsMain
	},
	cdn: {
		download_url: process.env.PN_BOSS_CONFIG_CDN_DOWNLOAD_URL?.trim() || '',
		s3: {
			endpoint: process.env.PN_BOSS_CONFIG_S3_ENDPOINT?.trim() || '',
			region: process.env.PN_BOSS_CONFIG_S3_REGION?.trim() || '',
			bucket: process.env.PN_BOSS_CONFIG_S3_BUCKET?.trim() || '',
			key: process.env.PN_BOSS_CONFIG_S3_ACCESS_KEY?.trim() || '',
			secret: process.env.PN_BOSS_CONFIG_S3_ACCESS_SECRET?.trim() || ''
		},
		disk_path: process.env.PN_BOSS_CONFIG_CDN_DISK_PATH?.trim() || ''
	},
};

LOG_INFO('Config loaded, checking integrity');

if (!config.http.port) {
	errors.push('Failed to find HTTP port. Set the PN_BOSS_CONFIG_HTTP_PORT environment variable');
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

if (!config.cdn.download_url) {
	errors.push('Failed to find CDN content download URL. Set the PN_BOSS_CONFIG_CDN_DOWNLOAD_URL environment variable');
} else {
	const parsedURL = new URL(config.cdn.download_url);

	if (!parsedURL.hostname.startsWith('npdi.cdn')) {
		errors.push('CDN content download URL *MUST* use the subdomain `npdi.cdn`');
	}
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

if (disabledFeatures.s3) {
	if (!config.cdn.disk_path) {
		errors.push('s3 file storage is disabled and no CDN disk path was set. Set the PN_BOSS_CONFIG_CDN_DISK_PATH environment variable');
	}

	config.cdn.disk_path = path.resolve(config.cdn.disk_path);

	fs.ensureDirSync(config.cdn.disk_path);
}

for (const warning of warnings) {
	LOG_WARN(warning);
}

if (errors.length !== 0) {
	for (const error of errors) {
		LOG_ERROR(error);
	}

	process.exit(0);
}
