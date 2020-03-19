import express from 'express';

import cors from 'cors';
import helmet from 'helmet';

import Youch from 'youch';

import 'express-async-errors';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.handleException();
  }

  middlewares() {
    this.server.use(helmet());
    this.server.use(cors({ origin: process.env.FRONT_URL }));
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  handleException() {
    this.server.use(async (err, req, res, next) => {
      const errors =
        process.env.NODE_ENV === 'development'
          ? await new Youch(err, req).toJSON()
          : { error: 'Internal server error' };

      return res.status(err.status || 500).json(errors);
    });
  }
}

export default new App().server;
