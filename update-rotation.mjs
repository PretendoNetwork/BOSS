/* eslint-disable no-undef -- Tis a script */

import path from 'path';
import crypto from 'crypto';
import readline from 'readline';
import BOSS from 'boss-js';
import fs from 'fs-extra';
import dotenv from 'dotenv';
import xml from 'xml-js';

dotenv.config();

const { PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY, PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY } = process.env;

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

const exists = await fs.exists(sourceFile);
if (!exists) {
	throw new Error('Source VSSetting.byaml file does not exist');
}

const stat = await fs.stat(sourceFile);
if (stat.mtime.toDateString() !== new Date().toDateString()) {
	const answer = await askQuestion(`The source file was not updated today (Updated ${stat.mtime.toDateString()}). Do you want to continue? (y/n) `);
	if (answer.toLowerCase() !== 'y') {
		process.exit(0);
	}
}

const titles = [
	'bb6tOEckvgZ50ciH',
	'rjVlM7hUXPxmYQJh',
	'zvGSM4kOrXpkKnpT'
];

async function backupFile(filePath) {
	const copyFilePath = path.join(path.dirname(filePath), `${path.basename(filePath)}.bak`);
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

	const encryptedContents = BOSS.encryptWiiU(decryptedFilePath, PN_BOSS_CONFIG_BOSS_WIIU_AES_KEY, PN_BOSS_CONFIG_BOSS_WIIU_HMAC_KEY);
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
