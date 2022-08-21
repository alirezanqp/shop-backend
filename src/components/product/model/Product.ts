import { model, Schema } from 'mongoose';
import Product from '../interface/product.interface';
import ProductStatus from './product.status';

const productsSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sale_price: {
      type: Number,
      default: 0,
    },
    tumbnail: {
      type: String,
      required: true,
    },
    gallery: {
      type: [String],
    },
    status: {
      type: ProductStatus,
      default: ProductStatus.INIT,
    },
  },
  {
    timestamps: true,
  },
);

const productModel = model<Product>('Product', productsSchema);

export default productModel;
