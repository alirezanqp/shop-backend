import { DATABASE_URL } from '@config';

export const mongoDBConnection = {
  url: DATABASE_URL || 'what',
  options: {
    useNewUrlParser: true,
  },
};
