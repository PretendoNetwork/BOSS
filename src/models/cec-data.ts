import mongoose from 'mongoose';
import { ICECData, ICECDataMethods, CECDataModel } from '@/types/mongoose/cec-data';

const CECDataSchema = new mongoose.Schema<ICECData, CECDataModel, ICECDataMethods>({
	creator_pid: Number,
	game_id: Number,
	data: String,
	data_hash: String,
	size: Number,
	created: BigInt
});

export const CECData = mongoose.model<ICECData, CECDataModel>('CECData', CECDataSchema);
