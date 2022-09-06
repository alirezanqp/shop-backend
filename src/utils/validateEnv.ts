import { cleanEnv, port, str } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    DATABASE_URL: str(),
    APP_PORT: port(),
  });
}

export default validateEnv;
