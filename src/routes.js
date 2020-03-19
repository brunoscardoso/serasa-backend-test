import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

import { validateUserStore } from './app/validators/User';
import { validateSessionStore } from './app/validators/Session';

const routes = new Router();

routes.get('/', (_, res) => res.send('Serasa'));
routes.post('/session', validateSessionStore, SessionController.store);
routes.post('/users', validateUserStore, UserController.store);

routes.use(authMiddleware);

export default routes;
