import { REDIS_URL } from '@/config';
import { createClient } from 'redis';

export const redisConnection = createClient({
  url: REDIS_URL,
});
