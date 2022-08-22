import { Schema } from 'mongoose';

const orderLineSchema: Schema = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default orderLineSchema;
