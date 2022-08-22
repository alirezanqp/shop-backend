import { Document } from 'mongoose';
import ProductStatus from '../model/product.status';
import ProductAttribute from './attribute.interface';

export default interface Product extends Document {
  title: string;
  price: number;
  sale_price: number;
  tumbnail: string;
  gallery?: string[];
  attributes: ProductAttribute[];
  category: string;
  status: ProductStatus;
}
