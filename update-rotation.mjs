/* eslint-disable no-undef -- Tis a script */

import path from 'path';
import crypto from 'crypto';
import readline from 'readline';
import fs from 'fs-extra';
import dotenv from 'dotenv';
import xml from 'xml-js';
import { encryptWiiU } from '@pretendonetwork/boss-crypto';

dotenv.config();

function md5(input) {
	return crypto.createHash('md5').update(input).digest('hex');
}

const BOSS_WIIU_AES_KEY_MD5_HASH = '5202ce5099232c3d365e28379790a919';
const BOSS_WIIU_HMAC_KEY_MD5_HASH = 'b4482fef177b0100090ce0dbeb8ce977';

const { PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY, PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY } = process.env;

if (!PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY || md5(PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY) !== BOSS_WIIU_AES_KEY_MD5_HASH) {
	console.error('PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY is not set or does not match the expected value');
	process.exit(1);
}
if (!PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY || md5(PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY) !== BOSS_WIIU_HMAC_KEY_MD5_HASH) {
	console.error('PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY is not set or does not match the expected value');
	process.exit(1);
}

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const askQuestion = (question) => {
	return new Promise((resolve) => {
		rl.question(question, (answer) => {
			resolve(answer);
		});
	});
};

const rootDir = import.meta.dirname;
const sourceFile = path.join(rootDir, 'VSSetting.byaml');
const checksumFile = path.join(rootDir, 'cdn/VSSetting.byaml.checksum');

const exists = await fs.exists(sourceFile);
if (!exists) {
	console.error('Source VSSetting.byaml file does not exist');
	process.exit(1);
}

const sourceFileContents = await fs.readFile(sourceFile);

const stat = await fs.stat(sourceFile);
if (stat.mtime.toDateString() !== new Date().toDateString()) {
	const answer = await askQuestion(`The source file was not updated today (Updated ${stat.mtime.toDateString()}). Do you want to continue? (y/n) `);
	if (answer.toLowerCase() !== 'y') {
		process.exit(0);
	}
}

const checksumExists = await fs.exists(checksumFile);
const newChecksum = crypto.createHash('sha256').update(sourceFileContents).digest('hex');
console.log(`Checksum for source file is ${newChecksum}`);
if (checksumExists) {
	const checksum = await fs.readFile(checksumFile, 'utf8');

	if (checksum === newChecksum) {
		const answer = await askQuestion('The source file has not changed since the last run. Do you want to continue? (y/n) ');
		if (answer.toLowerCase() !== 'y') {
			process.exit(0);
		}
	}
}

const titles = [
	'bb6tOEckvgZ50ciH',
	'rjVlM7hUXPxmYQJh',
	'zvGSM4kOrXpkKnpT'
];

async function backupFile(filePath) {
	const copyFilePath = path.join(path.dirname(filePath), `${path.basename(filePath)}.bak`);
	const exists = await fs.exists(filePath);
	if (!exists) {
		console.log(`File ${filePath} does not exist, skipping backup...`);
		return;
	}
	await fs.copyFile(filePath, copyFilePath);
	console.log(`Backup created of ${filePath} at ${copyFilePath}`);
}

for (const title of titles) {
	console.log(`\n --- Processing ${title} ---`);
	const decryptedDir = path.join(rootDir, `cdn/content/decrypted/${title}`);
	const encryptedDir = path.join(rootDir, `cdn/content/encrypted/${title}`);
	const taskSheetDir = path.join(rootDir, `cdn/tasksheet/1/${title}`);
	await fs.ensureDir(decryptedDir);
	await fs.ensureDir(encryptedDir);
	await fs.ensureDir(taskSheetDir);

	const decryptedFilePath = path.join(decryptedDir, 'VSSetting.byaml');
	await backupFile(decryptedFilePath);
	await fs.copyFile(sourceFile, decryptedFilePath);

	const encryptedContents = encryptWiiU(decryptedFilePath, PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY, PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY);
	const hash = crypto.createHash('md5').update(encryptedContents).digest('hex');
	console.log(`Hash for title ${title} is ${hash}`);

	const encryptedFilePath = path.join(encryptedDir, hash);
	await fs.writeFile(encryptedFilePath, encryptedContents);
	console.log(`Encrypted file created at ${encryptedFilePath}`);

	const taskSheetFilePath = path.join(taskSheetDir, 'schdat2');
	await backupFile(taskSheetFilePath);

	const tasksheetContents = await fs.readFile(taskSheetFilePath, 'utf8');
	const xmlContents = xml.xml2js(tasksheetContents, { compact: true });

	const dataId = parseInt(xmlContents.TaskSheet.Files.File.DataId._text);
	if (isNaN(dataId)) {
		console.error(`DataId for title ${title} is not a number, skipping...`);
		continue;
	}
	console.log(`DataId for title ${title} is ${dataId}`);
	const newDataId = dataId + 1;
	console.log(`New DataId for title ${title} is ${newDataId}`);

	xmlContents.TaskSheet.Files.File.DataId._text = newDataId.toString();

	const size = encryptedContents.length;
	const oldSize = parseInt(xmlContents.TaskSheet.Files.File.Size._text);
	if (size === oldSize) {
		console.log(`Size for title ${title} is already updated, skipping update...`);
	} else {
		console.log(`Old size for title ${title} is ${oldSize}`);
		console.log(`New size for title ${title} is ${size}`);
		xmlContents.TaskSheet.Files.File.Size._text = size.toString();
	}

	const oldUrl = xmlContents.TaskSheet.Files.File.Url._text;
	const newUrl = `https://npdi.cdn.pretendo.cc/p01/data/1/${title}/${newDataId}/${hash}`;
	console.log(`Old URL for title ${title} is ${oldUrl}`);
	console.log(`New URL for title ${title} is ${newUrl}`);
	xmlContents.TaskSheet.Files.File.Url._text = newUrl;

	const newXmlContents = xml.js2xml(xmlContents, { spaces: 2, compact: true });
	await fs.writeFile(taskSheetFilePath, newXmlContents);
	console.log(`Tasksheet file updated at ${taskSheetFilePath}`);
}

rl.close();

console.log('All tasks completed successfully!');
await fs.writeFile(checksumFile, newChecksum);
