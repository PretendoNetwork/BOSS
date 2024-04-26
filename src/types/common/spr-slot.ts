// * Extracted from https://github.com/MrNbaYoh/libstreetpass/blob/master/include/cec/send_mode.hpp
export enum SendMode {
	Exchange,
	RecvOnly,
	SendOnly,
	SendRecv,
}

export type SPRSlot = {
	sendMode: SendMode;
	gameID: number;
	size: number;
	data: Buffer;
};
