import crypto from 'node:crypto';

export function md5(input: crypto.BinaryLike): Buffer {
	return crypto.createHash('md5').update(input).digest();
}