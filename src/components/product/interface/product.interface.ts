import { Document } from 'mongoose';
import ProductStatus from '../model/product.status';

export default interface Product extends Document {
  title: string;
  price: number;
  sale_price: number;
  tumbnail: string;
  gallery?: string[];
  created_at?: Date;
  updated_at?: Date;
  status: ProductStatus;
}
