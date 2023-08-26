import { ListKnownBOSSAppsResponse } from '@pretendonetwork/grpc/boss/list_known_boss_apps';

export async function listKnownBOSSApps(): Promise<ListKnownBOSSAppsResponse> {
	return {
		apps: [
			{
				bossAppId: 'WJDaV6ePVgrS0TRa',
				titleId: '0005003010016000',
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: [ 'olvinfo' ]
			},
			{
				bossAppId: 'VFoY6V7u7UUq1EG5',
				titleId: '0005003010016100',
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: [ 'olvinfo' ]
			},
			{
				bossAppId: '8MNOVprfNVAJjfCM',
				titleId: '0005003010016200',
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: [ 'olvinfo' ]
			},
			{
				bossAppId: 'v1cqzWykBKUg0rHQ',
				titleId: '000500301001900A',
				titleRegion: 'JPN',
				name: 'Miiverse Post All',
				tasks: [ 'solv' ]
			},
			{
				bossAppId: 'bieC9ACJlisFg5xS',
				titleId: '000500301001910A',
				titleRegion: 'USA',
				name: 'Miiverse Post All',
				tasks: [ 'solv' ]
			},
			{
				bossAppId: 'tOaQcoBLtPTgVN3Y',
				titleId: '000500301001920A',
				titleRegion: 'EUR',
				name: 'Miiverse Post All',
				tasks: [ 'solv' ]
			},
			{
				bossAppId: '07E3nY6lAwlwrQRo',
				titleId: '000500301001410A',
				titleRegion: 'USA',
				name: 'Nintendo eShop',
				tasks: [ 'wood1', 'woodBGM' ]
			},
			{
				bossAppId: '8UsM86l8xgkjFk8z',
				titleId: '000500301001420A',
				titleRegion: 'EUR',
				name: 'Nintendo eShop',
				tasks: [ 'wood1', 'woodBGM' ]
			},
			{
				bossAppId: 'IXmFUqR2qenXfF61',
				titleId: '0005001010066000',
				titleRegion: 'ALL',
				name: 'ECO Process',
				tasks: [ 'promo1', 'promo2', 'promo3', 'push' ]
			},
			{
				bossAppId: 'BMQAm5iUVtPsJVsU',
				titleId: '000500101004D000',
				titleRegion: 'JPN',
				name: 'Notifications',
				tasks: [ 'sysmsg1', 'sysmsg2' ]
			},
			{
				bossAppId: 'LRmanFo4Tx3kEGDp',
				titleId: '000500101004D100',
				titleRegion: 'USA',
				name: 'Notifications',
				tasks: [ 'sysmsg1', 'sysmsg2' ]
			},
			{
				bossAppId: 'TZr27FE8wzKiEaTO',
				titleId: '000500101004D200',
				titleRegion: 'EUR',
				name: 'Notifications',
				tasks: [ 'sysmsg1', 'sysmsg2' ]
			},
			{
				bossAppId: 'RaPn5saabzliYrpo',
				titleId: '0005000010101D00',
				titleRegion: 'USA',
				name: 'New SUPER MARIO BROS. U',
				tasks: [ 'news' ]
			},
			{
				bossAppId: 'bb6tOEckvgZ50ciH',
				titleId: '0005000010162B00',
				titleRegion: 'JPN',
				name: 'スプラトゥーン (Splatoon)',
				tasks: [ 'optdat2', 'schdat2' ]
			},
			{
				bossAppId: 'rjVlM7hUXPxmYQJh',
				titleId: '0005000010176900',
				titleRegion: 'USA',
				name: 'Splatoon',
				tasks: [ 'optdat2', 'schdat2' ]
			},
			{
				bossAppId: 'zvGSM4kOrXpkKnpT',
				titleId: '0005000010176A00',
				titleRegion: 'EUR',
				name: 'Splatoon',
				tasks: [ 'optdat2', 'schdat2' ]
			},
			{
				bossAppId: 'pO72Hi5uqf5yuNd8',
				titleId: '0005000010144D00',
				titleRegion: 'USA',
				name: 'Wii Sports Club',
				tasks: [ 'sp1_ans' ]
			},
			{
				bossAppId: 'vGwChBW1ExOoHDsm',
				titleId: '000500001018DC00',
				titleRegion: 'USA',
				name: 'Super Mario Maker',
				tasks: [ 'CHARA' ]
			},
			{
				bossAppId: 'IeUc4hQsKKe9rJHB',
				titleId: '000500001018DD00',
				titleRegion: 'EUA',
				name: 'Super Mario Maker',
				tasks: [ 'CHARA' ]
			},
			{
				bossAppId: '4krJA4Gx3jF5nhQf',
				titleId: '000500001012BC00',
				titleRegion: 'JPN',
				name: 'ピクミン３ (PIKMIN 3)',
				tasks: [ 'histgrm' ]
			},
			{
				bossAppId: '9jRZEoWYLc3OG9a8',
				titleId: '000500001012BD00',
				titleRegion: 'USA',
				name: 'PIKMIN 3',
				tasks: [ 'histgrm' ]
			},
			{
				bossAppId: 'VWqUTspR5YtjDjxa',
				titleId: '000500001012BE00',
				titleRegion: 'EUR',
				name: 'PIKMIN 3',
				tasks: [ 'histgrm' ]
			}
		]
	};
}