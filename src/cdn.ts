import path from 'node:path';
import { Stream } from 'node:stream';
import { buffer as bufferConsumer } from 'node:stream/consumers';
import fs from 'fs-extra';
import { DeleteObjectCommand, DeleteObjectsCommand, GetObjectCommand, PutObjectCommand, S3 } from '@aws-sdk/client-s3';
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
	spr: 'spr',
	taskFile: 'task-file'
} as const;
export type CDNNamespace = keyof typeof cdnNamespace;

function buildKey(namespace: CDNNamespace, key: string): string {
	return `${cdnNamespace[namespace]}/${key}`;
}

function buildLocalCDNPath(fullKey: string): string {
	return path.join(config.cdn.disk_path, fullKey);
}

export async function getCDNFileAsStream(namespace: CDNNamespace, key: string): Promise<{ size: number | null; stream: Readable } | null> {
	const fullKey = buildKey(namespace, key);

	if (!s3) {
		const filePath = buildLocalCDNPath(fullKey);
		const fileInfo = await fileStatOrNull(filePath);

		if (!fileInfo) {
			return null;
		}

		return {
			stream: fs.createReadStream(filePath),
			size: fileInfo.size
		};
	}

	const response = await s3.send(new GetObjectCommand({
		Key: fullKey,
		Bucket: config.cdn.s3.bucket
	}));

	if (!response.Body) {
		return null;
	}

	return {
		stream: response.Body,
		size: response.ContentLength ?? null
	};
}

export async function getCDNFileAsBuffer(namespace: CDNNamespace, key: string): Promise<Buffer | null> {
	const streamOutput = await getCDNFileAsStream(namespace, key);
	if (!streamOutput) {
		return null;
	}
	return bufferConsumer(streamOutput.stream);
}

export async function uploadCDNFile(namespace: CDNNamespace, key: string, data: Buffer): Promise<void> {
	const fullKey = buildKey(namespace, key);

	if (!s3) {
		const filePath = buildLocalCDNPath(fullKey);
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

export async function deleteCDNFile(namespace: CDNNamespace, key: string): Promise<void> {
	const fullKey = buildKey(namespace, key);

	if (!s3) {
		const filePath = buildLocalCDNPath(fullKey);
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

export async function bulkDeleteCdnFiles(namespace: CDNNamespace, keys: string[]): Promise<void> {
	if (keys.length > 1000) {
		throw new Error('Cannot bulk delete more than 1000 CDN files in one batch');
	}

	if (!s3) {
		await Promise.allSettled(keys.map(v => deleteCDNFile(namespace, v)));
		return;
	}

	const fullKeys = keys.map(v => buildKey(namespace, v));
	await s3.send(new DeleteObjectsCommand({
		Delete: {
			Objects: fullKeys.map(v => ({ Key: v })),
			Quiet: true
		},
		Bucket: config.cdn.s3.bucket
	}));
}

export function streamFileToResponse(response: Response, stream: Readable, size: number | null, headers: Record<string, string> = {}): void {
	response.setHeaders(new Headers(headers));

	if (size !== null) {
		response.setHeader('Content-Length', size);
	}

	Stream.pipeline(stream, response, (err) => {
		if (err) {
			logger.error('Error with response stream: ' + err.message);
			response.end();
		}
	});
}
