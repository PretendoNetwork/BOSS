const fs = require('fs-extra');
const https = require('https');
const axios = require('axios');
const { convert: xmlParser } = require('xmlbuilder2');

const { get } = axios.create({
	httpsAgent: new https.Agent({
		rejectUnauthorized: false
	})
});

const TASKSHEET_BASE = 'https://npts.app.nintendo.net/p01/tasksheet/1';
const TASKSHEET_BASE_NEW = 'https://npts.app.pretendo.cc/p01/tasksheet/1';

const TASKSHEETS = [
	{
		id: '8UsM86l8xgkjFk8z',
		files: ['wood1', 'woodBGM']
	},
	{
		id: 'bb6tOEckvgZ50ciH',
		files: ['optdat2', 'schdat2']
	},
	{
		id: 'bieC9ACJlisFg5xS',
		files: ['solv']
	},
	{
		id: 'IeUc4hQsKKe9rJHB',
		files: ['CHARA']
	},
	{
		id: 'IXmFUqR2qenXfF61',
		files: ['promo1', 'promo2', 'promo3', 'push']
	},
	{
		id: 'LRmanFo4Tx3kEGDp',
		files: ['sysmsg1', 'sysmsg2']
	},
	{
		id: 'rjVlM7hUXPxmYQJh',
		files: ['optdat2', 'schdat2']
	},
	{
		id: 'tOaQcoBLtPTgVN3Y',
		files: ['solv']
	},
	{
		id: 'TZr27FE8wzKiEaTO',
		files: ['sysmsg1', 'sysmsg2']
	},
	{
		id: 'v1cqzWykBKUg0rHQ',
		files: ['solv']
	},
	{
		id: 'vGwChBW1ExOoHDsm',
		files: ['CHARA', 'CHARA/Boss002.pack', 'CHARA/BossStatic002.pack']
	},
	{
		id: 'zvGSM4kOrXpkKnpT',
		files: ['optdat2', 'schdat2']
	},
];

for (const tasksheet of TASKSHEETS) {
	const tasksheetId = tasksheet.id;

	fs.ensureDirSync(`cdn/tasksheet/1/${tasksheetId}`);
	fs.ensureDirSync(`cdn/content/encrypted/${tasksheetId}`);

	for (const tasksheetFileName of tasksheet.files) {
		if (tasksheetFileName.includes('/')) {
			fs.ensureDirSync(`cdn/tasksheet/1/${tasksheetId}/_subfolder`);
		}

		get(`${TASKSHEET_BASE}/${tasksheetId}/${tasksheetFileName}?c=US&l=en`)
			.then(response => {
				const replacedUrls = response.data.replaceAll('nintendo.net', 'pretendo.cc');

				if (tasksheetFileName.includes('/')) {
					fs.writeFileSync(`cdn/tasksheet/1/${tasksheetId}/_subfolder/${tasksheetFileName}`, replacedUrls);
				} else {
					fs.writeFileSync(`cdn/tasksheet/1/${tasksheetId}/${tasksheetFileName}`, replacedUrls);
				}

				const { TaskSheet: xml } = xmlParser(response.data, { format: "object" });
				const files = xml.Files.File || [];

				if (files instanceof Array) {
					for (const contentFile of files) {
						const fileName = contentFile.Url.split('/').pop();

						get(contentFile.Url, {
							responseType: 'arraybuffer',
						}).then(response => {
							fs.writeFileSync(`cdn/content/encrypted/${tasksheetId}/${fileName}`, response.data);
						});
					}
				} else {
					const contentFile = files; // Only one file
					const fileName = contentFile.Url.split('/').pop();

					get(contentFile.Url, {
						responseType: 'arraybuffer',
					}).then(response => {
						fs.writeFileSync(`cdn/content/encrypted/${tasksheetId}/${fileName}`, response.data);
					});
				}
			});
	}
}