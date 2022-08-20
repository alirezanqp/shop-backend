import express from 'express';
import { APP_PORT, NODE_ENV } from './config';

class App {
  public app: express.Application;
  public env: string;
  public port: number | string;

  constructor() {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = APP_PORT || 3000;
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log('app is listen ...');
    });
  }
}

export default App;
