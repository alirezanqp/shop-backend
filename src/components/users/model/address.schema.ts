import { Schema } from 'mongoose';

const userAddressSchema: Schema = new Schema({
  title: { type: String, required: true },
  full_name: { type: String, required: true },
  mobile: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  zip_code: { type: String },
});

export default userAddressSchema;
