import mongoose, { Document, Schema } from 'mongoose';

export interface ITrade {
  name: string;
}

export interface ITradeModel extends Document, ITrade {}

const TradeSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<ITradeModel>('Trade', TradeSchema);
