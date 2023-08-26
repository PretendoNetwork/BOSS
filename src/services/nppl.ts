import xmlbuilder from 'xmlbuilder';
import moment from 'moment';
import express from 'express';
import subdomain from 'express-subdomain';

const nppl = express.Router();

nppl.get('/p01/policylist/1/1/:region', (_request, response) => {
	// TODO - Make this more dynamic
	response.set('Content-Type', 'application/xml; charset=utf-8');
	response.send(xmlbuilder.create({
		PolicyList: {
			MajorVersion: 1,
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
	}).end({ pretty: true }));
});

const router = express.Router();

router.use(subdomain('nppl.app', nppl));

export default router;