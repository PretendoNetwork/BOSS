import mongoose from 'mongoose';

export interface DisabledFeatures {
	s3: boolean
}

export interface Config {
	http: {
		port: number;
	};
	crypto: {
		wup: {
			aes_key: string;
			hmac_key: string;
		};
		ctr: {
			aes_key: Buffer;
		};
	};
	grpc: {
		boss: {
			address: string;
			port: number;
			api_key: string;
		};
		account: {
			address: string;
			port: number;
			api_key: string;
		};
		friends: {
			address: string;
			port: number;
			api_key: string;
		};
	};
	mongoose: {
		connection_string: string;
		options: mongoose.ConnectOptions;
	};
	cdn: {
		download_url: string;
		s3: {
			endpoint: string;
			region: string;
			bucket: string;
			key: string;
			secret: string;
		};
		disk_path: string;
	};
}
