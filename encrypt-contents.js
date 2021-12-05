const BOSS = require('boss-js');
const path = require('path');
const fs = require('fs-extra');
const crypto = require('crypto');
require('dotenv').config();

// PROVIDE THESE KEYS YOURSELF
const { BOSS_AES_KEY, BOSS_HMAC_KEY } = process.env;

const decryptedFilePath = path.normalize(path.resolve(__dirname, process.argv[2]));
const encryptedFolderName = path.basename(path.dirname(decryptedFilePath));
const encryptedFolderPath = path.normalize(path.resolve(decryptedFilePath, '../../../encrypted', encryptedFolderName));

fs.ensureDirSync(encryptedFolderPath);

const encryptedContents = BOSS.encryptWiiU(decryptedFilePath, BOSS_AES_KEY, BOSS_HMAC_KEY);
const hash = crypto.createHash('md5').update(encryptedContents).digest('hex');

const encryptedFilePath = path.normalize(path.resolve(encryptedFolderPath, hash));

fs.writeFileSync(encryptedFilePath, encryptedContents);