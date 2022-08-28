import { model, Schema } from 'mongoose';
import ProductOffer from '../interface/productOffer.interface';
import productOfferItemSchema from './productOfferItem.schema';

const productOfferSchema: Schema = new Schema(
  {
    products: {
      type: [productOfferItemSchema],
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const productOfferModel = model<ProductOffer>('ProductOffer', productOfferSchema);

export default productOfferModel;
