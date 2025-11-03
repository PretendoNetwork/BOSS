import type { ListKnownBOSSAppsResponse } from '@pretendonetwork/grpc/boss/list_known_boss_apps';

export async function listKnownBOSSApps(): Promise<ListKnownBOSSAppsResponse> {
	return {
		apps: [
			{
				bossAppId: 'WJDaV6ePVgrS0TRa',
				titleId: 0x0005003010016000n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['olvinfo']
			},
			{
				bossAppId: 'VFoY6V7u7UUq1EG5',
				titleId: 0x0005003010016100n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['olvinfo']
			},
			{
				bossAppId: '8MNOVprfNVAJjfCM',
				titleId: 0x0005003010016200n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['olvinfo']
			},
			{
				bossAppId: 'v1cqzWykBKUg0rHQ',
				titleId: 0x000500301001900An,
				titleRegion: 'JPN',
				name: 'Miiverse Post All',
				tasks: ['solv']
			},
			{
				bossAppId: 'bieC9ACJlisFg5xS',
				titleId: 0x000500301001910An,
				titleRegion: 'USA',
				name: 'Miiverse Post All',
				tasks: ['solv']
			},
			{
				bossAppId: 'tOaQcoBLtPTgVN3Y',
				titleId: 0x000500301001920An,
				titleRegion: 'EUR',
				name: 'Miiverse Post All',
				tasks: ['solv']
			},
			{
				bossAppId: 'HX8a16MMNn6i1z0Y',
				titleId: 0x000500301001400An,
				titleRegion: 'JPN',
				name: 'Nintendo eShop',
				tasks: ['wood1', 'woodBGM']
			},
			{
				bossAppId: '07E3nY6lAwlwrQRo',
				titleId: 0x000500301001410An,
				titleRegion: 'USA',
				name: 'Nintendo eShop',
				tasks: ['wood1', 'woodBGM']
			},
			{
				bossAppId: '8UsM86l8xgkjFk8z',
				titleId: 0x000500301001420An,
				titleRegion: 'EUR',
				name: 'Nintendo eShop',
				tasks: ['wood1', 'woodBGM']
			},
			{
				bossAppId: 'IXmFUqR2qenXfF61',
				titleId: 0x0005001010066000n,
				titleRegion: 'ALL',
				name: 'ECO Process',
				tasks: ['promo1', 'promo2', 'promo3', 'push']
			},
			{
				bossAppId: 'BMQAm5iUVtPsJVsU',
				titleId: 0x000500101004D000n,
				titleRegion: 'JPN',
				name: 'Notifications',
				tasks: ['sysmsg1', 'sysmsg2']
			},
			{
				bossAppId: 'LRmanFo4Tx3kEGDp',
				titleId: 0x000500101004D100n,
				titleRegion: 'USA',
				name: 'Notifications',
				tasks: ['sysmsg1', 'sysmsg2']
			},
			{
				bossAppId: 'TZr27FE8wzKiEaTO',
				titleId: 0x000500101004D200n,
				titleRegion: 'EUR',
				name: 'Notifications',
				tasks: ['sysmsg1', 'sysmsg2']
			},
			{
				bossAppId: 'JnIrm9c4E9JBmxBo',
				titleId: 0x0005000010185200n,
				titleRegion: 'JPN',
				name: 'NewスーパーマリオブラザーズU 無料お試し版 (New SUPER MARIO BROS. U (Trial))',
				tasks: ['news']
			},
			{
				bossAppId: 'dadlI27Ww8H2d56x',
				titleId: 0x0005000010101C00n,
				titleRegion: 'JPN',
				name: 'NewスーパーマリオブラザーズU (New SUPER MARIO BROS. U)',
				tasks: ['news']
			},
			{
				bossAppId: 'RaPn5saabzliYrpo',
				titleId: 0x0005000010101D00n,
				titleRegion: 'USA',
				name: 'New SUPER MARIO BROS. U',
				tasks: ['news']
			},
			{
				bossAppId: '14VFIK3rY2SP0WRE',
				titleId: 0x0005000010101E00n,
				titleRegion: 'EUR',
				name: 'New SUPER MARIO BROS. U',
				tasks: ['news']
			},
			{
				bossAppId: 'RbEQ44t2AocC4rvu',
				titleId: 0x000500001014B700n,
				titleRegion: 'USA',
				name: 'New SUPER MARIO BROS. U + New SUPER LUIGI U',
				tasks: ['news']
			},
			{
				bossAppId: '287gv3WZdxo1QRhl',
				titleId: 0x000500001014B800n,
				titleRegion: 'EUR',
				name: 'New SUPER MARIO BROS. U + New SUPER LUIGI U',
				tasks: ['news']
			},
			{
				bossAppId: 'bb6tOEckvgZ50ciH',
				titleId: 0x0005000010162B00n,
				titleRegion: 'JPN',
				name: 'スプラトゥーン (Splatoon)',
				tasks: ['optdat2', 'schdat2', 'schdata']
			},
			{
				bossAppId: 'rjVlM7hUXPxmYQJh',
				titleId: 0x0005000010176900n,
				titleRegion: 'USA',
				name: 'Splatoon',
				tasks: ['optdat2', 'schdat2', 'schdata', 'optdata2', 'schdata2']
			},
			{
				bossAppId: 'zvGSM4kOrXpkKnpT',
				titleId: 0x0005000010176A00n,
				titleRegion: 'EUR',
				name: 'Splatoon',
				tasks: ['optdat2', 'schdat2', 'schdata', 'optdata']
			},
			{
				bossAppId: 'm8KJPtmPweiPuETE',
				titleId: 0x000500001012F100n,
				titleRegion: 'JPN',
				name: 'Wii Sports Club',
				tasks: ['sp1_ans']
			},
			{
				bossAppId: 'pO72Hi5uqf5yuNd8',
				titleId: 0x0005000010144D00n,
				titleRegion: 'USA',
				name: 'Wii Sports Club',
				tasks: ['sp1_ans']
			},
			{
				bossAppId: '4m8Xme1wKgzwslTJ',
				titleId: 0x0005000010144E00n,
				titleRegion: 'EUR',
				name: 'Wii Sports Club',
				tasks: ['sp1_ans']
			},
			{
				bossAppId: 'ESLqtAhxS8KQU4eu',
				titleId: 0x000500001018DB00n,
				titleRegion: 'JPN',
				name: 'Super Mario Maker (スーパーマリオメーカー)',
				tasks: ['CHARA']
			},
			{
				bossAppId: 'vGwChBW1ExOoHDsm',
				titleId: 0x000500001018DC00n,
				titleRegion: 'USA',
				name: 'Super Mario Maker',
				tasks: ['CHARA']
			},
			{
				bossAppId: 'IeUc4hQsKKe9rJHB',
				titleId: 0x000500001018DD00n,
				titleRegion: 'EUA',
				name: 'Super Mario Maker',
				tasks: ['CHARA']
			},
			{
				bossAppId: '4krJA4Gx3jF5nhQf',
				titleId: 0x000500001012BC00n,
				titleRegion: 'JPN',
				name: 'ピクミン３ (PIKMIN 3)',
				tasks: ['histgrm']
			},
			{
				bossAppId: '9jRZEoWYLc3OG9a8',
				titleId: 0x000500001012BD00n,
				titleRegion: 'USA',
				name: 'PIKMIN 3',
				tasks: ['histgrm']
			},
			{
				bossAppId: 'VWqUTspR5YtjDjxa',
				titleId: 0x000500001012BE00n,
				titleRegion: 'EUR',
				name: 'PIKMIN 3',
				tasks: ['histgrm']
			},
			{
				bossAppId: 'Ge1KtMu8tYlf4AUM',
				titleId: 0x0005000010192000n,
				titleRegion: 'JPN',
				name: '太鼓の達人 特盛り！ (Taiko no Tatsujin Tokumori!)',
				tasks: ['notice1']
			},
			{
				bossAppId: 'gycVtTzCouZmukZ6',
				titleId: 0x0005000010110E00n,
				titleRegion: 'JPN',
				name: '大乱闘スマッシュブラザーズ for Wii U (Super Smash Bros. for Wii U)',
				tasks: ['NEWS', 'amiibo']
			},
			{
				bossAppId: 'o2Ug1pIp9Uhri6Nh',
				titleId: 0x0005000010144F00n,
				titleRegion: 'USA',
				name: 'Super Smash Bros. for Wii U',
				tasks: ['amiibo', 'NEWS', 'friend', 'CONQ']
			},
			{
				bossAppId: 'n6rAJ1nnfC1Sgcpl',
				titleId: 0x0005000010145000n,
				titleRegion: 'EUR',
				name: 'Super Smash Bros. for Wii U',
				tasks: ['amiibo', 'NEWS', 'friend', 'CONQ']
			},
			{
				bossAppId: 'CHUN6T1m7Xk4EBg4',
				titleId: 0x00050000101DFF00n,
				titleRegion: 'JPN',
				name: 'プチコンBIG (Petitcom BIG)',
				tasks: ['ptcbnws']
			},
			{
				bossAppId: 'zyXdCW9jGdi9rjaz',
				titleId: 0x0005000010142200n,
				titleRegion: 'JPN',
				name: 'NewスーパールイージU (New SUPER LUIGI U)',
				tasks: ['news']
			},
			{
				bossAppId: 'jPHLlJr2fJyTzffp',
				titleId: 0x0005000010142300n,
				titleRegion: 'USA',
				name: 'New SUPER LUIGI U',
				tasks: ['news']
			},
			{
				bossAppId: 'YsXB6IRGSI56tPxl',
				titleId: 0x0005000010142400n,
				titleRegion: 'EUR',
				name: 'New SUPER LUIGI U',
				tasks: ['news']
			},
			{
				bossAppId: 'Lbqp9Sg1i0xUzFFa',
				titleId: 0x0005000010113800n,
				titleRegion: 'EUR',
				name: 'Zen Pinball 2',
				tasks: ['PTS']
			},
			{
				bossAppId: 'DwU7n0FidGrLNiOo',
				titleId: 0x000500001014D900n,
				titleRegion: 'JPN',
				name: 'ぷよぷよテトリス (PUYOPUYOTETRIS)',
				tasks: ['boss1', 'boss2', 'boss3']
			},
			{
				bossAppId: 'yIUkFmuGVkGP8pDb',
				titleId: 0x0005000010132200n,
				titleRegion: 'JPN',
				name: '太鼓の達人 Ｗｉｉ Ｕば～じょん！ (Taiko no Tatsujin Wii U version!)',
				tasks: ['notice1']
			},
			{
				bossAppId: 'v4WRObSzD7VU3dcJ',
				titleId: 0x00050000101D3000n,
				titleRegion: 'JPN',
				name: '太鼓の達人 あつめて★ともだち大作戦！ (Taiko no Tatsujin Atsumete★ TomodachiDaisakusen!)',
				tasks: ['notice1']
			},
			{
				bossAppId: '3zDjXIA57bSceyaw',
				titleId: 0x00050000101BEC00n,
				titleRegion: 'USA',
				name: 'Star Fox Guard',
				tasks: ['param']
			},
			{
				bossAppId: 'NL38jhExI2CQqhWd',
				titleId: 0x00050000101CDB00n,
				titleRegion: 'JPN',
				name: 'Splatoon Pre-Launch Review',
				tasks: ['schdata']
			},
			{
				bossAppId: 'sE6KwEpQYyg6tdU7',
				titleId: 0x00050000101CDC00n,
				titleRegion: 'USA',
				name: 'Splatoon Pre-Launch Review',
				tasks: ['schdata']
			},
			{
				bossAppId: 'pTKZ9q5KrCP3gBag',
				titleId: 0x00050000101CDD00n,
				titleRegion: 'EUR',
				name: 'Splatoon Pre-Launch Review',
				tasks: ['schdata']
			},
			{
				bossAppId: 'CJT88RO008LAnD51',
				titleId: 0x0005000010170600n,
				titleRegion: 'JPN',
				name: '仮面ライダー バトライド・ウォーⅡ プレミアムTV＆MOVIEサウンドED. (KAMEN RIDER BATTRIDE WAR Ⅱ PREMIUM TV&MOVIE SOUND ED.)',
				tasks: ['PE_GAK', 'PE_ZNG']
			},
			{
				bossAppId: 'FyyMFzEByuQJc6sJ',
				titleId: 0x0005000010135200n,
				titleRegion: 'USA',
				name: 'Star Wars Pinball',
				tasks: ['PTS']
			},
			{
				bossAppId: 'A4yyXWKZZUToFtrt',
				titleId: 0x0005000010132A00n,
				titleRegion: 'EUR',
				name: 'Star Wars Pinball',
				tasks: ['PTS']
			},
			{
				bossAppId: 'HauaFQ1sPsnQ6rBj',
				titleId: 0x0005000010171F00n,
				titleRegion: 'USA',
				name: 'Pushmo World',
				tasks: ['annouce']
			},
			{
				bossAppId: 'qDUeFmk0Az71nHyD',
				titleId: 0x0005000010110900n,
				titleRegion: 'JPN',
				name: 'NINJA GAIDEN 3: Razor\'s Edge',
				tasks: ['DLCINFO']
			},
			{
				bossAppId: 'yVsSPM2E0DEOxroT',
				titleId: 0x0005000010110A00n,
				titleRegion: 'USA',
				name: 'NINJA GAIDEN 3: Razor\'s Edge',
				tasks: ['DLCINFO']
			},
			{
				bossAppId: 'Xw6OvZkQofQ3O8Bi',
				titleId: 0x0005000010110B00n,
				titleRegion: 'EUR',
				name: 'Ninja Gaiden 3: Razor\'s Edge',
				tasks: ['DLCINFO']
			},
			{
				bossAppId: 'LUQX5swEjBUPQ8nR',
				titleId: 0x0005000010110200n,
				titleRegion: 'USA',
				name: 'WARRIORS OROCHI 3 Hyper(NA)',
				tasks: ['OR2H000']
			},
			{
				bossAppId: 'y4pXrgLe0JGao3No',
				titleId: 0x0005000010112B00n,
				titleRegion: 'EUR',
				name: 'WARRIORS OROCHI 3 Hyper(EU)',
				tasks: ['OR2H000']
			},
			{
				bossAppId: 'j01mRJ9sNe00MWPC',
				titleId: 0x0005000010170700n,
				titleRegion: 'JPN',
				name: '仮面ライダー バトライド・ウォーⅡ (KAMEN RIDER BATTRIDE WAR Ⅱ)',
				tasks: ['CHR_GAK', 'CHR_ZNG']
			}
		]
	};
}
