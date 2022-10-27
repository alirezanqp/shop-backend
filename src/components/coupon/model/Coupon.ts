import { model, Schema } from 'mongoose';
import Coupon from '../interface/coupon.interface';
import CouponStatus from './order.status';

const couponSchema: Schema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      default: 0,
    },
    used: {
      type: Number,
      default: 0,
    },
    expires_at: {
      type: Date,
      default: null,
    },
    constraints: {
      type: Object,
      default: null,
    },
    status: {
      type: CouponStatus,
      default: CouponStatus.ACTIVE,
    },
  },
  {
    timestamps: true,
  },
);

const couponModel = model<Coupon>('Coupon', couponSchema);

export default couponModel;
