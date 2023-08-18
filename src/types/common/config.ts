export interface Config {
	http: {
		port: number;
	};
	crypto: {
		wup: {
			aes_key: Buffer;
			hmac_key: Buffer;
		};
		ctr: {
			aes_key: Buffer;
		};
	};
}