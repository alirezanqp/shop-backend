import { Document } from 'mongoose';
import CouponStatus from '../model/order.status';

export default interface Coupon extends Document {
  code: string;
  amount: number;
  limit: number;
  used: number;
  expires_at: Date;
  constraints: object;
  status: CouponStatus.ACTIVE;
}
