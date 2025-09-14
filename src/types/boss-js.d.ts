declare module 'boss-js' {
	export type EncryptionInput = Buffer | string;
	export type EncryptionKey = Buffer | string;

	export type DecryptionResultWiiu = {
		hash_type: number;
		iv: Buffer<ArrayBuffer>;
		hmac: Buffer<ArrayBuffer>;
		content: Buffer<ArrayBuffer>;
	};

	export type DecryptionResult3ds = {
		hash_type: number;
		release_date: bigint;
		iv: Buffer<ArrayBuffer>;
		content_header_hash: Buffer<ArrayBuffer>;
		content_header_hash_signature: Buffer<ArrayBuffer>;
		payload_content_header_hash: Buffer<ArrayBuffer>;
		payload_content_header_hash_signature: Buffer<ArrayBuffer>;
		program_id: Buffer<ArrayBuffer>;
		content_datatype: number;
		ns_data_id: number;
		content: Buffer<ArrayBuffer>;
	};

	export type EncryptionOptions3ds = {
		program_id?: string;
		title_id?: number;
		content_datatype: number;
		ns_data_id: number;
	};

	export function encrypt(input: EncryptionInput, version: number, aesKey: string, options: EncryptionOptions3ds): Buffer<ArrayBuffer>;
	export function encrypt(input: EncryptionInput, version: number, aesKey: string, hmacKey: string): Buffer<ArrayBuffer>;
	export function decrypt(input: EncryptionInput, aesKey: EncryptionKey, hmacKey?: string): DecryptionResultWiiu | DecryptionResult3ds;

	export function encryptWiiU(input: EncryptionInput, aesKey: string, hmacKey: string): Buffer<ArrayBuffer>;
	export function decryptWiiU(input: EncryptionInput, aesKey: string, hmacKey: string): DecryptionResultWiiu;

	export function encrypt3DS(input: EncryptionInput, aesKey: EncryptionKey, options: EncryptionOptions3ds): Buffer<ArrayBuffer>;
	export function decrypt3DS(input: EncryptionInput, aesKey: EncryptionKey): DecryptionResult3ds;
}
