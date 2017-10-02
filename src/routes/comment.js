import koaRouter from 'koa-joi-router';

import * as ctrlc from '../controllers/comment';

import { isAuthenticated } from '../middleware/auth'

const Joi = koaRouter.Joi;
const router = koaRouter();
router.prefix('/api/comments')

const routes = [
  {
    method: 'post',
    path: '/:qno',
    handler: [ isAuthenticated, ctrlc.addComment ],
    validate: {
      params: {
        qno: Joi.number()
      },
      type: 'form',
      body: {
        comment: Joi.string(),
      }
    }
  },
  {
    method: 'get',
    path: '/:qno',
    handler: [ isAuthenticated, ctrlc.getAll ],
    validate: {
      params: {
        qno: Joi.number()
      },
    }
  },
];

router.route(routes);
export default router
