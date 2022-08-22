import { model, Schema } from 'mongoose';
import Category from '../interface/category.interface';

const categorySchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    total_products: {
      type: Number,
      required: true,
      default: 0,
    },
    attributes: {
      type: [Object],
    },
  },
  {
    timestamps: true,
  },
);

const categoryModel = model<Category>('Category', categorySchema);

export default categoryModel;
