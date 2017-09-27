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
  },
];

router.route(routes);
export default router
