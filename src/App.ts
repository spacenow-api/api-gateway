import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cookieParse from 'cookie-parser';

import errorMiddleware from './helpers/middlewares/error-middleware';
import loggerMiddleware from './helpers/middlewares/logger-middleware';

const PATH = '/gateway';

class App {
  public app: Application;
  public port: number;
  public host: string;

  constructor(services: any, port: number, host: string) {
    this.app = express();
    this.port = port;
    this.host = host;
    this.initializeMiddlewares();
    this.initializeServices(services);
    this.initializeErrorHandling();
  }

  private initializeMiddlewares(): void {
    this.app.use(loggerMiddleware);
    this.app.use(bodyParser.json());
    this.app.use(cookieParse());
  }

  private initializeErrorHandling(): void {
    this.app.use(errorMiddleware);
  }

  private initializeServices(services: any): void {
    services.forEach((s: any) => this.app.use(PATH, s.router));
  }

  public listen() {
    this.app.listen(this.port, this.host, () => {
      console.log(`Server * Gateway * listening on ${this.host}:${this.port}`);
    });
  }
}

export default App;
