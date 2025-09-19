import mongoose from 'mongoose';
import type { ICECSlot, ICECSlotMethods, CECSlotModel } from '@/types/mongoose/cec-slot';

const CECSlotSchema = new mongoose.Schema<ICECSlot, CECSlotModel, ICECSlotMethods>({
	creator_pid: Number,
	game_id: Number,
	latest_data_id: String
});

CECSlotSchema.index({ creator_pid: 1, game_id: 1 });
CECSlotSchema.index({ latest_data_id: 1 });

export const CECSlot = mongoose.model<ICECSlot, CECSlotModel>('CECSlot', CECSlotSchema);
