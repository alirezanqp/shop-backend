import { cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    SECRET_KEY: str(),
    APP_PORT: port(),
    NODE_ENV: str({ choices: ['development', 'test', 'production'] }),
  });
};

export default validateEnv;
