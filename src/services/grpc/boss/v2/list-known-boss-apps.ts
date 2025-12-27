import type { ListKnownBOSSAppsResponse } from '@pretendonetwork/grpc/boss/v2/list_known_boss_apps';

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
				tasks: ['olvinfo', 'oltopic']
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
				tasks: ['news', 'plyrepo']
			},
			{
				bossAppId: 'RaPn5saabzliYrpo',
				titleId: 0x0005000010101D00n,
				titleRegion: 'USA',
				name: 'New SUPER MARIO BROS. U',
				tasks: ['news', 'plyrepo']
			},
			{
				bossAppId: '14VFIK3rY2SP0WRE',
				titleId: 0x0005000010101E00n,
				titleRegion: 'EUR',
				name: 'New SUPER MARIO BROS. U',
				tasks: ['news', 'plyrepo']
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
				tasks: ['optdat2', 'schdat2', 'schdata', 'optdata']
			},
			{
				bossAppId: 'rjVlM7hUXPxmYQJh',
				titleId: 0x0005000010176900n,
				titleRegion: 'USA',
				name: 'Splatoon',
				tasks: ['optdat2', 'schdat2', 'schdata', 'optdata2', 'schdata2', 'test', 'preport', 'otpdata2', 'scddata2', 'otpdat2', 'optdata']
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
				tasks: ['sp1_ans', 'sp1_rnk', 'sp1_evt']
			},
			{
				bossAppId: 'pO72Hi5uqf5yuNd8',
				titleId: 0x0005000010144D00n,
				titleRegion: 'USA',
				name: 'Wii Sports Club',
				tasks: ['sp1_ans', 'sp1_rnk', 'sp1_evt']
			},
			{
				bossAppId: '4m8Xme1wKgzwslTJ',
				titleId: 0x0005000010144E00n,
				titleRegion: 'EUR',
				name: 'Wii Sports Club',
				tasks: ['sp1_ans', 'sp1_rnk', 'sp1_evt']
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
				titleRegion: 'EUR',
				name: 'Super Mario Maker',
				tasks: ['CHARA']
			},
			{
				bossAppId: '4krJA4Gx3jF5nhQf',
				titleId: 0x000500001012BE00n,
				titleRegion: 'EUR',
				name: 'PIKMIN 3',
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
				titleId: 0x000500001012BC00n,
				titleRegion: 'JPN',
				name: 'ピクミン３ (PIKMIN 3)',
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
				tasks: ['NEWS', 'amiibo', 'friend', 'CONQ']
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
				tasks: ['schdata', 'optdata']
			},
			{
				bossAppId: 'sE6KwEpQYyg6tdU7',
				titleId: 0x00050000101CDC00n,
				titleRegion: 'USA',
				name: 'Splatoon Pre-Launch Review',
				tasks: ['schdata', 'optdata']
			},
			{
				bossAppId: 'pTKZ9q5KrCP3gBag',
				titleId: 0x00050000101CDD00n,
				titleRegion: 'EUR',
				name: 'Splatoon Pre-Launch Review',
				tasks: ['schdata', 'optdata']
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
				name: 'NINJA GAIDEN 3: Razor\'s Edge',
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
			},
			{
				bossAppId: 'P45xuCJjERf6MNWG',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['movie']
			},
			{
				bossAppId: 'PQWAfUmDpVo0u9Fi',
				titleId: 0x0005000010111C00n,
				titleRegion: 'JPN',
				name: 'Romance of the Three Kingdoms 12',
				tasks: ['Card']
			},
			{
				bossAppId: 'EA9wpEnmZmeX70YS',
				titleId: 0x0005000010192200n,
				titleRegion: 'JPN',
				name: 'KAMEN RIDER SUMMON RIDE!',
				tasks: ['ADDCHR0']
			},
			{
				bossAppId: 'Iq5CNAngvR9auXFO',
				titleId: 0x00050000101BED00n,
				titleRegion: 'EUR',
				name: 'Star Fox Guard',
				tasks: ['param']
			},
			{
				bossAppId: 'ZtwtVqJkmGE2LloD',
				titleId: 0x0005000010115F00n,
				titleRegion: 'USA',
				name: 'Zen Pinball 2',
				tasks: ['PTS']
			},
			{
				bossAppId: 'eAzIbHvwKNHwz85M',
				titleId: 0x0005000010116400n,
				titleRegion: 'JPN',
				name: 'niconico',
				tasks: ['news']
			},
			{
				bossAppId: 'z4d72slRF5GX0cEr',
				titleId: 0x0005000010172000n,
				titleRegion: 'EUR',
				name: 'Pullblox World',
				tasks: ['annouce']
			},
			{
				bossAppId: '5iKeqk6fQq3wwfgy',
				titleId: 0x000500001010EA00n,
				titleRegion: 'JPN',
				name: 'WARRIORS OROCHI 3 Hyper(JP)',
				tasks: ['OR2H000']
			},
			{
				bossAppId: 'rvI5oS5jSZ0aLpeo',
				titleId: 0x0005000011000000n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['demo1']
			},
			{
				bossAppId: 'R5WU9gZtFShZlf6j',
				titleId: 0x000500001010ED00n,
				titleRegion: 'EUR',
				name: 'MARIO KART 8',
				tasks: ['movie', 'Histo']
			},
			{
				bossAppId: '78QqMzbyBbwEpzVg',
				titleId: 0x0005000010111700n,
				titleRegion: 'USA',
				name: 'Injustice: Gods Among Us',
				tasks: ['Tvars']
			},
			{
				bossAppId: 'I8IZTXQyDnUnFo77',
				titleId: 0x0005000010111A00n,
				titleRegion: 'EUR',
				name: 'Injustice: Gods Among Us',
				tasks: ['Tvars']
			},
			{
				bossAppId: 'XcawL2u1CU624gg3',
				titleId: 0x0005000010185300n,
				titleRegion: 'JPN',
				name: 'PIKMIN 3 (Trial)',
				tasks: ['histgrm']
			},
			{
				bossAppId: 'uNRNThGetHLXasV9',
				titleId: 0x00050000101BEB00n,
				titleRegion: 'JPN',
				name: 'Star Fox Guard',
				tasks: ['param']
			},
			{
				bossAppId: 'MBOU6MNVQRdTT1QA',
				titleId: 0x00050000101DCC00n,
				titleRegion: 'JPN',
				name: 'Star Fox Guard Special Demo',
				tasks: ['param']
			},
			{
				bossAppId: 'zBlJpj2pXcFeJYJI',
				titleId: 0x00050000101DCE00n,
				titleRegion: 'EUR',
				name: 'Star Fox Guard: Special Demo Version',
				tasks: ['param']
			},
			{
				bossAppId: 'dHWbU7brnq9QKaKA',
				titleId: 0x00050000101DCD00n,
				titleRegion: 'USA',
				name: 'Star Fox Guard Special Demo',
				tasks: ['param']
			},
			{
				bossAppId: 'gjYbE1NbQerS5v6n',
				titleId: 0x0005000010149000n,
				titleRegion: 'JPN',
				name: 'Romance of the Three Kingdoms 12 with Powerup kit',
				tasks: ['Card']
			},
			{
				bossAppId: '07SSacDlEHc8z0jg',
				titleId: 0x0004000000155000n,
				titleRegion: 'JPN',
				name: 'ディズニー　マジックキャッスル マイ・ハッピー・ライフ２',
				tasks: ['FGONLYT', 'MC2NWS']
			},
			{
				bossAppId: '0hFlOFo7pNTU2dyE',
				titleId: 0x00040000001A2D00n,
				titleRegion: 'USA',
				name: 'Swapdoodle',
				tasks: ['RNG_EC1', 'RNG_LS1', 'RNG_MD1', 'RNG_NT1', 'RNG_NT2', 'RNG_GM1', 'RNG_AP1', 'RNG_DFR', 'RNG_U01', 'RNG_U02', 'RNG_U03', 'RNG_U04', 'RNG_U05', 'RNG_U06', 'RNG_U07', 'RNG_UUS']
			},
			{
				bossAppId: '10Og6tqFdXrW1Dra',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: '18ZHPbhuhUMZmLMS',
				titleId: 0x00040000001D6C00n,
				titleRegion: 'UNK',
				name: 'Yo-kai Watch 3',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: '1dNhxKHa1kgzz0gj',
				titleId: 0x0004000000174E00n,
				titleRegion: 'JPN',
				name: 'MEDAROT9 KABUTO Ver.',
				tasks: ['MEDA9']
			},
			{
				bossAppId: '2eMXT6CAAcQIYWuN',
				titleId: 0x000400000016C700n,
				titleRegion: 'JPN',
				name: 'Yokai Watch Busters Akaneko Dan',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: '2s640xAtrZGOWdq0',
				titleId: 0x0004000000051700n,
				titleRegion: 'USA',
				name: 'Swapnote',
				tasks: ['JFR_LS2', 'JFR_NT2', 'JFR_NT1', 'JFR_NT3', 'JFR_AP2', 'JFR_GM2', 'JFR_DNT', 'JFR_DLS', 'JFR_DAP', 'JFR_DGM', 'JFR_DFR', 'JFR_U01', 'JFR_U02', 'JFR_U03', 'JFR_U04', 'JFR_U05', 'JFR_U06', 'JFR_U07', 'JFR_U08', 'JFR_U09', 'JFR_U10']
			},
			{
				bossAppId: '2zDwgq1t61PlMaPq',
				titleId: 0x000400000012DE00n,
				titleRegion: 'UNK',
				name: 'ファイアーエムブレム if',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: '3ddVFPLZpzu77yvS',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['daily']
			},
			{
				bossAppId: '3EHaOtNKDsD3Ybk8',
				titleId: 0x000400000016C600n,
				titleRegion: 'JPN',
				name: 'Yokai Watch Busters Shiroinu Tai',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: '3isXVXrb2lLqmrW0',
				titleId: 0x00040000000CB900n,
				titleRegion: 'USA',
				name: 'Nintendo 3DS Guide: Louvre (English Version)',
				tasks: ['AL8_001']
			},
			{
				bossAppId: '3t2IUj3ASUzKKEHK',
				titleId: 0x00040000001B4100n,
				titleRegion: 'EUR',
				name: 'Fire Emblem Echoes: Shadows of Valentia',
				tasks: ['TASK00', 'TASK01']
			},
			{
				bossAppId: '3vveLadT8H6xKkQH',
				titleId: 0x00040000001A2E00n,
				titleRegion: 'EUR',
				name: 'Swapdoodle',
				tasks: ['RNG_EC1', 'RNG_LS1', 'RNG_MD1', 'RNG_NT1', 'RNG_NT2', 'RNG_GM1', 'RNG_AP1', 'RNG_DFR', 'RNG_U01', 'RNG_U02', 'RNG_U03', 'RNG_U04', 'RNG_U05', 'RNG_U06', 'RNG_U07', 'RNG_UUS']
			},
			{
				bossAppId: '4LvdQ9tJBCOyHrv4',
				titleId: 0x0004000000030700n,
				titleRegion: 'EUR',
				name: 'MARIO KART 7',
				tasks: ['comm', 'ghost', 'ranking']
			},
			{
				bossAppId: '4OBVxt1uzhPW4cGR',
				titleId: 0x0004000000118100n,
				titleRegion: 'JPN',
				name: 'DETECTIVE CONAN PHANTOM RHAPSODY',
				tasks: ['BKRJ-00', 'BKRJ', 'FGONLYT']
			},
			{
				bossAppId: '53R1vYbkfqXlqzns',
				titleId: 0x0004000000030600n,
				titleRegion: 'JPN',
				name: 'マリオカート７',
				tasks: ['comm', 'ghost', 'ranking']
			},
			{
				bossAppId: '5xq3tXtlGqUd7MbV',
				titleId: 0x00040000000EDF00n,
				titleRegion: 'USA',
				name: 'Super Smash Bros. for Nintendo 3DS',
				tasks: ['NEWS', 'amiibo', 'FGONLYT']
			},
			{
				bossAppId: '5yLkA3wqcXruNE2N',
				titleId: 0x000400000008C300n,
				titleRegion: 'USA',
				name: 'Tomodachi Life',
				tasks: ['tmTaskA', 'tmTaskD']
			},
			{
				bossAppId: '6jk78e80CzvtPvim',
				titleId: 0x0004000000095000n,
				titleRegion: 'JPN',
				name: 'Pokemon Mystery Dungeon Magna gate and infinity labyrinth',
				tasks: ['PAINF00']
			},
			{
				bossAppId: '6SKM87Ll80ONzAvQ',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: '7EnMOQ6WfZSmvQgu',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: '7knOkHlr5db97LJ6',
				titleId: 0x00040000001B4000n,
				titleRegion: 'USA',
				name: 'Fire Emblem Echoes: Shadows of Valentia',
				tasks: ['TASK00', 'TASK01']
			},
			{
				bossAppId: '7NdLNTN4iH9wEbJQ',
				titleId: 0x00040000000D0900n,
				titleRegion: 'EUR',
				name: 'Pokémon Art Academy',
				tasks: ['FGONLYT', 'pnote']
			},
			{
				bossAppId: '7vzbLQCS84rtXY0y',
				titleId: 0x0004000000140000n,
				titleRegion: 'JPN',
				name: 'シアトリズム ドラゴンクエスト',
				tasks: ['FGONLYT', 'TDQ01']
			},
			{
				bossAppId: '8DeC0vBA5VDzPu8x',
				titleId: 0x00040000000A7700n,
				titleRegion: 'JPN',
				name: 'AKB48+Me',
				tasks: ['AKBadd']
			},
			{
				bossAppId: '8DViaPfyfH1pGO91',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: '8mX4hRmZqkDHn0SE',
				titleId: 0x000400000010BB00n,
				titleRegion: 'JPN',
				name: 'イナズマイレブンGO ギャラクシー スーパーノヴァ',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: '9x4m4dJwyBBlUc3g',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'demotask', 'flist', 'test']
			},
			{
				bossAppId: 'ac2P6aIvORxnQJwK',
				titleId: 0x0004000000147100n,
				titleRegion: 'USA',
				name: 'Little Battlers eXperience',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'adQnSUvJlXp5igaT',
				titleId: 0x00040000001D6A00n,
				titleRegion: 'UNK',
				name: 'Yo-kai Watch 3',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'aFMv95FiWHC3k7XV',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'AWKlN4KN0rMA7Gqc',
				titleId: 0x0004000000113400n,
				titleRegion: 'JPN',
				name: 'MEDAROT8 KUWAGATA Ver.1.1',
				tasks: ['MEDA8']
			},
			{
				bossAppId: 'AZcAJ2Stxa9P8h7a',
				titleId: 0x0004000000072A00n,
				titleRegion: 'JPN',
				name: 'Dynasty Warriors VS',
				tasks: ['SMVS_EC', 'SMVS_SC', 'SMVS_PR']
			},
			{
				bossAppId: 'B6Iqt2r0EGU549NW',
				titleId: 0x0004000000030800n,
				titleRegion: 'USA',
				name: 'MARIO KART 7',
				tasks: ['comm', 'ghost', 'ranking']
			},
			{
				bossAppId: 'b8RPtQj41Mw5HjoX',
				titleId: 0x00040000001D6700n,
				titleRegion: 'USA',
				name: 'Yo-kai Watch 3',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'bGoDxPNf97rXq9a5',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['present', 'patch']
			},
			{
				bossAppId: 'BgyAdVTkMfLTzM0k',
				titleId: 0x0004000000167600n,
				titleRegion: 'KOR',
				name: 'YO-KAI WATCH',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'bOMC45IF1taPnYx8',
				titleId: 0x0004000000168C00n,
				titleRegion: 'UNK',
				name: 'Little Battlers eXperience',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'ciTu5gGHcW767kOc',
				titleId: 0x0004000000101300n,
				titleRegion: 'JPN',
				name: 'ヒーローバンク',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'cPYaUEX74KmPR0wF',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['present', 'patch']
			},
			{
				bossAppId: 'CtfKXACbUPl8s7lk',
				titleId: 0x0004001000021900n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['BGM1', 'BGM2', 'TIGER1']
			},
			{
				bossAppId: 'cXo6TOh0AtrCzaCP',
				titleId: 0x0004000000051800n,
				titleRegion: 'EUR',
				name: 'Nintendo Letter Box',
				tasks: ['JFR_LS2', 'JFR_AP2', 'JFR_NT1', 'JFR_NT2', 'JFR_NT3', 'JFR_DLS', 'JFR_DNT', 'JFR_DAP', 'JFR_DGM', 'JFR_GM2', 'JFR_DFR', 'JFR_U01', 'JFR_U02', 'JFR_U03', 'JFR_U04', 'JFR_U05', 'JFR_U06', 'JFR_U07', 'JFR_U08', 'JFR_U09', 'JFR_U10']
			},
			{
				bossAppId: 'd4495LzgtcxUObka',
				titleId: 0x0004000000065A00n,
				titleRegion: 'JPN',
				name: 'MEDAROT7 KUWAGATA Ver.1.1',
				tasks: ['MEDA7']
			},
			{
				bossAppId: 'DJBXc6TzoubPYfy6',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['weekly']
			},
			{
				bossAppId: 'dpwg7hD86KlFwcbk',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['daily']
			},
			{
				bossAppId: 'DUE2YwOq2m9fVsdZ',
				titleId: 0x000400000012A800n,
				titleRegion: 'JPN',
				name: 'hoppechan minnadeodekake! wakuwaku hoppeland!!Ver.1.2',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'DwQNLZT8QlZIxyAJ',
				titleId: 0x0004000000107C00n,
				titleRegion: 'USA',
				name: 'Chibi-Robo! Photo Finder',
				tasks: ['mesdat', 'dat']
			},
			{
				bossAppId: 'e4rcoYW9QTHc2whz',
				titleId: 0x0004000000155100n,
				titleRegion: 'JPN',
				name: 'Yokai Watch 2 shinuchi',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'E5myNZzoWVHdNUvY',
				titleId: 0x0004000000113300n,
				titleRegion: 'JPN',
				name: 'MEDAROT8 KABUTO Ver.1.1',
				tasks: ['MEDA8']
			},
			{
				bossAppId: 'eH6oowgSM7n662mw',
				titleId: 0x000400000008C400n,
				titleRegion: 'EUR',
				name: 'Tomodachi Life',
				tasks: ['tmTaskA', 'tmTaskD', 'tmTaskU']
			},
			{
				bossAppId: 'f5xYhmZvwKo4uv5A',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['data', 'news']
			},
			{
				bossAppId: 'fbAzg6nuN4hhQ3pJ',
				titleId: 0x00040000001B2900n,
				titleRegion: 'EUR',
				name: 'YO-KAI WATCH 2: PSYCHIC SPECTERS',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'fFV9HxPJR7NJRTre',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'FNY6HPPbPj2jIErD',
				titleId: 0x0004000000072400n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['Amb_eu', 'Amb']
			},
			{
				bossAppId: 'fQZi0N3YlWWq07AZ',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['item']
			},
			{
				bossAppId: 'fsYqLFLQngg32A1l',
				titleId: 0x00040000000D5600n,
				titleRegion: 'USA',
				name: 'Nintendo 3DS Guide: Louvre (Version française)',
				tasks: ['AL8_001']
			},
			{
				bossAppId: 'G06t7Q3mkOy95nBw',
				titleId: 0x00040000001CEB00n,
				titleRegion: 'USA',
				name: 'YO-KAI WATCH BLASTERS RED CAT CORPS',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'G4uDyFA9Yc06kV8m',
				titleId: 0x00040000000B6E00n,
				titleRegion: 'USA',
				name: 'Crashmo',
				tasks: ['JAU']
			},
			{
				bossAppId: 'g6DKUfhQUHKd5gZz',
				titleId: 0x00040000001CA800n,
				titleRegion: 'EUR',
				name: 'LAYTON\'S MYSTERY JOURNEY™ Katrielle and the Millionaires\'...',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'GjTM1Bphz05wTMtO',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['daily']
			},
			{
				bossAppId: 'gOlIVAcjDpj6K1Ut',
				titleId: 0x0004000000166A00n,
				titleRegion: 'JPN',
				name: 'Phoenix Wright: Ace Attorney Spirit of Justice',
				tasks: ['GS6']
			},
			{
				bossAppId: 'GQkLSOsKwIpvr8Yi',
				titleId: 0x000400000007AE00n,
				titleRegion: 'USA',
				name: 'New Super Mario Bros. 2',
				tasks: ['present', 'patch']
			},
			{
				bossAppId: 'GQqblssCbq6PuCyJ',
				titleId: 0x0004000000174F00n,
				titleRegion: 'JPN',
				name: 'MEDAROT9 KUWAGATA Ver.',
				tasks: ['MEDA9']
			},
			{
				bossAppId: 'guBwm9TlQvYvncKn',
				titleId: 0x000400000011C500n,
				titleRegion: 'JPN',
				name: 'Pokémon Alpha Sapphire',
				tasks: ['horogra', 'FGONLYT']
			},
			{
				bossAppId: 'GxCs83sbgwaoL2js',
				titleId: 0x00040000001AE600n,
				titleRegion: 'JPN',
				name: '100％ PASUKARU SENSEI Perfect Paint Bombers',
				tasks: ['FGONLYT', 'POSTING']
			},
			{
				bossAppId: 'H9GUJGE1xWr9VrgG',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['present', 'patch']
			},
			{
				bossAppId: 'hA0Mq0T7KQofzsFF',
				titleId: 0x00040000000CBA00n,
				titleRegion: 'KOR',
				name: 'Nintendo 3DS Guide: Louvre',
				tasks: ['AL8_001']
			},
			{
				bossAppId: 'i9omdntnCo1GPdHA',
				titleId: 0x00040000001CB400n,
				titleRegion: 'UNK',
				name: 'LAYTON\'S MYSTERY JOURNEY™ Katrielle and the Millionaires\'...',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'iolEjnbGp2W1ghtO',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'iYhju0xUdEBftgzw',
				titleId: 0x0004000000167700n,
				titleRegion: 'USA',
				name: 'YO-KAI WATCH',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'j0ITmVqVgfUxe0O9',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['data', 'FGONLYT', 'news']
			},
			{
				bossAppId: 'J3u1c5M8Ff9Y9TyG',
				titleId: 0x00040000000F0500n,
				titleRegion: 'UNK',
				name: '大合奏！バンドブラザーズＰ しもべツール',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'j5cz6H9mjSt8wvLX',
				titleId: 0x0004000000086300n,
				titleRegion: 'UNK',
				name: 'Animal Crossing New Leaf',
				tasks: ['FGONLYT', 'dlvexb', 'news', 'news_p', 'pnews', 'dream', 'dream_p']
			},
			{
				bossAppId: 'J6la9Kj8iqTvAPOq',
				titleId: 0x0004000000153600n,
				titleRegion: 'EUR',
				name: 'Nintendo Badge Arcade Ver.1.3.1',
				tasks: ['data', 'FGONLYT', 'news']
			},
			{
				bossAppId: 'j9wEm4RKrgNuaudD',
				titleId: 0x0004000000176E00n,
				titleRegion: 'JPN',
				name: 'The Legend of Zelda Tri Force Heroes',
				tasks: ['Info_00', 'Data', 'Data_00', 'Data_01']
			},
			{
				bossAppId: 'JfttU8Wg1iBIbbIs',
				titleId: 0x0004000000053700n,
				titleRegion: 'JPN',
				name: 'エクストルーパーズ',
				tasks: ['EXT0100']
			},
			{
				bossAppId: 'JIguVGEJJOhAq2te',
				titleId: 0x00040000001A2B00n,
				titleRegion: 'JPN',
				name: 'Fire Emblem Echoes: Shadows of Valentia',
				tasks: ['TASK00', 'FGONLYT', 'TASK01']
			},
			{
				bossAppId: 'JqhCCnj1t7Zid1SG',
				titleId: 0x000400000010BA00n,
				titleRegion: 'JPN',
				name: 'イナズマイレブンGO ギャラクシー ビッグバン',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'jy95T3iOBKyGbAXl',
				titleId: 0x00040000000CF900n,
				titleRegion: 'JPN',
				name: 'Pokémon Art Academy',
				tasks: ['FGONLYT', 'pnote']
			},
			{
				bossAppId: 'kb6KM6y6fQx3bOWs',
				titleId: 0x00040000000D0A00n,
				titleRegion: 'USA',
				name: 'Pokémon Art Academy',
				tasks: ['FGONLYT', 'pnote']
			},
			{
				bossAppId: 'kQGzeGpga1cXwbtf',
				titleId: 0x0004000000065B00n,
				titleRegion: 'JPN',
				name: 'MEDAROT7 KABUTO Ver.1.1',
				tasks: ['MEDA7']
			},
			{
				bossAppId: 'kSz44ZF73HpIb4O7',
				titleId: 0x000400000008B400n,
				titleRegion: 'TWN',
				name: 'MARIO KART 7',
				tasks: ['comm', 'ghost', 'ranking']
			},
			{
				bossAppId: 'kTnNBa7mg66E11iV',
				titleId: 0x0004000000030A00n,
				titleRegion: 'KOR',
				name: 'MARIO KART 7',
				tasks: ['ghost', 'ranking', 'comm']
			},
			{
				bossAppId: 'L1P2RB6s878vioGs',
				titleId: 0x0004000000030100n,
				titleRegion: 'USA',
				name: 'Kid Icarus: Uprising',
				tasks: ['SEED']
			},
			{
				bossAppId: 'lg9TdjOIyCO7aUR4',
				titleId: 0x00040000000CF400n,
				titleRegion: 'JPN',
				name: 'Yokai Watch',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'lhz3HfuATBPF4EdY',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['ESE_CNF', 'ESE_NWS']
			},
			{
				bossAppId: 'Lju5rPwt0QgXXh7Q',
				titleId: 0x00040000000CB700n,
				titleRegion: 'JPN',
				name: 'Nintendo 3DS Guide: Louvre',
				tasks: ['AL8_001']
			},
			{
				bossAppId: 'llh2zGNci2sULyVX',
				titleId: 0x00040000000DCA00n,
				titleRegion: 'JPN',
				name: 'ダンボール戦機W 超カスタム',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'Lw62Mz00pmT1osSJ',
				titleId: 0x00040000000C3C00n,
				titleRegion: 'JPN',
				name: 'Rodea the Sky Soldier',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'lX2cH6BQVJFyjCfN',
				titleId: 0x00040000001D6B00n,
				titleRegion: 'UNK',
				name: 'Yo-kai Watch 3',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'Lx3bOup9RTIcePKE',
				titleId: 0x00040000000FD500n,
				titleRegion: 'USA',
				name: 'THEATRHYTHM FINAL FANTASY CURTAIN CALL',
				tasks: ['DUOINFO']
			},
			{
				bossAppId: 'M0EKKJWDaHUDcmRr',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'M7HNbBKOBj4NTTor',
				titleId: 0x0004000000124A00n,
				titleRegion: 'JPN',
				name: 'リアル脱出ゲームxニンテンドー3DS 超破壊計画からの脱出',
				tasks: ['FGONLYT', 'info']
			},
			{
				bossAppId: 'mb2iVt7j6Wy6yxkb',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['daily']
			},
			{
				bossAppId: 'MEXh2UqOKVgJS3h3',
				titleId: 0x0004000000169D00n,
				titleRegion: 'JPN',
				name: 'アイカツ！ My No.1 Stage!',
				tasks: ['AKT410a']
			},
			{
				bossAppId: 'MqPfuz5l3ptcMj23',
				titleId: 0x00040000000D5700n,
				titleRegion: 'EUR',
				name: 'Nintendo 3DS Guide: Louvre (Deutsche Version)',
				tasks: ['AL8_001']
			},
			{
				bossAppId: 'n1cddgQeTxunOG2K',
				titleId: 0x00040000001B4F00n,
				titleRegion: 'EUR',
				name: 'Miitopia',
				tasks: ['Enquete', 'MiiDL']
			},
			{
				bossAppId: 'NSWeucPFtbNNCx07',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['data', 'news']
			},
			{
				bossAppId: 'NU0xisOCz9UY0IBu',
				titleId: 0x0004000000197200n,
				titleRegion: 'JPN',
				name: 'アイカツスターズ！ Ｍｙスペシャルアピール',
				tasks: ['AKT5PKG']
			},
			{
				bossAppId: 'NXIWsA2Gm4EH219s',
				titleId: 0x0004000000183100n,
				titleRegion: 'KOR',
				name: 'Rodea the Sky Soldier',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'OFypMD7hNCrRPthA',
				titleId: 0x0004000000179400n,
				titleRegion: 'USA',
				name: 'Fire Emblem Fates Birthright',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: 'oGD8mLvDr8YY1L9E',
				titleId: 0x00040000001C7900n,
				titleRegion: 'UNK',
				name: 'LAYTON\'S MYSTERY JOURNEY™ Katrielle and the Millionaires\'...',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'OkqvIoTur40udixa',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'Omwq2nEEfqZ9yo9S',
				titleId: 0x00040000001CEC00n,
				titleRegion: 'EUR',
				name: 'YO-KAI WATCH BLASTERS RED CAT CORPS',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'oPuD6PkiPpx1EFiy',
				titleId: 0x00040000001C1800n,
				titleRegion: 'JPN',
				name: 'The SNACK WORLD TREJARERS',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'oUF988iLJo3cWLji',
				titleId: 0x00040000001D6900n,
				titleRegion: 'UNK',
				name: 'Yo-kai Watch 3',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'OvbmGLZ9senvgV3K',
				titleId: 0x0004000000153500n,
				titleRegion: 'USA',
				name: 'Nintendo Badge Arcade Ver.1.3.1',
				tasks: ['data', 'FGONLYT', 'news']
			},
			{
				bossAppId: 'p1of6zTyKCnqOITZ',
				titleId: 0x000400000009F100n,
				titleRegion: 'EUR',
				name: 'Fire Emblem: Awakening',
				tasks: ['Quartz0', 'Quartz1']
			},
			{
				bossAppId: 'p47ZQwc3R4qAmAYD',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['allhp', 'FGONLYT']
			},
			{
				bossAppId: 'p5HtkudRvY55R212',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'PKeGb0m4S3Gv5jis',
				titleId: 0x0004000000188E00n,
				titleRegion: 'KOR',
				name: 'Fire Emblem Fates',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: 'PpjtFCm4bQskyBUy',
				titleId: 0x00040000000BA900n,
				titleRegion: 'EUR',
				name: 'Pokémon Mystery Dungeon Gates to Infinity',
				tasks: ['PAINF00']
			},
			{
				bossAppId: 'PV3ljR2w0UwrQfWk',
				titleId: 0x00040000001B2800n,
				titleRegion: 'UNK',
				name: 'YO-KAI WATCH 2: PSYCHIC SPECTERS',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'PzpV1tz303wO66AD',
				titleId: 0x00040000001CEF00n,
				titleRegion: 'USA',
				name: 'YO-KAI WATCH BLASTERS WHITE DOG SQUAD',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'pZWhL0tyf4FMCt8r',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'qAM6zmNEtT45AgUa',
				titleId: 0x0004000000072300n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['Amb_jp', 'Amb']
			},
			{
				bossAppId: 'qCcCCCLDwNMea0nq',
				titleId: 0x0004000000176F00n,
				titleRegion: 'USA',
				name: 'The Legend of Zelda Tri Force Heroes',
				tasks: ['info_00', 'Data', 'Data_00', 'Data_01']
			},
			{
				bossAppId: 'QDlGiLVY6lFsOhV3',
				titleId: 0x0004000000101200n,
				titleRegion: 'JPN',
				name: 'Puyopuyo Tetris',
				tasks: ['boss1', 'boss2', 'boss3', 'FGONLYT']
			},
			{
				bossAppId: 'qdy7ZP05GyiwgV7L',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'QfJQIU7IDmkaUuLt',
				titleId: 0x0004000000072500n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['Amb_us', 'Amb']
			},
			{
				bossAppId: 'qIe6CqkMDj1IaHoD',
				titleId: 0x000400000014E000n,
				titleRegion: 'JPN',
				name: 'アイカツ！ 365日のアイドルデイズ',
				tasks: ['AKT365I']
			},
			{
				bossAppId: 'QOnECUiVKl7wigDk',
				titleId: 0x000400000005C300n,
				titleRegion: 'JPN',
				name: 'スライムもりもりドラゴンクエスト３ 大海賊としっぽ団',
				tasks: ['Strike1']
			},
			{
				bossAppId: 'Qp03w0NGhViaEw4w',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'RA470KStGjDbVn4O',
				titleId: 0x000400000012DC00n,
				titleRegion: 'UNK',
				name: 'ファイアーエムブレム if 白夜王国',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: 'rdWhyQMMUyKavjb4',
				titleId: 0x000400000012DD00n,
				titleRegion: 'UNK',
				name: 'ファイアーエムブレム if 暗夜王国',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: 'rFgmDJuaHQO3TQFc',
				titleId: 0x0004000000178800n,
				titleRegion: 'JPN',
				name: 'Miitopia',
				tasks: ['Enquete', 'MiiDL']
			},
			{
				bossAppId: 'rLNcsjO2p5oT0mqf',
				titleId: 0x0004000000169500n,
				titleRegion: 'UNK',
				name: 'Rodea the Sky Soldier V1.01',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'RrNiKxhX1QFjyHSS',
				titleId: 0x0004000000179600n,
				titleRegion: 'USA',
				name: 'Fire Emblem Fates Conquest',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: 'rsJRb5kSxvgEazo3',
				titleId: 0x0004001000021800n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['PANEL', 'MIIDATA', 'ETC', 'PANELLM', 'UPDATE', 'LEGEND']
			},
			{
				bossAppId: 'ruVXn8rPH6AV83CV',
				titleId: 0x00040000000C0200n,
				titleRegion: 'JPN',
				name: 'レイトン教授と 超文明Ａの遺産',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'RXA1qO1PUOBzCrfe',
				titleId: 0x0004000000167800n,
				titleRegion: 'EUR',
				name: 'YO-KAI WATCH',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'S1JafzaIw7C1Iia5',
				titleId: 0x0004000000147200n,
				titleRegion: 'EUR',
				name: 'Little Battlers eXperience',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 's4T2rYW8ByXzSwQH',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 's6jspRUJkQbUMWgK',
				titleId: 0x0004000000159500n,
				titleRegion: 'USA',
				name: 'Devil Survivor 2 Record Breaker',
				tasks: ['Ds2ocTk']
			},
			{
				bossAppId: 'S7tpGELe3d0jT75J',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['data', 'news']
			},
			{
				bossAppId: 'sbPtwI3pQEFTPEYu',
				titleId: 0x0004000000168800n,
				titleRegion: 'UNK',
				name: 'Rodea the Sky Soldier',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'SS47bOArh8LhftQC',
				titleId: 0x0004000000078500n,
				titleRegion: 'JPN',
				name: 'ダンボール戦機 爆ブースト',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'svTk7OJgceQciyt9',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['data', 'news']
			},
			{
				bossAppId: 'Sz5wLxuBiuxOV6qO',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['data', 'news']
			},
			{
				bossAppId: 'T3WjBdLsN0SbsBpB',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'T6hDbtUyZu9yGbiN',
				titleId: 0x000400000017C200n,
				titleRegion: 'UNK',
				name: 'YO-KAI WATCH',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 't6hwMmI9dyfj3vFa',
				titleId: 0x00040000000D5800n,
				titleRegion: 'EUR',
				name: 'Nintendo 3DS Guide: Louvre (Versione italiana)',
				tasks: ['AL8_001']
			},
			{
				bossAppId: 't7svvLkl31nkcVv9',
				titleId: 0x00040000001B4E00n,
				titleRegion: 'USA',
				name: 'Miitopia',
				tasks: ['Enquete', 'MiiDL']
			},
			{
				bossAppId: 'TABYOV7qcJ3wjUlk',
				titleId: 0x000400000004B700n,
				titleRegion: 'JPN',
				name: 'G1 Grand Prix Ver.1.1',
				tasks: ['g1_plus']
			},
			{
				bossAppId: 'TegobOkDc6fN2cLL',
				titleId: 0x0004000000120C00n,
				titleRegion: 'KOR',
				name: 'Tomodachi Life',
				tasks: ['tmTaskA']
			},
			{
				bossAppId: 'TkTJ7y1N7b4bvs8m',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'TuKTMEFYh0sLS1O3',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['data', 'news']
			},
			{
				bossAppId: 'TVNiiigBTi1WzpnF',
				titleId: 0x00040000001C6800n,
				titleRegion: 'KOR',
				name: 'Fire Emblem Echoes: Shadows of Valentia',
				tasks: ['TASK00', 'FGONLYT', 'TASK01']
			},
			{
				bossAppId: 'U2ZFOVWD6LH9r4JQ',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'uLrjbAsNhsH7Hc1N',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'Umg3IE2TYUrKEV1D',
				titleId: 0x000400000012F800n,
				titleRegion: 'JPN',
				name: 'Yokai Watch 2 honke',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'uuI82221UKkqmtbp',
				titleId: 0x0004003000008F02n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['basho4', 'basho5', 'sysmsg1', 'sysmsg2', 'sysmsg3', 'basho1', 'basho2', 'basho3', 'basho0']
			},
			{
				bossAppId: 'UvNyA9yqIVj7LUml',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['data', 'news']
			},
			{
				bossAppId: 'uwGWP9VmceGVyTXv',
				titleId: 0x00040000000E9A00n,
				titleRegion: 'JPN',
				name: 'シアトリズム FF カーテンコール',
				tasks: ['DUOINFO']
			},
			{
				bossAppId: 'V04RWTNqtHWfOaEB',
				titleId: 0x00040000000EA900n,
				titleRegion: 'USA',
				name: 'Disney Magical World',
				tasks: ['FGONLYT', 'BNMCASI', 'BNMCASL']
			},
			{
				bossAppId: 'V5zESuakCkVaRtYB',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['data', 'news']
			},
			{
				bossAppId: 'vCl8UPQ872Q2wzc0',
				titleId: 0x000400000008C500n,
				titleRegion: 'JPN',
				name: 'トモダチコレクション　新生活',
				tasks: ['tmTaskA']
			},
			{
				bossAppId: 'vl1QWl9Lf3FhiH8r',
				titleId: 0x000400000014AD00n,
				titleRegion: 'JPN',
				name: '大逆転裁判 -成歩堂龍ノ介の冒險-',
				tasks: ['DSAIBAN']
			},
			{
				bossAppId: 'w4J4AC8GMlfdkX9c',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['daily']
			},
			{
				bossAppId: 'w8pqLFi96ZJLL6Co',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'WaOuJFckDnqKr5sK',
				titleId: 0x00040000001D6800n,
				titleRegion: 'EUR',
				name: 'Yo-kai Watch 3',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'wbyZZlvq1j2QNBXj',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['daily']
			},
			{
				bossAppId: 'wfHyw6Hj9b1UeCOd',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'WNcE0vrvCCO74nPV',
				titleId: 0x000400000016DE00n,
				titleRegion: 'USA',
				name: 'SmileBASIC Ver.3.6.0',
				tasks: ['ptc3nwe']
			},
			{
				bossAppId: 'wXBTx8n5TvYbdKqD',
				titleId: 0x000400000012F900n,
				titleRegion: 'JPN',
				name: 'Yokai Watch 2 ganso',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'wZgX791EQIHRicOk',
				titleId: 0x00040000001C1900n,
				titleRegion: 'JPN',
				name: 'LAYTON\'S MYSTERY JOURNEY Katrielle and the Millionaires\'...',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'X0sh6ppe6HabEEcI',
				titleId: 0x0004000000177000n,
				titleRegion: 'EUR',
				name: 'The Legend of Zelda Tri Force Heroes',
				tasks: ['Info_00', 'Data', 'Data_00', 'Data_01']
			},
			{
				bossAppId: 'X7wyEU7bsKuTwsw0',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'xHdRFJ7H9HIm2Eu5',
				titleId: 0x0004000000030000n,
				titleRegion: 'JPN',
				name: 'Kid Icarus: Uprising',
				tasks: ['SEED']
			},
			{
				bossAppId: 'XrC4VtwZsJ3ro8sn',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'Y49VUspi8Bd4dqV9',
				titleId: 0x00040000000CF500n,
				titleRegion: 'JPN',
				name: 'DQM2',
				tasks: ['FGONLYT', 'WHALE01', 'WHALE02']
			},
			{
				bossAppId: 'y67Up0WfC3ljfqic',
				titleId: 0x0004000000030200n,
				titleRegion: 'EUR',
				name: 'Kid Icarus: Uprising',
				tasks: ['SEED']
			},
			{
				bossAppId: 'YapN7dMun6U6CVPx',
				titleId: 0x000400100002CD00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['thmlist', 'thmtop', 'thmnews', 'thmdtls']
			},
			{
				bossAppId: 'YbltplPRvEZ9620A',
				titleId: 0x000400000007AF00n,
				titleRegion: 'EUR',
				name: 'New SUPER MARIO BROS. 2',
				tasks: ['present', 'patch']
			},
			{
				bossAppId: 'YCHNmojskL3NNzNp',
				titleId: 0x0004000000095C00n,
				titleRegion: 'JPN',
				name: 'Disney Magic Castle My Happy Life',
				tasks: ['FGONLYT', 'BNMCASI', 'BNMCASL']
			},
			{
				bossAppId: 'yj9NpW9dQjUYhN6i',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'ylHLOTvdmBIaUX4H',
				titleId: 0x0004000000179800n,
				titleRegion: 'UNK',
				name: 'Fire Emblem Fates',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: 'YSMWAkVsyGiCsw36',
				titleId: 0x00040000000F5100n,
				titleRegion: 'JPN',
				name: '三國志',
				tasks: ['SGS_APD', 'SGS_INF']
			},
			{
				bossAppId: 'ytEcS6DukxLYv42a',
				titleId: 0x0004000000072000n,
				titleRegion: 'JPN',
				name: 'ファイアーエムブレム　覚醒',
				tasks: ['Quartz0', 'Quartz1']
			},
			{
				bossAppId: 'YzNlkoJpfJCGhJ5J',
				titleId: 0x0004000000166E00n,
				titleRegion: 'JPN',
				name: 'モンハン日記 ぽかぽかアイルー村DX',
				tasks: ['AIROUDX']
			},
			{
				bossAppId: 'zFRghpEL0RQSrIkZ',
				titleId: 0x0004000000144300n,
				titleRegion: 'JPN',
				name: 'ヒーローバンク２',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'ZtNvntGBgoUcf3hZ',
				titleId: 0x00040000001CF000n,
				titleRegion: 'EUR',
				name: 'YO-KAI WATCH BLASTERS WHITE DOG SQUAD',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'ZweaaGi5WXHt5SO2',
				titleId: 0x00040000000A0500n,
				titleRegion: 'USA',
				name: 'Fire Emblem Awakening',
				tasks: ['Quartz0', 'Quartz1']
			},
			{
				bossAppId: 'Zy3Cob0dHUBuRjK3',
				titleId: 0x00040000000D5900n,
				titleRegion: 'USA',
				name: 'Nintendo 3DS Guide: Louvre (versión en español)',
				tasks: ['AL8_001']
			},
			{
				bossAppId: 'zY73NQ2CPef4Rfvu',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'ZzIGzz3gyLOPJUbk',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['daily']
			},
			{
				bossAppId: 'RbCdW5sw3xphZ3x7',
				titleId: 0x000400000014F100n,
				titleRegion: 'USA',
				name: 'Animal Crossing: Happy Home Designer',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'kdZ3BEkxoaIt2lLJ',
				titleId: 0x00040000000D4400n,
				titleRegion: 'JPN',
				name: 'Oxford Reading Tree Floppy\'s Phonics vol.3',
				tasks: ['ORT03']
			},
			{
				bossAppId: '0a2LXft7kMJ39q4g',
				titleId: 0x00040000000D4200n,
				titleRegion: 'JPN',
				name: 'Oxford Reading Tree Floppy\'s Phonics vol.2',
				tasks: ['ORT02']
			},
			{
				bossAppId: '6cDyiXh2nyoSmHeE',
				titleId: 0x00040000000D4300n,
				titleRegion: 'JPN',
				name: 'Oxford Reading Tree Floppy\'s Phonics vol.1',
				tasks: ['ORT01']
			},
			{
				bossAppId: 'Tw16Bbw3beUmN6Jd',
				titleId: 0x000400000014F000n,
				titleRegion: 'JPN',
				name: 'Animal Crossing: Happy Home Designer',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: '7b6ZRfqtEUTwJ6rj',
				titleId: 0x00040000000B1900n,
				titleRegion: 'EUR',
				name: 'Phonics Fun with Biff, Chip and Kipper vol.3',
				tasks: ['ORT03']
			},
			{
				bossAppId: 'PDhvZpH361L3gmm3',
				titleId: 0x00040000000B1800n,
				titleRegion: 'EUR',
				name: 'Phonics Fun with Biff, Chip and Kipper vol.2',
				tasks: ['ORT02']
			},
			{
				bossAppId: 'AOdUQg8P4dXbIC4b',
				titleId: 0x000400000014F200n,
				titleRegion: 'EUR',
				name: 'Animal Crossing: Happy Home Designer',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'tqdef27ymLVxfSaD',
				titleId: 0x00040000000B1700n,
				titleRegion: 'EUR',
				name: 'Phonics Fun with Biff, Chip and Kipper vol.1',
				tasks: ['ORT01']
			},
			{
				bossAppId: 'qEFxWy2HQ5AX7qTX',
				titleId: 0x0004000200178801n,
				titleRegion: 'UNK',
				name: 'Miitopia 体験版',
				tasks: ['MiiDL']
			},
			{
				bossAppId: 'EnLW1Fe8d0AfR3mE',
				titleId: 0x0004000000055900n,
				titleRegion: 'EUR',
				name: 'Rabbids Rumble',
				tasks: ['NEWRABS']
			},
			{
				bossAppId: 'lX5BwDIdDsj6RkZg',
				titleId: 0x000400000004C300n,
				titleRegion: 'USA',
				name: 'Imagine® babyz®',
				tasks: ['RACHEL']
			},
			{
				bossAppId: 'gQ3O9gb9VwvI3is6',
				titleId: 0x0004000000182B00n,
				titleRegion: 'KOR',
				name: 'The Legend of Zelda Tri Force Heroes',
				tasks: ['Data', 'Data_00', 'Data_01', 'Info_00']
			},
			{
				bossAppId: 'Yh1oGYQ6MHHRacyR',
				titleId: 0x0004000000182C00n,
				titleRegion: 'TWN',
				name: 'The Legend of Zelda Tri Force Heroes',
				tasks: ['Data', 'Data_00', 'Data_01', 'Info_00']
			},
			{
				bossAppId: 'qn6svwUCotEnBg24',
				titleId: 0x00040000001B1700n,
				titleRegion: 'JPN',
				name: '好きなMiiで見る Miitopia 予告編',
				tasks: ['MiiDL', 'Enquete']
			},
			{
				bossAppId: 'QlZMDe93rUHQ7svF',
				titleId: 0x000400000004E100n,
				titleRegion: 'UNK',
				name: 'Imagine™ Babies 3D',
				tasks: ['RACHEL']
			},
			{
				bossAppId: '6WLiMjiIXzGMmZ6n',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['Info', 'Info_00']
			},
			{
				bossAppId: 'HpRhWfgZE0SoEiJ6',
				titleId: 0x0004001000020B00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['NZOffPg']
			},
			{
				bossAppId: 'BC10cFTXc0NHTohu',
				titleId: 0x00040000001A2C00n,
				titleRegion: 'JPN',
				name: 'Swapdoodle',
				tasks: ['RNG_EC1', 'RNG_MD1', 'RNG_LS1', 'RNG_NT1', 'RNG_NT2', 'RNG_GM1', 'RNG_DFR', 'RNG_U01', 'RNG_U02', 'RNG_U03', 'RNG_U04', 'RNG_U05', 'RNG_U06', 'RNG_U07', 'RNG_UUS']
			},
			{
				bossAppId: 'QwyHOPV4LsvQ2I3U',
				titleId: 0x00040000000F4E00n,
				titleRegion: 'JPN',
				name: 'NEWラブプラス＋',
				tasks: ['PTASK01', 'FGONLYT', 'PTASK02']
			},
			{
				bossAppId: '7RW9z5Cb71Fpt1OE',
				titleId: 0x0004001000020900n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['BGM1', 'TIGER1', 'BGM2']
			},
			{
				bossAppId: 'TLmPhQflK0Yn6BeH',
				titleId: 0x0004000000117200n,
				titleRegion: 'JPN',
				name: 'Petit computer 3 Ver.3.6.3',
				tasks: ['ptc3nws']
			},
			{
				bossAppId: 'pfQzJEaJOiPlLy3t',
				titleId: 0x0004001000020800n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['MIIDATA', 'ETC', 'PANELLM', 'UPDATE', 'PANEL', 'LEGEND']
			},
			{
				bossAppId: '110Rzo2E1vYSfAz6',
				titleId: 0x000400100002CC00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['thmtop', 'thmnews', 'thmdtls', 'thmlist']
			},
			{
				bossAppId: 'gWr4JXxb2mKTG3lq',
				titleId: 0x0004003000008202n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['basho1', 'basho2', 'basho3', 'basho4', 'basho5', 'sysmsg1', 'sysmsg2', 'sysmsg3', 'basho0']
			},
			{
				bossAppId: 'WyI1CBPmzfm2nR2f',
				titleId: 0x0004000000051600n,
				titleRegion: 'JPN',
				name: 'Swapnote',
				tasks: ['JFR_LS2', 'JFR_NT1', 'JFR_NT2', 'JFR_NT3', 'JFR_AP2', 'JFR_GM2', 'JFR_DNT', 'JFR_DLS', 'JFR_DAP', 'JFR_DGM', 'JFR_DFR', 'JFR_U01', 'JFR_U02', 'JFR_U03', 'JFR_U04', 'JFR_U05', 'JFR_U06', 'JFR_U07', 'JFR_U08', 'JFR_U09', 'JFR_U10']
			},
			{
				bossAppId: 'h0VRqB2YEgq39zvO',
				titleId: 0x0004000000055D00n,
				titleRegion: 'JPN',
				name: 'Pokémon X',
				tasks: ['horogra', 'FGONLYT']
			},
			{
				bossAppId: 'H7btVjYWs7p5dGj6',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['BREAK01', 'BREAK02', 'BREAK03', 'FGONLYT']
			},
			{
				bossAppId: 'rO34jReRezcPv4HS',
				titleId: 0x0004001000021B00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['NZOffPg']
			},
			{
				bossAppId: 'b3Gq6LF6EqE1bvKy',
				titleId: 0x00040000001B5100n,
				titleRegion: 'JPN',
				name: 'Pokémon Ultra Moon',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'OpIF7z4Uzjoww4Jw',
				titleId: 0x00040000000DCD00n,
				titleRegion: 'USA',
				name: 'Mario Golf: World Tour',
				tasks: ['spnt_t', 'spnt_x', 'FGONLYT']
			},
			{
				bossAppId: 't9PZWHTdBZ57jYL6',
				titleId: 0x00040000000A9000n,
				titleRegion: 'EUR',
				name: 'Nintendo presents: New Style Boutique',
				tasks: ['girls', 'GMTM', 'info']
			},
			{
				bossAppId: 'vD1TyxppgptrZdfK',
				titleId: 0x0004001000027900n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['BGM1', 'BGM2', 'TIGER1']
			},
			{
				bossAppId: 'vgBivYesOH9RS5I8',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'Slv7vHlUOfqrKMpz',
				titleId: 0x0004000000055E00n,
				titleRegion: 'JPN',
				name: 'Pokémon Y',
				tasks: ['FGONLYT', 'horogra']
			},
			{
				bossAppId: 'EeqptDDf7v2IL7OP',
				titleId: 0x00040000001AB800n,
				titleRegion: 'USA',
				name: 'Team Kirby Clash Deluxe',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'xNwjHvSQy3aGBb4C',
				titleId: 0x0004000000137F00n,
				titleRegion: 'UNK',
				name: 'New SUPER MARIO BROS. 2: Special Edition',
				tasks: ['patch', 'present']
			},
			{
				bossAppId: 'AH3oZwrEbne6qHCO',
				titleId: 0x0004001000022900n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['BGM1', 'BGM2', 'TIGER1']
			},
			{
				bossAppId: 'tjca9oAeXj1R9EfU',
				titleId: 0x0004001000022800n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['MIIDATA', 'ETC', 'PANEL', 'PANELLM', 'UPDATE', 'LEGEND']
			},
			{
				bossAppId: 'ZBq1ITue8b9aw64j',
				titleId: 0x00040000000EE000n,
				titleRegion: 'EUR',
				name: 'Super Smash Bros. for Nintendo 3DS',
				tasks: ['NEWS', 'amiibo', 'FGONLYT']
			},
			{
				bossAppId: 'dMtiFHzm5OOf0y2O',
				titleId: 0x000400100002CE00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['thmtop', 'thmnews', 'thmlist', 'thmdtls']
			},
			{
				bossAppId: 'UrXSeurnxhPrq7AS',
				titleId: 0x0004003000009802n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['sysmsg1', 'sysmsg2', 'sysmsg3', 'basho1', 'basho2', 'basho3', 'basho4', 'basho5', 'basho0']
			},
			{
				bossAppId: 'Y5G9cKWHtFCre5ni',
				titleId: 0x0004000000086400n,
				titleRegion: 'UNK',
				name: 'Animal Crossing New Leaf',
				tasks: ['dlvexb', 'news', 'news_p', 'FGONLYT', 'pnews', 'dream', 'dream_p']
			},
			{
				bossAppId: 'oC02RURp92o3o6XQ',
				titleId: 0x00040000001B8D00n,
				titleRegion: 'EUR',
				name: 'Miitopia: Casting Call',
				tasks: ['MiiDL', 'Enquete']
			},
			{
				bossAppId: '8zLdgUwAeyD4Bn3b',
				titleId: 0x0004000000102F00n,
				titleRegion: 'JPN',
				name: '太鼓の達人 どんとかつの時空大冒険',
				tasks: ['DlcInfo', 'FGONLYT']
			},
			{
				bossAppId: 'nn2h3ad9wxrX42UF',
				titleId: 0x0004000000141000n,
				titleRegion: 'JPN',
				name: 'Pokémon Shuffle',
				tasks: ['pktrpsh']
			},
			{
				bossAppId: 'wfGi1AUhRfVvZ2KR',
				titleId: 0x0004001000022B00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['NZOffPg']
			},
			{
				bossAppId: '6HThIi5QlwGZNYFs',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: '8QjtffIMWFhiFpTz',
				titleId: 0x0004000000164800n,
				titleRegion: 'JPN',
				name: 'Pokémon Sun',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'gfRN888w01lMrpSr',
				titleId: 0x0004000000190E00n,
				titleRegion: 'JPN',
				name: '太鼓の達人 ドコドン！ ミステリーアドベンチャー',
				tasks: ['DlcInfo']
			},
			{
				bossAppId: 'cRFY0WFHNjPh44If',
				titleId: 0x000400000011C400n,
				titleRegion: 'JPN',
				name: 'Pokémon Omega Ruby',
				tasks: ['horogra', 'FGONLYT']
			},
			{
				bossAppId: 'wkiOHAEndV3fVHOF',
				titleId: 0x00040000000DCE00n,
				titleRegion: 'EUR',
				name: 'Mario Golf: World Tour',
				tasks: ['spnt_t', 'FGONLYT', 'spnt_x']
			},
			{
				bossAppId: 'nTik1y6PI2QheWpi',
				titleId: 0x00040000000D4B00n,
				titleRegion: 'EUR',
				name: 'Disney Magical World',
				tasks: ['FGONLYT', 'BNMCASI', 'BNMCASL']
			},
			{
				bossAppId: 'uAiur5PJTg0lFji6',
				titleId: 0x00040000001C2600n,
				titleRegion: 'EUR',
				name: 'Nintendo Presents New Style Boutique 3',
				tasks: ['NEWS', 'POSTER']
			},
			{
				bossAppId: 'hatYUcYm85RPNRYv',
				titleId: 0x0004000000032D00n,
				titleRegion: 'USA',
				name: 'SUPER STREET FIGHTER Ⅳ 3D EDITION',
				tasks: ['SPA4APP']
			},
			{
				bossAppId: 'nT8epEHh2yCVHTZk',
				titleId: 0x0004000000198E00n,
				titleRegion: 'USA',
				name: 'Animal Crossing: New Leaf - Welcome amiibo',
				tasks: ['news', 'news_p', 'dlvexb', 'FGONLYT', 'dream', 'dream_p']
			},
			{
				bossAppId: 'P2mPjVWZUv2Dw8tw',
				titleId: 0x000400000017EA00n,
				titleRegion: 'USA',
				name: 'HYRULE WARRIORS LEGENDS',
				tasks: ['zdltdat', 'FGONLYT']
			},
			{
				bossAppId: 'KJshB9eMGJCdvEBK',
				titleId: 0x00040000000BA800n,
				titleRegion: 'USA',
				name: 'Pokémon Mystery Dungeon Gates to Infinity',
				tasks: ['PAINF00']
			},
			{
				bossAppId: 'tjZ5w8RGlAKd82y0',
				titleId: 0x00040000001B2700n,
				titleRegion: 'USA',
				name: 'YO-KAI WATCH 2: PSYCHIC SPECTERS',
				tasks: ['news', 'FGONLYT']
			},
			{
				bossAppId: 'GHsikcsO3zjZO8bm',
				titleId: 0x00040000000A9100n,
				titleRegion: 'USA',
				name: 'Style Savvy: Trendsetters',
				tasks: ['GMTM', 'info', 'girls']
			},
			{
				bossAppId: 'kIHxKNVp3BHrr9bb',
				titleId: 0x0004000000163200n,
				titleRegion: 'EUR',
				name: 'Fullblox',
				tasks: ['annouce', 'FGONLYT']
			},
			{
				bossAppId: 'qOBtWp4rFtI6PoPl',
				titleId: 0x00040000000B4F00n,
				titleRegion: 'EUR',
				name: 'Fallblox',
				tasks: ['JAU']
			},
			{
				bossAppId: '3xU3A5ONnnC5ZxG9',
				titleId: 0x0004000000031600n,
				titleRegion: 'EUR',
				name: 'nintendogs + cats',
				tasks: ['task_EU']
			},
			{
				bossAppId: 'n7KLcJdvAfV8jrr5',
				titleId: 0x00040002001B4F01n,
				titleRegion: 'UNK',
				name: 'Miitopia: Demo Version',
				tasks: ['MiiDL', 'Enquete']
			},
			{
				bossAppId: 'ZMcgy6xtWsbsQE6P',
				titleId: 0x0004000000198F00n,
				titleRegion: 'EUR',
				name: 'Animal Crossing: New Leaf - Welcome amiibo',
				tasks: ['news_p', 'dlvexb', 'news', 'FGONLYT', 'dream', 'dream_p']
			},
			{
				bossAppId: 'x7rRVYrCfwjmpOOX',
				titleId: 0x0004000000163100n,
				titleRegion: 'USA',
				name: 'Stretchmo',
				tasks: ['annouce', 'FGONLYT']
			},
			{
				bossAppId: 'svHxRGPIJ2AWA5QJ',
				titleId: 0x00040002001B4E01n,
				titleRegion: 'UNK',
				name: 'Miitopia Demo',
				tasks: ['MiiDL', 'Enquete']
			},
			{
				bossAppId: 'vlru9ZBRLJNiPwcm',
				titleId: 0x000400000004AB00n,
				titleRegion: 'UNK',
				name: 'Nintendo Video',
				tasks: ['ESP_NWS', 'ESP_CNF']
			},
			{
				bossAppId: '6a2i4ewtEkJhoUS0',
				titleId: 0x00040000000D9A00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SN7P']
			},
			{
				bossAppId: '9vMstzmE8vG7XDOo',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['EWP_NWS', 'EWP_CNF']
			},
			{
				bossAppId: 'VCcHstgngvFjng8c',
				titleId: 0x0004000000032600n,
				titleRegion: 'UNK',
				name: 'Pokédex 3D',
				tasks: ['basrao0', 'basrao1']
			},
			{
				bossAppId: 'gekBa3SxolnJEyXJ',
				titleId: 0x000400000016A100n,
				titleRegion: 'EUR',
				name: 'Nintendo presents New Style Boutique 2',
				tasks: ['NEWS', 'POSTER', 'FGONLYT']
			},
			{
				bossAppId: 'AOG9w8nspw1vnerP',
				titleId: 0x0004000000084F00n,
				titleRegion: 'EUR',
				name: 'New Art Academy',
				tasks: ['london1']
			},
			{
				bossAppId: 'AZdLFt0b2qPaChrb',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['ptc3nws']
			},
			{
				bossAppId: 'EPqObwlC8lOg12az',
				titleId: 0x000400000013F800n,
				titleRegion: 'UNK',
				name: 'Rayman and Rabbids - Family Pack',
				tasks: ['NEWRABS']
			},
			{
				bossAppId: 'ytpowavlB10VzRDI',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['GS5']
			},
			{
				bossAppId: 'bX6vTcQgC6ojhnM8',
				titleId: 0x0004000000125D00n,
				titleRegion: 'JPN',
				name: 'Denpa Ningen RPG FREE!',
				tasks: ['labos01', 'labos02', 'FGONLYT']
			},
			{
				bossAppId: 'sKBxpm1uEGbaKj3Z',
				titleId: 0x0004000000030C00n,
				titleRegion: 'EUR',
				name: 'nintendogs + cats',
				tasks: ['task_EU']
			},
			{
				bossAppId: 'd2AUo8Ku903Uz7Oy',
				titleId: 0x000400000018FA00n,
				titleRegion: 'EUR',
				name: 'Phoenix Wright: Ace Attorney Spirit of Justice',
				tasks: ['GS6']
			},
			{
				bossAppId: 'h06QNObaOsEeWbLS',
				titleId: 0x0004000000034D00n,
				titleRegion: 'USA',
				name: 'SAMURAI WARRIORS: Chronicles',
				tasks: ['JMCDLC0', 'JMCDLC1', 'JMCDLC2']
			},
			{
				bossAppId: 'au22VYFVclQ3t3fK',
				titleId: 0x0004000000082000n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JQBE']
			},
			{
				bossAppId: 'nw66VXNswH2IYbJk',
				titleId: 0x0004000000082200n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ5Z']
			},
			{
				bossAppId: 'ClDVV1OhC2nPQfiz',
				titleId: 0x0004000000081F00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JQAE']
			},
			{
				bossAppId: 'eD9gjUWfENOf7RX4',
				titleId: 0x0004000000033C00n,
				titleRegion: 'EUR',
				name: 'SUPER STREET FIGHTER Ⅳ 3D EDITION',
				tasks: ['SPA4APP']
			},
			{
				bossAppId: 'Ne7L2H9zREHMz0QT',
				titleId: 0x000400000017A800n,
				titleRegion: 'UNK',
				name: 'Fire Emblem Fates',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: 'asLNEQeEuHnm71Qo',
				titleId: 0x0004000000079000n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ5P']
			},
			{
				bossAppId: 'KafSZFWApstWG1oT',
				titleId: 0x0004000000038A00n,
				titleRegion: 'EUR',
				name: 'DEAD OR ALIVE Dimensions',
				tasks: ['costume', 'foeevnt', 'info']
			},
			{
				bossAppId: 's6jH81JriWS8EFL4',
				titleId: 0x0004000000079300n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJYP']
			},
			{
				bossAppId: '7FgFpXT7yPCI7d5K',
				titleId: 0x0004000000079100n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJZP']
			},
			{
				bossAppId: 'H0aS5wTwrP8xYZbj',
				titleId: 0x0004000000079400n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJVP']
			},
			{
				bossAppId: '2jvsEXOhaXMEJRqU',
				titleId: 0x0004000000079200n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJXP']
			},
			{
				bossAppId: '9eqERrZPrfwHsXw8',
				titleId: 0x0004000000078E00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ6P']
			},
			{
				bossAppId: 'pvKf3eKlZM86SftD',
				titleId: 0x0004000000078F00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ7P']
			},
			{
				bossAppId: 'Q9zLfpAkDHiIAQtD',
				titleId: 0x0004000000080F00n,
				titleRegion: 'UNK',
				name: 'Mario & Sonic - London 2012 Virtual Card Album',
				tasks: ['Z_CARD0']
			},
			{
				bossAppId: 'KmJKbxqqJ1ISUDgN',
				titleId: 0x0004000000155C00n,
				titleRegion: 'EUR',
				name: 'Gardening mama Forest Friends',
				tasks: ['add-on']
			},
			{
				bossAppId: 'rNRksUC46LBJUQps',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['weekly']
			},
			{
				bossAppId: 'HxHhUeO7QSr7fTf0',
				titleId: 0x0004000000137E00n,
				titleRegion: 'UNK',
				name: 'New Super Mario Bros. 2: Gold Edition',
				tasks: ['present', 'patch']
			},
			{
				bossAppId: 'p2uEU1eJqc8tFvqS',
				titleId: 0x0004000000034F00n,
				titleRegion: 'USA',
				name: 'DEAD OR ALIVE Dimensions',
				tasks: ['costume', 'foeevnt', 'info']
			},
			{
				bossAppId: 'MjQnB45RHoQhqIf4',
				titleId: 0x00040000001C2500n,
				titleRegion: 'USA',
				name: 'Style Savvy: Styling Star',
				tasks: ['NEWS', 'POSTER']
			},
			{
				bossAppId: '0Fkb5zYwkA04nKYK',
				titleId: 0x00040000001B8C00n,
				titleRegion: 'USA',
				name: 'Miitopia: Casting Call',
				tasks: ['MiiDL', 'Enquete']
			},
			{
				bossAppId: 'CkG3Q4aOnF2ALmis',
				titleId: 0x000400000017EB00n,
				titleRegion: 'EUR',
				name: 'HYRULE WARRIORS LEGENDS',
				tasks: ['zdltcm', 'zdltdat', 'FGONLYT']
			},
			{
				bossAppId: 'Fk5Tz3LAVAZ2SvqP',
				titleId: 0x0004000000031200n,
				titleRegion: 'USA',
				name: 'nintendogs + cats',
				tasks: ['task_US']
			},
			{
				bossAppId: 'UKUcmS9e4XbCsq3x',
				titleId: 0x00040000000B8B00n,
				titleRegion: 'JPN',
				name: 'Super Smash Bros. for Nintendo 3DS',
				tasks: ['NEWS', 'amiibo', 'FGONLYT']
			},
			{
				bossAppId: 'QmLaxX884X14gr28',
				titleId: 0x0004000000030D00n,
				titleRegion: 'USA',
				name: 'nintendogs + cats',
				tasks: ['task_US']
			},
			{
				bossAppId: 'eVnDsHy7ix4xPKLs',
				titleId: 0x000400000019A900n,
				titleRegion: 'USA',
				name: 'Yo-kai Watch 2 Bony Spirits',
				tasks: ['news', 'FGONLYT']
			},
			{
				bossAppId: 'fnCAH3KrGIl9dgSd',
				titleId: 0x00040000001B5000n,
				titleRegion: 'JPN',
				name: 'Pokémon Ultra Sun',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'Co6AOQENlqDZDWNw',
				titleId: 0x0004000000106200n,
				titleRegion: 'EUR',
				name: 'Nintendo Pocket Football Club',
				tasks: ['hobbit2', 'hobbit1']
			},
			{
				bossAppId: 'dJ4hv6uMXYNhbYGJ',
				titleId: 0x000400000018AF00n,
				titleRegion: 'UNK',
				name: 'Disney Magical World 2',
				tasks: ['MC2NWS', 'FGONLYT']
			},
			{
				bossAppId: 'cd1qe3EXYyRuEdld',
				titleId: 0x0004000000109800n,
				titleRegion: 'JPN',
				name: 'niconico',
				tasks: ['news']
			},
			{
				bossAppId: 'dpi2G2X44RWYcFKi',
				titleId: 0x0004000000031100n,
				titleRegion: 'EUR',
				name: 'nintendogs + cats',
				tasks: ['task_EU']
			},
			{
				bossAppId: 'AQzcgnW7ozCHjk0e',
				titleId: 0x000400000019AA00n,
				titleRegion: 'USA',
				name: 'Yo-kai Watch 2 Fleshy Souls',
				tasks: ['news', 'FGONLYT']
			},
			{
				bossAppId: 'wKrAF9Z9DXZdXZQx',
				titleId: 0x00040000001B9C00n,
				titleRegion: 'USA',
				name: 'Cooking Mama: Sweet Shop',
				tasks: ['weekly']
			},
			{
				bossAppId: 'ZzWhdXdx7bv5p8bP',
				titleId: 0x0004000000095800n,
				titleRegion: 'USA',
				name: 'Art Academy Lessons for Everyone!',
				tasks: ['london1']
			},
			{
				bossAppId: 'ME0gcVqjUOI7Xdz4',
				titleId: 0x0004000000075100n,
				titleRegion: 'USA',
				name: 'Heroes of Ruin',
				tasks: ['IMAHERO']
			},
			{
				bossAppId: 'dAWysFTQbZ8yEBBd',
				titleId: 0x000400000016F200n,
				titleRegion: 'USA',
				name: 'SAMURAI WARRIORS: Chronicles 3',
				tasks: ['SC3DLC0', 'FGONLYT']
			},
			{
				bossAppId: 'Bj9GROrjies5XMOa',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['GS5']
			},
			{
				bossAppId: '65YaZF7skxsw5cdY',
				titleId: 0x000400000018F400n,
				titleRegion: 'USA',
				name: 'Phoenix Wright: Ace Attorney Spirit of Justice',
				tasks: ['GS6']
			},
			{
				bossAppId: 'InwBEl2EEhnbr5EC',
				titleId: 0x0004000000031700n,
				titleRegion: 'USA',
				name: 'nintendogs + cats',
				tasks: ['task_US']
			},
			{
				bossAppId: 'gfRXFtm46orJeAoe',
				titleId: 0x0004000000086200n,
				titleRegion: 'UNK',
				name: 'Animal Crossing New Leaf',
				tasks: ['news', 'news_p', 'pnews', 'FGONLYT', 'dream', 'dream_p']
			},
			{
				bossAppId: 'h9yS1FDz26uNM9lj',
				titleId: 0x00040000000B4A00n,
				titleRegion: 'JPN',
				name: 'Tongariboshi To Maho no Machi',
				tasks: ['tg4', 'tg4home', 'FGONLYT']
			},
			{
				bossAppId: 'hLU6fGE4vzOsrlmw',
				titleId: 0x0004000000031000n,
				titleRegion: 'JPN',
				name: 'nintendogs + cats',
				tasks: ['task_JP']
			},
			{
				bossAppId: '5H2IWrmjM8PiN5SV',
				titleId: 0x00040000000B4700n,
				titleRegion: 'UNK',
				name: 'どこでも本屋さん',
				tasks: ['diibo00', 'diibo02', 'diibo01', 'FGONLYT']
			},
			{
				bossAppId: 'E5GjXFKIix3yGqgK',
				titleId: 0x0004000000099700n,
				titleRegion: 'JPN',
				name: 'RECOCHOKU',
				tasks: ['RECOBNT', 'FGONLYT']
			},
			{
				bossAppId: 'VEPSPo1c55w9ydWV',
				titleId: 0x0004000000157B00n,
				titleRegion: 'JPN',
				name: '引ク出ス ヒッパランド',
				tasks: ['annouce', 'FGONLYT']
			},
			{
				bossAppId: 'sA2vpi47OPnR78Ge',
				titleId: 0x0004000000180A00n,
				titleRegion: 'JPN',
				name: 'ChoChariso ver.1.2',
				tasks: ['taskImg', 'taskID', 'taskFlg']
			},
			{
				bossAppId: 'PAuBgnpL4UGBpboR',
				titleId: 0x0004000000141D00n,
				titleRegion: 'JPN',
				name: '大合奏！バンドブラザーズＰ デビュー',
				tasks: ['allhp']
			},
			{
				bossAppId: '76cct9EjYJJ17weU',
				titleId: 0x00040002000C9E01n,
				titleRegion: 'UNK',
				name: '（体験版）実写でちびロボ！',
				tasks: ['mesdat', 'dat']
			},
			{
				bossAppId: 'AcYFJX9F9mNBA34T',
				titleId: 0x000400000005C800n,
				titleRegion: 'USA',
				name: 'Crosswords Plus',
				tasks: ['CW_WEEK', 'CW_RGN']
			},
			{
				bossAppId: 'ZppKDH9dFwci1xuM',
				titleId: 0x00040000000F1500n,
				titleRegion: 'USA',
				name: 'JUMP TRIALS SUPREME',
				tasks: ['dqu5vs9', 'x7a9u1y']
			},
			{
				bossAppId: '7mXz0DXR4b4CdD8r',
				titleId: 0x0004000000175E00n,
				titleRegion: 'JPN',
				name: 'Pokémon Moon',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: '5XpCMVOjCHJOLeh6',
				titleId: 0x0004000000079700n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ6E']
			},
			{
				bossAppId: 'Kgg1X843lmd8Qx4H',
				titleId: 0x0004000000074000n,
				titleRegion: 'EUR',
				name: 'Heroes of Ruin',
				tasks: ['IMAHERO']
			},
			{
				bossAppId: 'nmU69oGizolOYGSc',
				titleId: 0x00040000000FCA00n,
				titleRegion: 'EUR',
				name: 'THEATRHYTHM FINAL FANTASY CURTAIN CALL',
				tasks: ['DUOINFO']
			},
			{
				bossAppId: 'OXEubGVtO2scl6qt',
				titleId: 0x0004000000132500n,
				titleRegion: 'JPN',
				name: 'Code Name: S.T.E.A.M.',
				tasks: ['NEWS']
			},
			{
				bossAppId: 'wujsRH3kkwPXc5p9',
				titleId: 0x0004000000179500n,
				titleRegion: 'UNK',
				name: 'Fire Emblem Fates Birthright',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: 'xxVJpVHJVIX1unyz',
				titleId: 0x000400000018B000n,
				titleRegion: 'JPN',
				name: 'YO-KAI SANGOKUSHI',
				tasks: ['yk_news', 'FGONLYT']
			},
			{
				bossAppId: '9bUGzV1nUl8wxkPY',
				titleId: 0x0004000000198D00n,
				titleRegion: 'JPN',
				name: 'Animal Crossing: New Leaf - Welcome amiibo',
				tasks: ['news', 'news_p', 'FGONLYT', 'dream', 'dream_p']
			},
			{
				bossAppId: 'MbNeoMBork0x5U9D',
				titleId: 0x0004000000137D00n,
				titleRegion: 'UNK',
				name: 'New SUPER MARIO BROS. 2: Gold Edition',
				tasks: ['present', 'patch']
			},
			{
				bossAppId: 'wESLUfmWpm322iLC',
				titleId: 0x00040000000A5300n,
				titleRegion: 'JPN',
				name: 'Mario Golf: World Tour',
				tasks: ['spnt_t', 'spnt_x', 'FGONLYT']
			},
			{
				bossAppId: 'TISVjpYatgrPk9By',
				titleId: 0x00040000001B9500n,
				titleRegion: 'EUR',
				name: 'Cooking Mama: Sweet Shop',
				tasks: ['weekly']
			},
			{
				bossAppId: 'JK6188WXQQi46VGk',
				titleId: 0x0004000000192F00n,
				titleRegion: 'EUR',
				name: 'JUMP TRIALS SUPREME',
				tasks: ['dqu5vs9', 'x7a9u1y']
			},
			{
				bossAppId: 'r8bumkFVkPoNhc9c',
				titleId: 0x00040000000E6700n,
				titleRegion: 'USA',
				name: 'Skater Cat',
				tasks: ['boss1', 'FGONLYT']
			},
			{
				bossAppId: 'INTHvj3cbPjeXOIp',
				titleId: 0x00040000001B7400n,
				titleRegion: 'EUR',
				name: 'Pic-a-Pix Colour',
				tasks: ['NEWPACK']
			},
			{
				bossAppId: 'yYddhP0UtHK9WfXf',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['item']
			},
			{
				bossAppId: 'oRUi0TW540yJfcFI',
				titleId: 0x0004000000165400n,
				titleRegion: 'UNK',
				name: 'Karaoke JOYSOUND',
				tasks: ['KRKJ001']
			},
			{
				bossAppId: 'YTCRfaHNkqkyAoR0',
				titleId: 0x0004000000036F00n,
				titleRegion: 'JPN',
				name: '花といきもの立体図鑑(Ver. 1.1)',
				tasks: ['sflower', 'sflocal']
			},
			{
				bossAppId: 'eOywu80lc2iSQrGQ',
				titleId: 0x0004000000079800n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ7E']
			},
			{
				bossAppId: 'Bjlq1Q32KdkSazF0',
				titleId: 0x0004000000179700n,
				titleRegion: 'UNK',
				name: 'Fire Emblem Fates Conquest',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: 'fY56qJDdLSRY1zwh',
				titleId: 0x00040000000F7D00n,
				titleRegion: 'EUR',
				name: 'Inazuma Eleven 3 Lightning Bolt',
				tasks: ['news', 'FGONLYT']
			},
			{
				bossAppId: 'wkGEp5JKVH1sHK4j',
				titleId: 0x0004000000055400n,
				titleRegion: 'USA',
				name: 'Rabbids Rumble',
				tasks: ['NEWRABS']
			},
			{
				bossAppId: 'zXfHuj8k9mgzKrpM',
				titleId: 0x0004000000196500n,
				titleRegion: 'USA',
				name: 'Nintendo presents Style Savvy: Fashion Forward',
				tasks: ['NEWS', 'POSTER', 'FGONLYT']
			},
			{
				bossAppId: 'gaM5Hqp8XiLyp3pU',
				titleId: 0x000400000008CD00n,
				titleRegion: 'USA',
				name: 'Sparkle Snapshots 3D',
				tasks: ['NadlTsk']
			},
			{
				bossAppId: 'LJ569qrUUTcV5MWa',
				titleId: 0x0004000000079A00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJZE']
			},
			{
				bossAppId: 'LvMjVLZITq73RRfN',
				titleId: 0x0004000000079B00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJXE']
			},
			{
				bossAppId: '8Urw573qCWPTMHt1',
				titleId: 0x0004000000079D00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJVE']
			},
			{
				bossAppId: '7oIHiYcoNKUFPXvo',
				titleId: 0x0004000000079C00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJYE']
			},
			{
				bossAppId: 'tGgHjsqB1lxz7laV',
				titleId: 0x000400000018AE00n,
				titleRegion: 'UNK',
				name: 'Disney Magical World 2',
				tasks: ['MC2NWS', 'FGONLYT']
			},
			{
				bossAppId: 'zd1wgUFX5L74rQjK',
				titleId: 0x00040000000F1F00n,
				titleRegion: 'UNK',
				name: 'Pokemon tretta LAB MAIN SYSTEM',
				tasks: ['Notice', 'FGONLYT']
			},
			{
				bossAppId: 'qJastY9KRjKlmpx7',
				titleId: 0x000400000009AC00n,
				titleRegion: 'UNK',
				name: 'Déco Photo 3D',
				tasks: ['NadlTsk']
			},
			{
				bossAppId: 'AUonPa828Z3PtkeG',
				titleId: 0x00040000000ECB00n,
				titleRegion: 'EUR',
				name: 'Skater Cat',
				tasks: ['boss1']
			},
			{
				bossAppId: '00ydKyJUl4PPMEM8',
				titleId: 0x000400000016E600n,
				titleRegion: 'EUR',
				name: 'Devil Survivor 2: Record Breaker',
				tasks: ['Ds2ocTk']
			},
			{
				bossAppId: 'Sv1HvEbP3JAcxqvf',
				titleId: 0x00040000000FC800n,
				titleRegion: 'UNK',
				name: 'honto for ニンテンドー3DS',
				tasks: ['honto00']
			},
			{
				bossAppId: '40Ox7iM6hyihJOiz',
				titleId: 0x000400000016B200n,
				titleRegion: 'JPN',
				name: 'ファイアーエムブレム if',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: 'yMkh08f1lW0DafIi',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JQ2J']
			},
			{
				bossAppId: 'Nctmz7ODGZtPf69M',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: 'o8ZLmDtyL1j7SXyQ',
				titleId: 0x0004000000144400n,
				titleRegion: 'JPN',
				name: 'ワンピース 超グランドバトル！Ｘ',
				tasks: ['compe']
			},
			{
				bossAppId: 'snhV1gVHgJLnjhid',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['BREAK01', 'BREAK03', 'BREAK02', 'FGONLYT']
			},
			{
				bossAppId: 'x7D5Xg4ezlaVAJyE',
				titleId: 0x00040000000ABD00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNJJ']
			},
			{
				bossAppId: 'jPDSZKCbiBNMsEq9',
				titleId: 0x0004000000182F00n,
				titleRegion: 'JPN',
				name: 'PUZZLE & DRAGONS CROSS GOD type',
				tasks: ['INFITEM', 'INFEVT', 'INFPUB', 'FGONLYT']
			},
			{
				bossAppId: 'im5wnzidQQs5uoKe',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['mesdat', 'dat']
			},
			{
				bossAppId: 'eFz4GxIjoCccrVSV',
				titleId: 0x0004000000031500n,
				titleRegion: 'JPN',
				name: 'nintendogs + cats',
				tasks: ['task_JP']
			},
			{
				bossAppId: 'KWrfnjzo2LKhZy4s',
				titleId: 0x00040000000C3A00n,
				titleRegion: 'JPN',
				name: 'デビルサバイバー2 ブレイクレコード',
				tasks: ['Ds2ocTk']
			},
			{
				bossAppId: '8qwKR8OSh5GOapqe',
				titleId: 0x000400300000B102n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['basho0', 'basho1', 'basho2', 'basho3', 'basho4', 'basho5', 'sysmsg1', 'sysmsg2', 'sysmsg3']
			},
			{
				bossAppId: 'j7tO10mcyMaz5ig6',
				titleId: 0x000400300000A102n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['basho5', 'basho4', 'basho0', 'basho1', 'basho2', 'basho3', 'sysmsg1', 'sysmsg2', 'sysmsg3']
			},
			{
				bossAppId: 'kRlrRG3XMEZShz9a',
				titleId: 0x0004001000028900n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['BGM1', 'BGM2', 'TIGER1']
			},
			{
				bossAppId: 'VPFqk5XKRlkeei6V',
				titleId: 0x000400300000A902n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['basho0', 'basho1', 'basho2', 'basho3', 'basho4', 'basho5', 'sysmsg1', 'sysmsg2', 'sysmsg3']
			},
			{
				bossAppId: 'pgNuDMNihGLmz8EQ',
				titleId: 0x00040000000AAD00n,
				titleRegion: 'JPN',
				name: 'Crashmo',
				tasks: ['JAU']
			},
			{
				bossAppId: 'HiSDUEw0agNVyQQh',
				titleId: 0x0004000000090700n,
				titleRegion: 'TWN',
				name: 'nintendogs + cats',
				tasks: ['task_CH', 'task_TW']
			},
			{
				bossAppId: 'dnfsqL9yQI945m6N',
				titleId: 0x0004000000160A00n,
				titleRegion: 'JPN',
				name: 'Greeting cards',
				tasks: ['KGCTask']
			},
			{
				bossAppId: '0AzfphwTbGD6PV9y',
				titleId: 0x00040000000DC900n,
				titleRegion: 'JPN',
				name: 'ちび☆デビ！２ ～魔法のゆめえほん～',
				tasks: ['chibi2']
			},
			{
				bossAppId: 'CU4vwXZB68V4M5dd',
				titleId: 0x000400000005D100n,
				titleRegion: 'JPN',
				name: 'GIRLS MODE よくばり宣言！　トキメキUP！',
				tasks: ['girls', 'info', 'GMTM', 'plus']
			},
			{
				bossAppId: 'SAV0iYvYj2VU3WLm',
				titleId: 0x00040000000A3500n,
				titleRegion: 'UNK',
				name: 'Skylanders Giants™',
				tasks: ['SLGTASK']
			},
			{
				bossAppId: 'HfTkA7wv9Xq7uCba',
				titleId: 0x00040000000A9800n,
				titleRegion: 'JPN',
				name: 'モデル☆おしゃれオーディション プラチナ',
				tasks: ['MO3000', 'MO3001']
			},
			{
				bossAppId: 'pIjCA0tlmrOQXZSx',
				titleId: 0x0004000000170900n,
				titleRegion: 'JPN',
				name: 'Nobunaga\'s Ambition 2',
				tasks: ['NA2F000']
			},
			{
				bossAppId: 'RjlyCZV4WuOMLhdI',
				titleId: 0x00040000000E9000n,
				titleRegion: 'JPN',
				name: 'JUMP TRIALS SUPREME',
				tasks: ['dqu5vs9', 'x7a9u1y']
			},
			{
				bossAppId: 'yivdj3PrGaiLW2q4',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['GS6']
			},
			{
				bossAppId: '6KHx0Ly7P5BU2gMs',
				titleId: 0x0004000000039B00n,
				titleRegion: 'JPN',
				name: 'ポケットサッカーリーグ カルチョビット',
				tasks: ['hobbit1']
			},
			{
				bossAppId: 'qZJMRyERIxHiLC94',
				titleId: 0x0004000000090900n,
				titleRegion: 'TWN',
				name: 'nintendogs + cats',
				tasks: ['task_CH', 'task_TW']
			},
			{
				bossAppId: 'Vgw1b4CRc6tTJAuW',
				titleId: 0x00040000000F4900n,
				titleRegion: 'JPN',
				name: 'Gardening Mama Mama and Her Forest Friends',
				tasks: ['add-on']
			},
			{
				bossAppId: '51DuhF1iuLnlykWa',
				titleId: 0x0004000000169C00n,
				titleRegion: 'JPN',
				name: 'ちゃおイラストクラブ',
				tasks: ['BMDJFOR']
			},
			{
				bossAppId: 'Sx5rjDrrIqdlfck9',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['news']
			},
			{
				bossAppId: 'SAV0iYvYj2VU3WLm',
				titleId: 0x00040000000E7F00n,
				titleRegion: 'UNK',
				name: 'Skylanders SWAP Force™',
				tasks: ['SLGTASK']
			},
			{
				bossAppId: 'SAV0iYvYj2VU3WLm',
				titleId: 0x00040000000E6500n,
				titleRegion: 'USA',
				name: 'Skylanders SWAP Force™',
				tasks: ['SLGTASK']
			},
			{
				bossAppId: 'hKHhZ3jJeHOdJ1dh',
				titleId: 0x0004000000178000n,
				titleRegion: 'JPN',
				name: 'ドリームガール　プルミエ',
				tasks: ['MO5000', 'MO5001']
			},
			{
				bossAppId: 'SVCHF7ayaPXyV8da',
				titleId: 0x000400000012D700n,
				titleRegion: 'USA',
				name: 'Gardening Mama 2 Forest Friends',
				tasks: ['add-on']
			},
			{
				bossAppId: 'DRegPN9WZfUgWBa2',
				titleId: 0x0004000000090800n,
				titleRegion: 'TWN',
				name: 'nintendogs + cats',
				tasks: ['task_CH', 'task_TW']
			},
			{
				bossAppId: 'gSU6Tz36YEQi4zCC',
				titleId: 0x00040000000C9E00n,
				titleRegion: 'JPN',
				name: '実写でちびロボ！',
				tasks: ['mesdat', 'dat', 'mesdat2']
			},
			{
				bossAppId: 'SXDe1d24jEHW5Ddy',
				titleId: 0x000400000017B700n,
				titleRegion: 'UNK',
				name: 'Fire Emblem if',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: 'd9DVo37kDln5fsfx',
				titleId: 0x00040000000F9C00n,
				titleRegion: 'JPN',
				name: 'A Penguin\'s Troubles +',
				tasks: ['PGDL000']
			},
			{
				bossAppId: 'gt2GNl074uoLp9VR',
				titleId: 0x00040000000BAA00n,
				titleRegion: 'JPN',
				name: '逆転裁判５',
				tasks: ['GS5']
			},
			{
				bossAppId: 'VEC7I57wA8AL2D5C',
				titleId: 0x00040000000B6300n,
				titleRegion: 'UNK',
				name: 'Girls\' Fashion Shoot',
				tasks: ['MO2000', 'MO2001']
			},
			{
				bossAppId: 'nhIB89NAaMLIOJq5',
				titleId: 0x0004000000053600n,
				titleRegion: 'JPN',
				name: 'ペンギンの問題 ザ・ウォーズ　1.1',
				tasks: ['penwar0']
			},
			{
				bossAppId: 'K3cSIGJ2usdI91Mn',
				titleId: 0x0004000000078B00n,
				titleRegion: 'JPN',
				name: 'PROFESSOR LAYTON VS ACE ATTORNEY',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'jm9bQFGAHJxWREsU',
				titleId: 0x00040000000A4D00n,
				titleRegion: 'JPN',
				name: '戦国無双クロニクル　セカンド 更新データ',
				tasks: ['SC2DLC0']
			},
			{
				bossAppId: 'SAV0iYvYj2VU3WLm',
				titleId: 0x0004000000091D00n,
				titleRegion: 'USA',
				name: 'Skylanders Giants™',
				tasks: ['SLGTASK']
			},
			{
				bossAppId: 'QehlmytT9n95yB2j',
				titleId: 0x0004000000197F00n,
				titleRegion: 'JPN',
				name: 'アイカツスターズ！ ファーストアピール',
				tasks: ['AKT5F2P']
			},
			{
				bossAppId: 'EGcBTbh5QbT5PjmV',
				titleId: 0x0004000000156300n,
				titleRegion: 'JPN',
				name: 'SHIKAKUMARU',
				tasks: ['SAM01']
			},
			{
				bossAppId: 'iZWCrW72Sx50ObA4',
				titleId: 0x0004000000112800n,
				titleRegion: 'JPN',
				name: 'マギ 新たなる世界',
				tasks: ['mg20bst']
			},
			{
				bossAppId: 'r6xdZT62kmgPHbxK',
				titleId: 0x0004000000156A00n,
				titleRegion: 'JPN',
				name: 'SHIKAKUMARU',
				tasks: ['SAM02']
			},
			{
				bossAppId: '4zQ0tSdYf0MbtMcf',
				titleId: 0x00040000000C9500n,
				titleRegion: 'JPN',
				name: 'peakvox Mew Mew Train',
				tasks: ['3MD', '3MD2']
			},
			{
				bossAppId: 'UikW5d4DcNOUltN1',
				titleId: 0x0004000000156500n,
				titleRegion: 'JPN',
				name: 'SHIKAKUMARU',
				tasks: ['SAM03']
			},
			{
				bossAppId: '3B5MnqGceTBxIyHq',
				titleId: 0x00040000000FB200n,
				titleRegion: 'JPN',
				name: 'Nobunaga\'s Ambition',
				tasks: ['NA3DFR0']
			},
			{
				bossAppId: 'SAV0iYvYj2VU3WLm',
				titleId: 0x00040000000A3600n,
				titleRegion: 'UNK',
				name: 'Skylanders Giants™',
				tasks: ['SLGTASK']
			},
			{
				bossAppId: 'VEC7I57wA8AL2D5C',
				titleId: 0x00040000000B6F00n,
				titleRegion: 'UNK',
				name: 'Girls\' Fashion Shoot',
				tasks: ['MO2000']
			},
			{
				bossAppId: 'VEC7I57wA8AL2D5C',
				titleId: 0x0004000000065700n,
				titleRegion: 'JPN',
				name: 'ｎｉｃｏｌａ監修 モデル☆おしゃれオーディション２',
				tasks: ['MO2000', 'MO2001']
			},
			{
				bossAppId: 'RkgNduGP6rRkubPC',
				titleId: 0x0004000000068300n,
				titleRegion: 'UNK',
				name: 'とびだすプリクラ☆ キラデコレボリューション',
				tasks: ['NadlTsk']
			},
			{
				bossAppId: 'oqxYfft6J9X33Xcm',
				titleId: 0x0004000000170400n,
				titleRegion: 'JPN',
				name: 'nicopuchi',
				tasks: ['BNPJFOR']
			},
			{
				bossAppId: 'rS9N1JsddhwfKlVp',
				titleId: 0x000400000014DF00n,
				titleRegion: 'JPN',
				name: '戦国無双 Chronicle ３',
				tasks: ['SC3DLC0', 'FGONLYT']
			},
			{
				bossAppId: 'VEC7I57wA8AL2D5C',
				titleId: 0x00040000000B4800n,
				titleRegion: 'UNK',
				name: 'Girls\' Fashion Shoot',
				tasks: ['MO2000']
			},
			{
				bossAppId: '8xzpJYrYTQQLhs5U',
				titleId: 0x00040000000FB400n,
				titleRegion: 'JPN',
				name: 'モデル☆おしゃれオーディション ドリームガール',
				tasks: ['MO4000', 'MO4001']
			},
			{
				bossAppId: 'huaVwH8vmGDlynY5',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['0000001']
			},
			{
				bossAppId: 'gQdtAv8S5QqhAMq6',
				titleId: 0x00040000000F8000n,
				titleRegion: 'UNK',
				name: 'Inazuma Eleven 3 Team Ogre Attacks!',
				tasks: ['news', 'FGONLYT']
			},
			{
				bossAppId: 'TPqWmZW8y6NEWz9N',
				titleId: 0x000400000008B500n,
				titleRegion: 'UNK',
				name: 'MARIO KART 7',
				tasks: ['comm', 'ranking', 'ghost']
			},
			{
				bossAppId: '4813nyO3ACQf2cwz',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['item']
			},
			{
				bossAppId: 'sk1jvwem58tprBkZ',
				titleId: 0x0004000000032000n,
				titleRegion: 'JPN',
				name: 'DEAD OR ALIVE Dimensions',
				tasks: ['costume', 'foeevnt', 'info']
			},
			{
				bossAppId: 'crLAF7DBkd3coa3v',
				titleId: 0x0004000000030500n,
				titleRegion: 'JPN',
				name: 'SUPER STREET FIGHTER Ⅳ 3D EDITION',
				tasks: ['SPA4APP']
			},
			{
				bossAppId: '9DLWs8Zl50qCaWxp',
				titleId: 0x0004000000040200n,
				titleRegion: 'UNK',
				name: 'SAMURAI WARRIORS: Chronicles',
				tasks: ['JMCDLC0', 'JMCDLC1', 'JMCDLC2']
			},
			{
				bossAppId: 'gzPtSkOPonlun2Ug',
				titleId: 0x0004000000173B00n,
				titleRegion: 'EUR',
				name: 'SAMURAI WARRIORS: Chronicles 3',
				tasks: ['SC3DLC0', 'FGONLYT']
			},
			{
				bossAppId: 'J8jLC3PD2ERSNrmK',
				titleId: 0x000400000008CC00n,
				titleRegion: 'EUR',
				name: 'Sparkle Snapshots 3D',
				tasks: ['NadlTsk']
			},
			{
				bossAppId: 'HEMBJCoTyLKjm9pU',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['weekly']
			},
			{
				bossAppId: 'OTjVevatduCI863l',
				titleId: 0x00040000000F7B00n,
				titleRegion: 'EUR',
				name: 'Inazuma Eleven 3 Bomb Blast',
				tasks: ['news', 'FGONLYT']
			},
			{
				bossAppId: 'NiAJFnn4fyAAiggq',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['PTASK01', 'ITASK01', 'PTASK02']
			},
			{
				bossAppId: 'oHl1Ay3RPWlWngp3',
				titleId: 0x0004000000030B00n,
				titleRegion: 'JPN',
				name: 'nintendogs + cats',
				tasks: ['task_JP']
			},
			{
				bossAppId: 'V3xe0ZHtBxzJwJtL',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'v5fxzRdEaBW5ujTi',
				titleId: 0x00040000000CC900n,
				titleRegion: 'KOR',
				name: 'Swapnote',
				tasks: ['JFR_NT1', 'JFR_NT2', 'JFR_NT3', 'JFR_LS2', 'JFR_AP2', 'JFR_DFR', 'JFR_GM2', 'JFR_U01', 'JFR_U02', 'JFR_U03', 'JFR_U04', 'JFR_U05', 'JFR_U06', 'JFR_U07', 'JFR_UUS']
			},
			{
				bossAppId: 'OjI5Ysd6x9mFk22c',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['zdltdat', 'FGONLYT']
			},
			{
				bossAppId: '99qH2qwTlJy9XDKs',
				titleId: 0x0004000000030F00n,
				titleRegion: 'KOR',
				name: 'nintendogs + cats',
				tasks: ['task_KR']
			},
			{
				bossAppId: '7Fqa3EZYYlvKEh5v',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JQ5J']
			},
			{
				bossAppId: '4r5wpBYnaf6rldJ3',
				titleId: 0x00040000000F7E00n,
				titleRegion: 'UNK',
				name: 'Inazuma Eleven 3 Lightning Bolt',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: '3ERCXw1170g54UBs',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JC9K']
			},
			{
				bossAppId: '9dXYzFjKdKbJMCWe',
				titleId: 0x0004001000027800n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['MIIDATA', 'PANEL', 'PANELLM', 'LEGEND', 'UPDATE']
			},
			{
				bossAppId: 'hMwDQ4myueRLe1J9',
				titleId: 0x0004000000092E00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JZ8J']
			},
			{
				bossAppId: 'L7j0ivgZfXSskmmY',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JMCDLC0', 'JMCDLC1', 'JMCDLC2']
			},
			{
				bossAppId: 'CAsKat7WKddnAZX3',
				titleId: 0x000400000019F600n,
				titleRegion: 'JPN',
				name: 'Girls Mode 4 スター☆スタイリスト',
				tasks: ['NEWS', 'POSTER']
			},
			{
				bossAppId: 'S8m7Nskf5LDHOAFr',
				titleId: 0x0004000000182E00n,
				titleRegion: 'JPN',
				name: 'PUZZLE & DRAGONS CROSS DRAGON type',
				tasks: ['INFITEM', 'INFEVT', 'INFPUB', 'FGONLYT']
			},
			{
				bossAppId: 's9byficX77gemj2B',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'hXDTHQ4WSEmdUHmH',
				titleId: 0x000400000012D800n,
				titleRegion: 'JPN',
				name: 'GIRLS MODE 3　キラキラ☆コーデ',
				tasks: ['NEWS', 'POSTER', 'FGONLYT']
			},
			{
				bossAppId: 'txq0HfojeCsTXwdB',
				titleId: 0x0004001000028800n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['PANELLM', 'MIIDATA', 'PANEL', 'LEGEND']
			},
			{
				bossAppId: 'v77n3f1JniCBO6DY',
				titleId: 0x00040000000EC000n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SPAJ']
			},
			{
				bossAppId: 'IWu6JntKmBfUFK0D',
				titleId: 0x0004000000105E00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SPFJ']
			},
			{
				bossAppId: 'x6bxVnGPunxrUEvR',
				titleId: 0x00040000000B9700n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SN2J']
			},
			{
				bossAppId: 'oYzBvnIepXcRAWB8',
				titleId: 0x0004000000155D00n,
				titleRegion: 'KOR',
				name: 'Cooking Mama',
				tasks: ['weekly']
			},
			{
				bossAppId: 'wSajRGAQdY6dffMd',
				titleId: 0x000400000006C500n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJGJ']
			},
			{
				bossAppId: 'riNWIl9p0ZdQORe5',
				titleId: 0x0004000000095700n,
				titleRegion: 'JPN',
				name: 'New Art Academy',
				tasks: ['london1']
			},
			{
				bossAppId: 'IGctFNjjb8E1TONI',
				titleId: 0x000400000018F100n,
				titleRegion: 'USA',
				name: 'Dragon Quest VIII',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'XT7XAO9p7C9Rfvvx',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JQZJ']
			},
			{
				bossAppId: 'LUX1uLHXK82phCiX',
				titleId: 0x00040000001AB900n,
				titleRegion: 'EUR',
				name: 'Team Kirby Clash Deluxe',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'uzKXEvs4hNMA25oG',
				titleId: 0x0004000000137800n,
				titleRegion: 'EUR',
				name: 'Puzzle & Dragons Z + Super Mario Bros. Edition',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'iR1A5X1wiLEkSynO',
				titleId: 0x0004000000167C00n,
				titleRegion: 'KOR',
				name: 'Super Smash Bros. for Nintendo 3DS',
				tasks: ['NEWS', 'amiibo', 'FGONLYT']
			},
			{
				bossAppId: '24XiNVrAmhfjS82s',
				titleId: 0x0004000000137700n,
				titleRegion: 'USA',
				name: 'Puzzle & Dragons Z + Super Mario Bros. Edition',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'S2OgfKUn0ZVKpO2G',
				titleId: 0x000400000004DC00n,
				titleRegion: 'UNK',
				name: 'Imagine™ Fashion World 3D',
				tasks: ['NL00001']
			},
			{
				bossAppId: 'drVvdr4bzLr25i9t',
				titleId: 0x00040000001A0000n,
				titleRegion: 'JPN',
				name: 'Team Kirby Clash Deluxe',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'l3gOdKu5CZ45zxTk',
				titleId: 0x000400000009AD00n,
				titleRegion: 'UNK',
				name: 'Foto Glitter 3D',
				tasks: ['NadlTsk']
			},
			{
				bossAppId: '0AgBH2eLZV5YqTMW',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['0000001']
			},
			{
				bossAppId: '4n7UxjbCGnuq5FYy',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['0000001']
			},
			{
				bossAppId: '7Cs4OOUfDbCC9su5',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['0000001']
			},
			{
				bossAppId: 'Duu3faN13x95aVMY',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['0000001']
			},
			{
				bossAppId: 'ERl9vWxc1lKwBCYk',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['0000001']
			},
			{
				bossAppId: 'NbmO38IyGwh7nt7t',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['0000001']
			},
			{
				bossAppId: 'X00vNlT4qqcyzxlL',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['0000001']
			},
			{
				bossAppId: 'XUWPufbAdkuBsj26',
				titleId: 0x0004000000198500n,
				titleRegion: 'KOR',
				name: 'Dragon Quest VIII',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'YqwaX4YDDsNecFub',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['miku_01', 'miku']
			},
			{
				bossAppId: 'oX0GI0HwZvOJHMo9',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['0000001']
			},
			{
				bossAppId: 'tY7USAZRiWlUgQVe',
				titleId: 0x0004000000047800n,
				titleRegion: 'USA',
				name: 'Imagine™ Fashion Life',
				tasks: ['NL00001']
			},
			{
				bossAppId: 'wJoxCKvP6AFEHecL',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['0000001']
			},
			{
				bossAppId: 'wTy7ND4OqUdfR7nH',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['0000001']
			},
			{
				bossAppId: 'xSycjLbQyJJBlc7x',
				titleId: 0x000400000015CD00n,
				titleRegion: 'JPN',
				name: 'Dragon Quest VIII',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'xedkyOsho6iccqUT',
				titleId: 0x000400000018F200n,
				titleRegion: 'EUR',
				name: 'Dragon Quest VIII',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'y1kgSu9oYpgC1oOm',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['0000001']
			},
			{
				bossAppId: '2qmhIndG8vluZoEO',
				titleId: 0x000400000008C800n,
				titleRegion: 'JPN',
				name: 'DRAGON QUEST Ⅹ Morph de Battle',
				tasks: ['lucky01', 'lucky03', 'lucky02']
			},
			{
				bossAppId: 'SDIA7fBPxg6X01AW',
				titleId: 0x0004001000026800n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['PANEL', 'MIIDATA', 'LEGEND', 'PANELLM']
			},
			{
				bossAppId: 'oUTbEtsyaJ7Fzx4h',
				titleId: 0x000400000006B600n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJYJ']
			},
			{
				bossAppId: 'ZwMc34IYS96zWJRD',
				titleId: 0x00040000000F7F00n,
				titleRegion: 'EUR',
				name: 'Inazuma Eleven 3 Team Ogre Attacks!',
				tasks: ['news', 'FGONLYT']
			},
			{
				bossAppId: '4mMi9ll6zFrSftt9',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JQ4J']
			},
			{
				bossAppId: 'MSN04ONcEZyPL5dW',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SPEJ']
			},
			{
				bossAppId: '2hZYkL2D64eCrTzg',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['MESSAGE', 'DL']
			},
			{
				bossAppId: 'FMhu53ZtDLnz2ZZ1',
				titleId: 0x0004000000168600n,
				titleRegion: 'TWN',
				name: 'Super Smash Bros. for Nintendo 3DS',
				tasks: ['NEWS', 'amiibo', 'FGONLYT']
			},
			{
				bossAppId: 'xjMBeunnHUfxuK2d',
				titleId: 0x0004000000151F00n,
				titleRegion: 'TWN',
				name: 'Pokémon Art Academy',
				tasks: ['pnote', 'FGONLYT']
			},
			{
				bossAppId: 'kuQRrwInvnbJvfa6',
				titleId: 0x0004000000143400n,
				titleRegion: 'UNK',
				name: 'New SUPER MARIO BROS. 2: Gold Edition',
				tasks: ['present', 'patch']
			},
			{
				bossAppId: 'HWC1oxxoFRhulvSL',
				titleId: 0x00040000000B9600n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNZJ']
			},
			{
				bossAppId: 'cxWp2lsjKrG7diwk',
				titleId: 0x00040000000B9200n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNVJ']
			},
			{
				bossAppId: 'h8S6cmA4FdBvPYZc',
				titleId: 0x00040000000EC100n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SPBJ']
			},
			{
				bossAppId: 'i3iGTnVbl4tKi9KW',
				titleId: 0x00040000000EBF00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SN9J']
			},
			{
				bossAppId: 'NxEAqX0zZl4f0Im0',
				titleId: 0x00040000000FA500n,
				titleRegion: 'JPN',
				name: 'クッキングママ５',
				tasks: ['weekly']
			},
			{
				bossAppId: 'N6VoGN3wJ698hOiI',
				titleId: 0x0004000000106000n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SPHJ']
			},
			{
				bossAppId: '9SCQWB4mFxhoXyQK',
				titleId: 0x00040000001AE200n,
				titleRegion: 'JPN',
				name: '大逆転裁判２ ―成歩堂龍ノ介の覺悟―',
				tasks: ['SHOLMES']
			},
			{
				bossAppId: 'pdR21q4ZRkxaSeVJ',
				titleId: 0x000400000006BC00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJSJ']
			},
			{
				bossAppId: '3BraiaIl0mpnuoOA',
				titleId: 0x00040000000AA000n,
				titleRegion: 'JPN',
				name: 'Unknown',
				tasks: ['MAJ']
			},
			{
				bossAppId: 'YVH4WfoFszQwwG3w',
				titleId: 0x00040000000CCA00n,
				titleRegion: 'TWN',
				name: 'Swapnote',
				tasks: ['JFR_LS2', 'JFR_NT1', 'JFR_NT2', 'JFR_NT3', 'JFR_AP2', 'JFR_DFR', 'JFR_GM2', 'JFR_U01', 'JFR_U02', 'JFR_U03', 'JFR_U04', 'JFR_U05', 'JFR_U06', 'JFR_U07', 'JFR_UUS']
			},
			{
				bossAppId: 'DciJTpUDHw8APohR',
				titleId: 0x000400000009AB00n,
				titleRegion: 'UNK',
				name: 'Foto-Zauber 3D',
				tasks: ['NadlTsk']
			},
			{
				bossAppId: 'HLLrgikagMK0pzbs',
				titleId: 0x000400000006B000n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ6J']
			},
			{
				bossAppId: 'prddiG9hlRiH8NEC',
				titleId: 0x000400000006AF00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ7J']
			},
			{
				bossAppId: 'cmL3N7HUvMJGfGFp',
				titleId: 0x000400000006B100n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ5J']
			},
			{
				bossAppId: 'Ryh3zAYKR1zjJWc3',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['zdltdat']
			},
			{
				bossAppId: 'HvwgRXicx4vCBFTL',
				titleId: 0x0004000000199000n,
				titleRegion: 'KOR',
				name: 'Animal Crossing: New Leaf - Welcome amiibo',
				tasks: ['news', 'news_p', 'dream', 'dream_p', 'FGONLYT']
			},
			{
				bossAppId: 'OIC58iiMakdqQSLH',
				titleId: 0x00040000000C4F00n,
				titleRegion: 'KOR',
				name: 'Nintendo presents: New Style Boutique',
				tasks: ['GMTM', 'girls', 'info']
			},
			{
				bossAppId: 'J0ovIyLP9tYaJqaq',
				titleId: 0x00040000000D1C00n,
				titleRegion: 'JPN',
				name: 'Unknown',
				tasks: ['MBE']
			},
			{
				bossAppId: 'BAIXhLmD2rGJVAvQ',
				titleId: 0x00040000000AA400n,
				titleRegion: 'JPN',
				name: 'Unknown',
				tasks: ['MAL']
			},
			{
				bossAppId: 'AOGimz8AhOCZLJks',
				titleId: 0x00040000000D1B00n,
				titleRegion: 'JPN',
				name: 'Unknown',
				tasks: ['MBD']
			},
			{
				bossAppId: 'MSswwTMHhCzsTg4l',
				titleId: 0x00040000000AA300n,
				titleRegion: 'JPN',
				name: 'Unknown',
				tasks: ['MAK']
			},
			{
				bossAppId: '83j0DZ0YuEbd6OTR',
				titleId: 0x000400000006B700n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJXJ']
			},
			{
				bossAppId: '0kXLgixMNsmA8Ulw',
				titleId: 0x000400000006AE00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ8J']
			},
			{
				bossAppId: '34pqkzXxOsXTju6N',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JQBJ']
			},
			{
				bossAppId: '3mqMq8p8Vu7clovO',
				titleId: 0x000400000006C800n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJDJ']
			},
			{
				bossAppId: '4z69DLEmm8eWmAWh',
				titleId: 0x00040000000AC100n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNNJ']
			},
			{
				bossAppId: '7NAqDIHJVMr4Svya',
				titleId: 0x0004000000092F00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JZ7J']
			},
			{
				bossAppId: 'A9ikIHjkbhlbkQGZ',
				titleId: 0x000400000006C700n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJEJ']
			},
			{
				bossAppId: 'aA9hBmp4EagWTNM5',
				titleId: 0x000400000006AD00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ9J']
			},
			{
				bossAppId: 'AY0oNJfCHmoAqyGJ',
				titleId: 0x000400000006C200n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJLJ']
			},
			{
				bossAppId: 'BDgoKPBE6iIm6GvU',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JQYJ']
			},
			{
				bossAppId: 'BnYCVYAGDPA2ODsF',
				titleId: 0x000400000006BB00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJTJ']
			},
			{
				bossAppId: 'bO0kDGfd70dY8jP7',
				titleId: 0x000400000007B500n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JQEJ']
			},
			{
				bossAppId: 'bP3RO5aNzfiUhTqG',
				titleId: 0x0004000000110D00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SPKJ']
			},
			{
				bossAppId: 'BXzMU4QDn6gJzHL8',
				titleId: 0x000400000006C900n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJCJ']
			},
			{
				bossAppId: 'dCdWyWjvMdwC55jp',
				titleId: 0x00040000000B9500n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNYJ']
			},
			{
				bossAppId: 'eUDyHqSSYL8Dbnw7',
				titleId: 0x000400000006BE00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJQJ']
			},
			{
				bossAppId: 'gH85V9hCAuisHPiI',
				titleId: 0x00040000000A9D00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNSJ']
			},
			{
				bossAppId: 'gIKNS5K3QTXk8uZ0',
				titleId: 0x000400000006B300n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ3J']
			},
			{
				bossAppId: 'IwPki1shz2Sa5Jtf',
				titleId: 0x000400000006C000n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJNJ']
			},
			{
				bossAppId: 'kIk3rjwlpys7cBgb',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'MjC52YHyd1mUxL3K',
				titleId: 0x000400000006B500n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJZJ']
			},
			{
				bossAppId: 'Mrv7MaHG7NUKIssp',
				titleId: 0x00040000000ABF00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNLJ']
			},
			{
				bossAppId: 'mvFYPcqk08wjN1Lf',
				titleId: 0x0004000000105F00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SPGJ']
			},
			{
				bossAppId: 'NSfT7yEow0T98638',
				titleId: 0x000400000007B700n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JQGJ']
			},
			{
				bossAppId: 'O5RNJSKQSbaGMWMe',
				titleId: 0x000400000006C300n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJKJ']
			},
			{
				bossAppId: 'O7IQrnoLPrUckjY6',
				titleId: 0x000400000006C400n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJHJ']
			},
			{
				bossAppId: 'PR5223DvK2yJeLm7',
				titleId: 0x00040000000A0300n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNDJ']
			},
			{
				bossAppId: 'QI6XYVa7oCGM7PSb',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SN5J']
			},
			{
				bossAppId: 'QIr38311UsvE7kpy',
				titleId: 0x000400000006C600n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJFJ']
			},
			{
				bossAppId: 'rbxZVYCrNIIZiV1Y',
				titleId: 0x00040000000B9400n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNXJ']
			},
			{
				bossAppId: 'Rk3lD7SViJwXHqxY',
				titleId: 0x00040000000A0100n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNCJ']
			},
			{
				bossAppId: 's332O6HVmb1mrZlJ',
				titleId: 0x000400000007B100n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JQAJ']
			},
			{
				bossAppId: 'szZ7fUtxGj3C8vAm',
				titleId: 0x000400000006BF00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJPJ']
			},
			{
				bossAppId: 'ufWtleWnZVr175yL',
				titleId: 0x000400000006B900n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJVJ']
			},
			{
				bossAppId: 'uZp0tj5WSQXC1ajP',
				titleId: 0x00040000000A9C00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNRJ']
			},
			{
				bossAppId: 'VaaaQIH2Y4MCHZoE',
				titleId: 0x000400000006B400n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ2J']
			},
			{
				bossAppId: 'ValTqsbfLsdprJ9D',
				titleId: 0x00040000000B9300n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNWJ']
			},
			{
				bossAppId: 'VJotYqkLqCNb6WEZ',
				titleId: 0x000400000006C100n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJMJ']
			},
			{
				bossAppId: 'vWajW15RdM4DoMkY',
				titleId: 0x000400000007B600n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JQFJ']
			},
			{
				bossAppId: 'wiDPs6x6gT5GuQ0L',
				titleId: 0x000400000006B800n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJWJ']
			},
			{
				bossAppId: 'wIfkwczLlzXY1Ih0',
				titleId: 0x00040000000A0400n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNEJ']
			},
			{
				bossAppId: 'WvnKyyWlllNC1P3l',
				titleId: 0x00040000000A9B00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNQJ']
			},
			{
				bossAppId: 'x8ak29C2mgHwjQm5',
				titleId: 0x000400000006B200n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJ4J']
			},
			{
				bossAppId: 'XAdIxXWPa1PDWMkm',
				titleId: 0x0004000000150A00n,
				titleRegion: 'UNK',
				name: 'Imagine® Collection',
				tasks: ['RACHEL']
			},
			{
				bossAppId: 'XH9X43PmZ9lGVT7i',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JQ6J']
			},
			{
				bossAppId: 'Yhg9sWpNbOT95HTu',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'yMP5bCaKlAgItWqV',
				titleId: 0x00040000000D9200n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SN6J']
			},
			{
				bossAppId: 'yoN5MAgfB2yTKrLz',
				titleId: 0x000400000006BA00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JJUJ']
			},
			{
				bossAppId: 'zztKIdGngfCS9cS5',
				titleId: 0x00040000000A9A00n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['SNPJ']
			},
			{
				bossAppId: 'Bo1owHMnKHjFK2Nk',
				titleId: 0x0004000000143300n,
				titleRegion: 'UNK',
				name: 'New SUPER MARIO BROS. 2: Gold Edition',
				tasks: ['patch', 'present']
			},
			{
				bossAppId: 'MLJEOnEgGcwd5uaP',
				titleId: 0x00040000000F7C00n,
				titleRegion: 'UNK',
				name: 'Inazuma Eleven 3 Bomb Blast',
				tasks: ['news', 'FGONLYT']
			},
			{
				bossAppId: '1j4M12R6obSARq8y',
				titleId: 0x0004000000086500n,
				titleRegion: 'UNK',
				name: 'Animal Crossing New Leaf',
				tasks: ['news', 'pnews', 'FGONLYT', 'dream', 'dream_p', 'news_p']
			},
			{
				bossAppId: '3l15Yk6cOm0AWsSP',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'BUvZ7pfEEhcLt4B2',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['news']
			},
			{
				bossAppId: 'Qq4luhjWR94QqvhX',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['daily']
			},
			{
				bossAppId: 'f9sKNCJ94RghSSyg',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['GS5']
			},
			{
				bossAppId: 'CnnviXAnc0qGGTio',
				titleId: 0x00040000000FEB00n,
				titleRegion: 'KOR',
				name: 'Phoenix Wright: Ace Attorney Dual Destinies',
				tasks: ['GS5']
			},
			{
				bossAppId: 'fMTQWnFhZQ2BijI5',
				titleId: 0x000400000017B800n,
				titleRegion: 'TWN',
				name: 'Fire Emblem if',
				tasks: ['TASK00', 'TASK02']
			},
			{
				bossAppId: 'Xv543XtNNYZU2OXz',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'eyCw6Qph1Hz1uQmC',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['JAU']
			},
			{
				bossAppId: 'jeUQ3nnY70ddJ87q',
				titleId: 0x000400000009AE00n,
				titleRegion: 'UNK',
				name: 'Cámara Glamour 3D',
				tasks: ['NadlTsk']
			},
			{
				bossAppId: 'bRWXguqQXXAT99Th',
				titleId: 0x00040000001BC900n,
				titleRegion: 'TWN',
				name: 'Fire Emblem Echoes: Shadows of Valentia',
				tasks: ['TASK00', 'FGONLYT', 'TASK01']
			},
			{
				bossAppId: '1XCuNDvhVlp5r7mO',
				titleId: 0x00040000000C3900n,
				titleRegion: 'JPN',
				name: 'パズドラＺ',
				tasks: ['FGONLYT', 'PDZDLDG', 'PDZDLNP', 'PDZDLTI']
			},
			{
				bossAppId: '7f094kCjE5HDVGlu',
				titleId: 0x00040000000CBD00n,
				titleRegion: 'JPN',
				name: 'Oshaberi-Chat',
				tasks: ['JCTTask']
			},
			{
				bossAppId: 'aOJyK9TocYWjxMRR',
				titleId: 0x000400000004A900n,
				titleRegion: 'UNK',
				name: 'Nintendo Video',
				tasks: ['ESJ_CNF', 'ESJ_MD1', 'ESJ_MD2', 'ESJ_MD3', 'ESJ_MD4']
			},
			{
				bossAppId: 'G0VUurQf4EVYe37v',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['0ER_CNF', '1ER_DBN', '2ER_DCM', '3ER_AX1', '4ER_CX1', '5ER_AX2', '6ER_CX2', '7ER_AX3', '8ER_CX3', '9ER_NTD']
			},
			{
				bossAppId: '3PSCke6Q3B84IzWl',
				titleId: 0x0004000000031900n,
				titleRegion: 'KOR',
				name: 'nintendogs + cats',
				tasks: ['task_KR']
			},
			{
				bossAppId: 'XaphN80NdywuA9Ef',
				titleId: 0x0004000000155E00n,
				titleRegion: 'KOR',
				name: 'Gardening Mama',
				tasks: ['add-on']
			},
			{
				bossAppId: '0hYP8YjQTWpdlt0v',
				titleId: 0x0004000000031400n,
				titleRegion: 'KOR',
				name: 'nintendogs + cats',
				tasks: ['task_KR']
			},
			{
				bossAppId: '7HXSa828OHpIlsMh',
				titleId: 0x000400000012C700n,
				titleRegion: 'KOR',
				name: 'Disney Magical World',
				tasks: ['BNMCASI', 'BNMCASL', 'FGONLYT']
			},
			{
				bossAppId: 'j3JOMyqvsV4ocbUM',
				titleId: 0x0004000000150B00n,
				titleRegion: 'KOR',
				name: 'Pokémon Art Academy',
				tasks: ['FGONLYT', 'pnote']
			},
			{
				bossAppId: 'l0BkjqC5MI1bEY29',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['Ds2ocTk']
			},
			{
				bossAppId: 'sKFrnzQCMkGb60y7',
				titleId: 0x0004000000106300n,
				titleRegion: 'KOR',
				name: 'Mario Golf: World Tour',
				tasks: ['FGONLYT', 'spnt_t', 'spnt_x']
			},
			{
				bossAppId: '3V3eHMNiNmweRqQO',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'HFnqrJv4fmyO5ItT',
				titleId: 0x0004000000091F00n,
				titleRegion: 'KOR',
				name: 'Model Audition Superstar 2 ',
				tasks: ['MO2000', 'MO2001']
			},
			{
				bossAppId: 'IyMJMSHvuD2nC8r1',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'JJVi8mFl1LRVk4gS',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'VQU2jX0YCWHynn03',
				titleId: 0x000400000015A700n,
				titleRegion: 'KOR',
				name: 'Puzzle & Dragons Z + Super Mario Bros. Edition',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: 'cm0cPPTXpEkGEeII',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'y4Q3Z35IQzh6nWds',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['FGONLYT', 'news']
			},
			{
				bossAppId: 'aKd4hjqxg87UDbwy',
				titleId: 0x000400000018F900n,
				titleRegion: 'KOR',
				name: 'Phoenix Wright: Ace Attorney Spirit of Justice',
				tasks: ['GS6']
			},
			{
				bossAppId: '4q11abiKEAOBaBMD',
				titleId: 0x000400000016D100n,
				titleRegion: 'TWN',
				name: 'Puzzle & Dragons Z + Super Mario Bros. Edition',
				tasks: ['FGONLYT']
			},
			{
				bossAppId: '3yire4GGq6BfeD71',
				titleId: 0x0n,
				titleRegion: 'UNK',
				name: 'Unknown',
				tasks: ['news']
			}
		]
	};
}
