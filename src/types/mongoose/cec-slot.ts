import { Model, HydratedDocument } from 'mongoose';

export interface ICECSlot {
	creator_pid: number;
	game_id: number;
	latest_data_id: string;
}

export interface ICECSlotMethods {}

interface ICECSlotQueryHelpers {}

export interface CECSlotModel extends Model<ICECSlot, ICECSlotQueryHelpers, ICECSlotMethods> {}

export type HydratedCECSlotDocument = HydratedDocument<ICECSlot, ICECSlotMethods>
