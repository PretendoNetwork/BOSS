import mongoose from 'mongoose';
import { ICECData, ICECDataMethods, CECDataModel } from '@/types/mongoose/cec-data';

const CECDataSchema = new mongoose.Schema<ICECData, CECDataModel, ICECDataMethods>({
	creator_pid: Number,
	game_id: Number,
	data: String,
	size: Number,
	created: BigInt,
	updated: BigInt
}, { id: false });

export const CECData: CECDataModel = mongoose.model<ICECData, CECDataModel>('CECData', CECDataSchema);
