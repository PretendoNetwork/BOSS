import fs from 'fs-extra';
import colors from 'colors';

colors.enable();

const root = process.env.PN_BOSS_CONFIG_LOGGER_PATH ? process.env.PN_BOSS_CONFIG_LOGGER_PATH : `${__dirname}/..`;
fs.ensureDirSync(`${root}/logs`);

const streams = {
	latest: fs.createWriteStream(`${root}/logs/latest.log`),
	success: fs.createWriteStream(`${root}/logs/success.log`),
	error: fs.createWriteStream(`${root}/logs/error.log`),
	warn: fs.createWriteStream(`${root}/logs/warn.log`),
	info: fs.createWriteStream(`${root}/logs/info.log`)
} as const;

function getCurrentTimestamp(): string {
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // * Months are 0-indexed
	const day = String(date.getDate()).padStart(2, '0');
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');

	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function LOG_SUCCESS(input: string): void {
	input = `[${getCurrentTimestamp()}] [SUCCESS]: ${input}`;
	streams.success.write(`${input}\n`);

	console.log(`${input}`.green.bold);
}

export function LOG_ERROR(input: string): void {
	input = `[${getCurrentTimestamp()}] [ERROR]: ${input}`;
	streams.error.write(`${input}\n`);

	console.error(`${input}`.red.bold);
}

export function LOG_WARN(input: string): void {
	input = `[${getCurrentTimestamp()}] [WARN]: ${input}`;
	streams.warn.write(`${input}\n`);

	console.log(`${input}`.yellow.bold);
}

export function LOG_INFO(input: string): void {
	input = `[${getCurrentTimestamp()}] [INFO]: ${input}`;
	streams.info.write(`${input}\n`);

	console.log(`${input}`.cyan.bold);
}
