import type { Model, HydratedDocument } from 'mongoose';

export interface ICECData {
	creator_pid: number;
	game_id: number;
	data: string;
	data_hash: string;
	size: number;
	file_key: string;
	created: bigint;
}

export interface ICECDataMethods {}

interface ICECDataQueryHelpers {}

export type CECDataModel = Model<ICECData, ICECDataQueryHelpers, ICECDataMethods>;

export type HydratedCECDataDocument = HydratedDocument<ICECData, ICECDataMethods>;
