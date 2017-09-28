import koaRouter from 'koa-joi-router';

import { isAuthenticated } from '../middleware/auth'

const router = koaRouter();
router.prefix('/api')

async function ctrl(ctx) {
  if (ctx.state.isAuthenticated)
    ctx.body = `Hello ${ctx.state.user.name}!`
  else
    ctx.body = `Hello World!`
}

export async function userinfo(ctx) {
  ctx.body = ctx.state.user
}

const routes = [
  {
    method: 'get',
    path: '/',
    handler: ctrl
  },
  {
    method: 'get',
    path: '/userinfo',
    handler: [isAuthenticated, userinfo]	
  },
];

router.route(routes);
export default router
