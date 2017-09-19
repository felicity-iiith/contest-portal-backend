import koaRouter from 'koa-joi-router';

import * as ctrl from '../controllers/question';

import { isAuthenticated } from '../middleware/auth'

const Joi = koaRouter.Joi;
const router = koaRouter();

const routes = [
  {
    method: 'get',
    path: '/questions/:qno',
    handler: [ isAuthenticated, ctrl.get ],
    validate: {
      params: {
        qno: Joi.number()
      }
    }
  },
];

router.route(routes);
export default router
