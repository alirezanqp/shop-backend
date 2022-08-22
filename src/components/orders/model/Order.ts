import { model, Schema } from 'mongoose';
import Order from '../interface/order.interfce';
import OrderStatus from './order.status';

const orderSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
    coupon: {
      type: Schema.Types.ObjectId,
      ref: 'Coupon',
    },
    final_price: {
      type: Number,
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
    ],
    status: {
      type: OrderStatus,
      required: true,
      default: OrderStatus.INIT,
    },
  },
  {
    timestamps: true,
  },
);

const orderModel = model<Order>('Order', orderSchema);

export default orderModel;
