import koaRouter from 'koa-joi-router';

import * as ctrl from '../controllers/scoreboard';

// const Joi = koaRouter.Joi;
const router = koaRouter();
router.prefix('/api/scoreboard')

const routes = [
  {
    method: 'get',
    path: '/',
    handler: [ ctrl.get ],
    validate: {
      params: {
        // "score" :20
        // XXX: Add any validation if required
      }
    }
  },
];

router.route(routes);
export default router
