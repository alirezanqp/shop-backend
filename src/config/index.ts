import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { DATABASE_URL, SECRET_KEY, APP_PORT, APP_HOST, API_VERSION, NODE_ENV, ORIGIN, REDIS_URL, LOG_DIR } = process.env;
