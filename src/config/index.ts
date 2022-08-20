import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development' }` });

export const { APP_PORT, APP_HOST, API_VERSION, NODE_ENV } = process.env;
