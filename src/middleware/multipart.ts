import { unlink } from 'fs/promises';
import formidable from 'formidable';
import RequestException from '@/request-exception';
import type { File } from 'formidable';
import type { Request, Response } from 'express';

export type MultipartOutput = {
	fields: Record<string, string>;
	files: Record<string, File>;
};

export async function parseMultipart(request: Request, response: Response): Promise<MultipartOutput> {
	const form = formidable({
		multiples: false
	});
	const [fields, files] = await form.parse(request).catch((err: Error) => {
		throw new RequestException(err.message, 400);
	});

	const fileEntries = Object.entries(files);
	const fileEntriesUnified = fileEntries.map(v => [v[0], (v[1] ?? [])[0]] as const);
	const fileOutput = Object.fromEntries(fileEntriesUnified);

	const fieldEntries = Object.entries(fields);
	const fieldEntriesUnified = fieldEntries.map(v => [v[0], (v[1] ?? [])[0]] as const);
	const fieldOutput = Object.fromEntries(fieldEntriesUnified);

	const cleanup = async (): Promise<void> => {
		await Promise.allSettled(
			Object.values(fileOutput).map(file =>
				unlink(file.filepath).catch(() => { /* Ignore cleanup errors */ })
			)
		);
	};

	response.once('finish', cleanup);
	response.once('close', cleanup);

	return {
		fields: fieldOutput,
		files: fileOutput
	};
}
