import ProductAttribute from '@/components/product/interface/attribute.interface';
import { Document } from 'mongoose';

export default interface Category extends Document {
  title: string;
  total_products: number;
  attributes: [ProductAttribute];
}
