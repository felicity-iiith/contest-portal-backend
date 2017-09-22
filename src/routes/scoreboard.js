import koaRouter from 'koa-joi-router';

import * as ctrl from '../controllers/scoreboard';

import { isAuthenticated } from '../middleware/auth'

const Joi = koaRouter.Joi;
const router = koaRouter();
router.prefix('/api/scoreboard')

const routes = [
  {
    method: 'get',
    path: '/',
    handler: [ ctrl.get ],
    validate: {
      params: {
        // XXX: Add any validation if required
      }
    }
  },
];

router.route(routes);
export default router
