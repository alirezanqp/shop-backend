import { Document } from 'mongoose';
import OrderStatus from '../model/order.status';
import OrderLine from './orderLine.interface';

export default interface Order extends Document {
  user: Object;
  total_price: number;
  coupon?: Object;
  final_price: number;
  order_lines: OrderLine[];
  status: OrderStatus;
}
