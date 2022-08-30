import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { SECRET_KEY, APP_PORT, APP_HOST, API_VERSION, NODE_ENV, DB_HOST, DB_PORT, DB_DATABASE, ORIGIN } = process.env;
