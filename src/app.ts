import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import { API_VERSION, APP_PORT, CREDENTIALS, NODE_ENV, ORIGIN } from './config';
import { connect, set } from 'mongoose';
import { Routes } from './routes/routes.interface';
import { dbConnection } from './database/mongo';

class App {
  public app: express.Application;
  public env: string;
  public port: number | string;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = APP_PORT || 3000;

    this.initialzeRoutes(routes);
    this.connectToDatabase();
    this.initializeMiddlewares();
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log('app is listen ...');
    });
  }

  private initializeMiddlewares() {
    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private connectToDatabase() {
    if (this.env !== 'production') {
      set('debug', true);
    }

    connect(dbConnection.url);
  }

  public initialzeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use(`/api/${API_VERSION}/`, route.router);
    });
  }
}

export default App;
