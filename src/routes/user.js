import koaRouter from 'koa-joi-router';

import * as ctrl from '../controllers/user';

const Joi = koaRouter.Joi;
const router = koaRouter();

const routes = [
  {
    method: 'post',
    path: '/users',
    handler: ctrl.create,
  },
  {
    method: 'get',
    path: '/users/:id',
    handler: ctrl.get,
    validate: {
      params: {
        id: Joi.number()
      }
    }
  },
];

router.route(routes);
export default router
