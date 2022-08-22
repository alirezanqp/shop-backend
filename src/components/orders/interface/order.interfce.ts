import Product from '@/components/product/interface/products.interface';
import { Document } from 'mongoose';
import OrderStatus from '../model/order.status';

export default interface Order extends Document {
  user: Object;
  total_price: number;
  coupon?: Object;
  final_price: number;
  products: Product[];
  status: OrderStatus;
}
