import { Document } from 'mongoose';

export default interface User extends Document {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  total_orders: number;
  wallet: number;
  created_at?: Date;
}
