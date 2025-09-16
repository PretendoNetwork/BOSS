import mongoose from 'mongoose';
import type { ICECData, ICECDataMethods, CECDataModel } from '@/types/mongoose/cec-data';

const CECDataSchema = new mongoose.Schema<ICECData, CECDataModel, ICECDataMethods>({
	creator_pid: Number,
	game_id: Number,
	data: String,
	file_key: String,
	data_hash: String,
	size: Number,
	created: { type: BigInt, index: true }
});

CECDataSchema.index({ creator_pid: 1, game_id: 1 });

export const CECData = mongoose.model<ICECData, CECDataModel>('CECData', CECDataSchema);
