export enum CTRSystemModel {
	CTR, // * Nintendo 3DS
	SPR, // * Nintendo 3DS XL
	KTR, // * New Nintendo 3DS
	FTR, // * Nintendo 2DS
	RED, // * New Nintendo 3DS XL
	JAN  // * New Nintendo 2DS XL
}

export type UserAgentInfo = {
	deviceID?: number;
	localFriendCodeSeed?: bigint;
	userPID: number;
};
