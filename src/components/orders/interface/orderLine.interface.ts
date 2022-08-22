import { Document } from 'mongoose';

export default interface OrderLine extends Document {
  price: number;
  product: Object;
}
