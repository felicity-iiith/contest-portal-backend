import koaRouter from 'koa-joi-router';

import * as ctrl from '../controllers/user';

import { isAuthenticated } from '../middleware/auth'

const Joi = koaRouter.Joi;
const router = koaRouter();
router.prefix('/api/users')

const routes = [
  {
    method: 'post',
    path: '/',
    handler: ctrl.create,
  },
  {
    method: 'get',
    path: '/:id',
    handler: [ isAuthenticated, ctrl.get ],
    validate: {
      params: {
        id: Joi.number()
      }
    }
  },
];

router.route(routes);
export default router
