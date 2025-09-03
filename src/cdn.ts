import path from 'node:path';
import { Stream } from 'node:stream';
import fs from 'fs-extra';
import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3 } from '@aws-sdk/client-s3';
import { config, disabledFeatures } from '@/config-manager';
import { fileStatOrNull } from './util';
import { logger } from './logger';
import type { Response } from 'express';
import type { Readable } from 'node:stream';
import type { S3Client } from '@aws-sdk/client-s3';
import type { NodeJsClient } from '@smithy/types';

let s3: NodeJsClient<S3Client> | null = null;
if (!disabledFeatures.s3) {
	s3 = new S3({
		forcePathStyle: true,
		endpoint: config.cdn.s3.endpoint,
		region: config.cdn.s3.region,
		credentials: {
			accessKeyId: config.cdn.s3.key,
			secretAccessKey: config.cdn.s3.secret
		}
	});
}

export const cdnNamespace = {
	spr: 'spr'
} as const;
export type CdnNamespace = keyof typeof cdnNamespace;

function buildKey(namespace: CdnNamespace, key: string): string {
	return `${namespace}/${key}`;
}

function buildLocalCdnPath(fullKey: string): string {
	return path.join(config.cdn.disk_path, fullKey);
}

export async function getCdnFileAsStream(namespace: CdnNamespace, key: string): Promise<Readable | null> {
	const fullKey = buildKey(namespace, key);

	if (!s3) {
		const filePath = buildLocalCdnPath(fullKey);
		const fileInfo = await fileStatOrNull(filePath);

		if (!fileInfo) {
			return null;
		}

		return fs.createReadStream(filePath);
	}

	const response = await s3.send(new GetObjectCommand({
		Key: fullKey,
		Bucket: config.cdn.s3.bucket
	}));

	if (!response.Body) {
		return null;
	}

	return response.Body;
}

export async function uploadCdnFile(namespace: CdnNamespace, key: string, data: Buffer): Promise<void> {
	const fullKey = buildKey(namespace, key);

	if (!s3) {
		const filePath = buildLocalCdnPath(fullKey);
		const folder = path.dirname(filePath);
		await fs.ensureDir(folder);
		await fs.writeFile(filePath, data);
		return;
	}

	await s3.send(new PutObjectCommand({
		Key: fullKey,
		Bucket: config.cdn.s3.bucket,
		Body: data,
		ACL: 'private'
	}));
}

export async function deleteCdnFile(namespace: CdnNamespace, key: string): Promise<void> {
	const fullKey = buildKey(namespace, key);

	if (!s3) {
		const filePath = buildLocalCdnPath(fullKey);
		const fileInfo = await fileStatOrNull(filePath);
		if (!fileInfo || !fileInfo.isFile()) {
			return; // Not found or not a file
		}

		await fs.unlink(filePath);
		return;
	}

	await s3.send(new DeleteObjectCommand({
		Key: fullKey,
		Bucket: config.cdn.s3.bucket
	}));
}

export function streamFileToResponse(response: Response, stream: Readable, headers: Record<string, string> = {}): void {
	response.setHeaders(new Headers(headers));
	Stream.pipeline(stream, response, (err) => {
		if (err) {
			logger.error('Error with response stream: ' + err.message);
			response.end();
		}
	});
}
