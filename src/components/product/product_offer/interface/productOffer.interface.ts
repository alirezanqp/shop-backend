import { Document } from 'mongoose';

interface ProductOffer extends Document {
  products: [Object];
  start_date: Date;
  end_date: Date;
}

export default ProductOffer;
