import dotenv from 'dotenv';
import { md5 } from '@/util';
import { LOG_INFO, LOG_ERROR } from '@/logger';
import { Config } from '@/types/common/config';

dotenv.config();

const BOSS_WIIU_AES_KEY_HASH = Buffer.from('5202ce5099232c3d365e28379790a919', 'hex');
const BOSS_WIIU_HMAC_KEY_HASH = Buffer.from('b4482fef177b0100090ce0dbeb8ce977', 'hex');
const BOSS_3DS_AES_KEY_HASH = Buffer.from('86fbc2bb4cb703b2a4c6cc9961319926', 'hex');

LOG_INFO('Loading config');

export const config: Config = {
	http: {
		port: Number(process.env.PN_BOSS_CONFIG_HTTP_PORT || '')
	},
	crypto: {
		wup: {
			aes_key: Buffer.from(process.env.PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY || ''),
			hmac_key: Buffer.from(process.env.PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY || ''),
		},
		ctr: {
			aes_key: Buffer.from(process.env.PN_BOSS_CONFIG_BOSS_3DS_AES_KEY || '', 'hex')
		}
	}
};

LOG_INFO('Config loaded, checking integrity');

if (!config.http.port) {
	LOG_ERROR('Failed to find HTTP port. Set the PN_BOSS_CONFIG_HTTP_PORT environment variable');
	process.exit(0);
}

if (!BOSS_WIIU_AES_KEY_HASH.equals(md5(config.crypto.wup.aes_key))) {
	LOG_ERROR('Invalid BOSS WiiU AES key. Set or correct the PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY environment variable');
	process.exit(0);
}

if (!BOSS_WIIU_HMAC_KEY_HASH.equals(md5(config.crypto.wup.hmac_key))) {
	LOG_ERROR('Invalid BOSS WiiU HMAC key. Set or correct the PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY environment variable');
	process.exit(0);
}

if (!BOSS_3DS_AES_KEY_HASH.equals(md5(config.crypto.ctr.aes_key))) {
	LOG_ERROR('Invalid BOSS 3DS AES key. Set or correct the PN_BOSS_CONFIG_BOSS_3DS_AES_KEY environment variable');
	process.exit(0);
}