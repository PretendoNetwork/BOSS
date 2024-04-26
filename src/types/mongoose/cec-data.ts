import { Model, HydratedDocument } from 'mongoose';

export interface ICECData {
	creator_pid: number;
	game_id: number;
	data: string;
	size: number;
	created: bigint;
	updated: bigint;
}

export interface ICECDataMethods {}

interface ICECDataQueryHelpers {}

export interface CECDataModel extends Model<ICECData, ICECDataQueryHelpers, ICECDataMethods> {}

export type HydratedCECDataDocument = HydratedDocument<ICECData, ICECDataMethods>
