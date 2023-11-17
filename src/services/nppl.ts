import xmlbuilder from 'xmlbuilder';
import moment from 'moment';
import express from 'express';
import subdomain from 'express-subdomain';
import { PolicyList } from '@/types/common/policylist';

const nppl = express.Router();

nppl.get([
	'/p01/policylist/:majorVersion/:countryCode',
	'/p01/policylist/:consoleType/:majorVersion/:countryCode'
], (request, response) => {
	const { majorVersion, countryCode } = request.params;
	const consoleType = request.params.consoleType || '0'; // * Default to the 3DS

	let policylist;

	if (consoleType === '0') {
		policylist = get3DSPolicyList(countryCode, majorVersion);
	} else if (consoleType === '1') {
		policylist = getWiiUPolicyList(countryCode, majorVersion);
	} else {
		response.sendStatus(500);
		return;
	}

	if (!policylist) {
		response.sendStatus(404);
		return;
	}

	// TODO - Make this more dynamic
	response.set('Content-Type', 'application/xml; charset=utf-8');
	response.send(xmlbuilder.create(policylist).end({ pretty: true }));
});

function get3DSPolicyList(countryCode: string, majorVersion: string): { PolicyList: PolicyList } | null {
	if (majorVersion !== '3') {
		return null;
	}

	// TODO - Pull this from the DB and use the country code
	return {
		PolicyList: {
			MajorVersion: Number(majorVersion),
			MinorVersion: 0,
			ListId: 1891,
			DefaultStop: false,
			ForceVersionUp: false,
			UpdateTime: moment().utc().format('YYYY-MM-DDTHH:MM:SS+0000'),
			Priority: [
				{
					TitleId: '0004003000008f02',
					TaskId: 'basho0',
					Level: 'HIGH',
					Persistent: true, // TODO - What's this?
					Revive: true // TODO - What's this?
				},
				{
					TitleId: '000400300000bc00',
					TaskId: 'OlvNotf',
					Level: 'HIGH',
					Persistent: true, // TODO - What's this?
					Revive: true // TODO - What's this?
				},
				{
					TitleId: '000400300000bd00',
					TaskId: 'OlvNotf',
					Level: 'HIGH',
					Persistent: true, // TODO - What's this?
					Revive: true // TODO - What's this?
				},
				{
					TitleId: '000400300000be00',
					TaskId: 'OlvNotf',
					Level: 'HIGH',
					Persistent: true, // TODO - What's this?
					Revive: true // TODO - What's this?
				},
				{
					TitleId: '0004003000008f02',
					TaskId: 'pl',
					Level: 'HIGH',
					Persistent: true, // TODO - What's this?
					Revive: true // TODO - What's this?
				},
				{
					TitleId: '0004013000003400',
					TaskId: 'sprelay',
					Level: 'HIGH',
					Persistent: true, // TODO - What's this?
					Revive: true // TODO - What's this?
				}
			]
		}
	};
}

function getWiiUPolicyList(countryCode: string, majorVersion: string): { PolicyList: PolicyList } | null {
	if (majorVersion !== '1') {
		return null;
	}

	// TODO - Pull this from the DB and use the country code
	return {
		PolicyList: {
			MajorVersion: Number(majorVersion),
			MinorVersion: 0,
			ListId: 1924,
			DefaultStop: false,
			ForceVersionUp: false,
			UpdateTime: moment().utc().format('YYYY-MM-DDTHH:MM:SS+0000'),
			Priority: [
				{
					TitleId: '0005003010016000',
					TaskId: 'olvinfo',
					Level: 'EXPEDITE'
				},
				{
					TitleId: '0005003010016100',
					TaskId: 'olvinfo',
					Level: 'EXPEDITE'
				},
				{
					TitleId: '0005003010016200',
					TaskId: 'olvinfo',
					Level: 'EXPEDITE'
				},
				{
					TitleId: '000500301001600a',
					TaskId: 'olv1',
					Level: 'EXPEDITE'
				},
				{
					TitleId: '000500301001610a',
					TaskId: 'olv1',
					Level: 'EXPEDITE'
				},
				{
					TitleId: '000500301001620a',
					TaskId: 'olv1',
					Level: 'EXPEDITE'
				},
				{
					TitleId: '0005001010040000',
					TaskId: 'oltopic',
					Level: 'EXPEDITE'
				},
				{
					TitleId: '0005001010040100',
					TaskId: 'oltopic',
					Level: 'EXPEDITE'
				},
				{
					TitleId: '0005001010040200',
					TaskId: 'oltopic',
					Level: 'EXPEDITE'
				},
				{
					TitleId: '000500101005a000',
					TaskId: 'Chat',
					Level: 'EXPEDITE'
				},
				{
					TitleId: '000500101005a100',
					TaskId: 'Chat',
					Level: 'EXPEDITE'
				},
				{
					TitleId: '000500101005a200',
					TaskId: 'Chat',
					Level: 'EXPEDITE'
				},
				{
					TitleId: '000500101004c100',
					TaskId: 'plog',
					Level: 'EXPEDITE'
				}
			]
		}
	};
}

const router = express.Router();

router.use(subdomain('nppl.c.app', nppl)); // * 3DS
router.use(subdomain('nppl.app', nppl)); // * WiiU

export default router;