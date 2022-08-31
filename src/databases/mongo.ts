import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';

export const mongoDBConnection = {
  url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
  },
};
