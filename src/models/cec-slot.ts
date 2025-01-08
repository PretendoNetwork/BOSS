import mongoose from 'mongoose';
import type { ICECSlot, ICECSlotMethods, CECSlotModel } from '@/types/mongoose/cec-slot';

const CECSlotSchema = new mongoose.Schema<ICECSlot, CECSlotModel, ICECSlotMethods>({
	creator_pid: Number,
	game_id: Number,
	latest_data_id: String
});

export const CECSlot = mongoose.model<ICECSlot, CECSlotModel>('CECSlot', CECSlotSchema);
