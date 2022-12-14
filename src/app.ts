import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { APP_PORT, CREDENTIALS, NODE_ENV, ORIGIN } from './config';
import { connect, set } from 'mongoose';
import { Routes } from './routes/routes.interface';
import errorMiddleware from './middlewares/error.middleware';
import { logger } from './utils/logger';
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
    this.initializeSwagger();
    this.initialzeErrorHandler();
  }

  public start() {
    this.app.listen(this.port, () => {
      logger.info(`
      --------------------------------------------
          > 🚀 App is Listening on port: ${APP_PORT} <
      --------------------------------------------
      `);
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
      connect('mongodb://mongodb:27017/shop');
      return;
    }

    connect('mongodb://root:9OHOcVYwQC5oMmzV4Mn5uvi4@polly.iran.liara.ir:30829/my-app?authSource=admin&replicaSet=rs0');
  }

  public initialzeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use(`/api/`, route.router);
    });
  }

  public initializeSwagger() {
    const options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'Backend Shop',
          version: '1.0.0',
          description: 'a api for e-commerce backend.    **base url: http://{host}/api/',
        },
      },
      apis: ['./src/components/*/*.route.ts', 'swagger.yml'],
    };

    const specs = swaggerJsDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  private initialzeErrorHandler() {
    this.app.use(errorMiddleware);
  }
}

export default App;
