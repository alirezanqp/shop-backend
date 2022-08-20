import { Schema, model } from 'mongoose';
import User from '../interface/users.interface';

const userSchema: Schema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    totale_orders: {
      type: Number,
      required: true,
    },
    wallet: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const userModel = model<User>('User', userSchema);

export default userModel;
