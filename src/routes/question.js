import koaRouter from 'koa-joi-router';

import * as ctrl from '../controllers/question';

import { isAuthenticated } from '../middleware/auth'

const Joi = koaRouter.Joi;
const router = koaRouter();
router.prefix('/api/questions')

const routes = [
  {
    method: 'get',
    path: '/:qno',
    handler: [ isAuthenticated, ctrl.get ],
    validate: {
      params: {
        qno: Joi.number()
        // Validate other parameters of the question
      }
    }
  },
];

router.route(routes);
export default router
