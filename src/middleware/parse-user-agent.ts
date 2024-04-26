import express from 'express';
// import RequestException from '@/request-exception';
import type { UserAgentInfo } from '@/types/common/user-agent-info';

const FIRMWARE_PATCH_REGION_WIIU_REGEX = /(\d)([JEU])/;

export default function parseUserAgentMiddleware(request: express.Request, response: express.Response, next: express.NextFunction): void {
	const userAgent = request.header('user-agent');

	if (!userAgent) {
		// TODO - Error when no user agent is given!
		// return next(new RequestException('Missing or invalid user agent', 400));
		return next();
	}

	let result: UserAgentInfo | null = null;

	if (userAgent.startsWith('PBOSU')) {
		result = parseWiiU(userAgent);
	} else if (userAgent.startsWith('PBOS')) {
		result = parse3DS(userAgent);
	}

	if (!result) {
		// TODO - Error when invalid user agent is given!
		// return next(new RequestException('Missing or invalid user agent', 400));
		return next();
	}

	request.pid = result.userPID;

	return next();
}

function parseWiiU(userAgent: string): UserAgentInfo | null {
	const parts = userAgent.split('/');

	if (parts.length !== 3) {
		return null;
	}

	const [bossLibraryInfo, userInfo, firmwareVersion] = parts;
	const [bossLibraryName, bossLibraryVersion] = bossLibraryInfo.split('-');
	const [bossLibraryVersionMajor, bossLibraryVersionMinor] = bossLibraryVersion.split('.');
	const [deviceIDHex, userPIDHex, unknown] = userInfo.split('-');
	const [firmwareMajor, firmwareMinor, firmwarePatchAndRegion] = firmwareVersion.split('.');
	const [, firmwarePatch, firmwareRegion] = FIRMWARE_PATCH_REGION_WIIU_REGEX.exec(firmwarePatchAndRegion) || [];

	if (
		bossLibraryName !== 'PBOSU' ||
		bossLibraryVersionMajor !== '4' ||
		bossLibraryVersionMinor !== '0' ||
		firmwareMajor !== '5' ||
		firmwareMinor !== '5' ||
		firmwarePatch !== '6' ||
		!['J', 'U', 'E'].includes(firmwareRegion) ||
		deviceIDHex.length !== 8 ||
		userPIDHex.length !== 8 ||
		unknown.length !== 16
	) {
		return null;
	}

	let deviceID: number;
	let userPID: number;

	try {
		deviceID = parseInt(deviceIDHex, 16);
	} catch {
		return null;
	}

	try {
		userPID = parseInt(userPIDHex, 16);
	} catch {
		return null;
	}

	return {
		deviceID,
		userPID
	};
}

function parse3DS(userAgent: string): UserAgentInfo | null {
	const parts = userAgent.split('/');

	if (parts.length !== 5) {
		return null;
	}

	const [bossLibraryInfo, userInfo, firmwareVersion, ctrSdkVersion, consoleModel] = parts;
	const [bossLibraryName, bossLibraryVersion] = bossLibraryInfo.split('-');
	const [bossLibraryVersionMajor, bossLibraryVersionMinor] = bossLibraryVersion.split('.');
	const [localFriendCodeSeedHex, friendCodeHex] = userInfo.split('-');
	const [firmwareMajor, firmwareMinor, firmwarePatchAndRegion] = firmwareVersion.split('.');

	if (
		bossLibraryName !== 'PBOS' ||
		bossLibraryVersionMajor !== '8' ||
		bossLibraryVersionMinor !== '0' ||
		firmwareMajor !== '11' ||
		firmwareMinor !== '17' ||
		!['0-50J', '0-50U', '0-50E'].includes(firmwarePatchAndRegion) || // TODO - Make this more dynamic?
		ctrSdkVersion !== '62452' ||
		!consoleModel || // TODO - Actually check this
		localFriendCodeSeedHex.length !== 16 ||
		friendCodeHex.length !== 16
	) {
		return null;
	}

	let localFriendCodeSeed: bigint;
	let friendCode: bigint;

	try {
		localFriendCodeSeed = BigInt('0x' + localFriendCodeSeedHex); // * Parse hex string to bigint
	} catch {
		return null;
	}

	// TODO - Validate the friend code
	try {
		friendCode = BigInt('0x' + friendCodeHex); // * Parse hex string to bigint
	} catch {
		return null;
	}

	const userPID = Number(friendCode & 0xFFFFFFFFn); // * PID is the lower 4 bytes

	return {
		localFriendCodeSeed,
		userPID
	};
}
