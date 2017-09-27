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
    handler: [ isAuthenticated, ctrl.isUnlocked, ctrl.get ],
    validate: {
      params: {
        qno: Joi.number()
      }
    }
  },
  {
    method: 'post',
    path: '/:qno/answer',
    handler: [ isAuthenticated, ctrl.checkAnswer ],
    validate: {
      params: {
        qno: Joi.number()
      },
      type: 'form',
      body: {
        answer: Joi.string(),
      }
    }
  },
  {
    method: 'get',
    path: '/',
    handler: [ isAuthenticated, ctrl.getAll ],
    validate: {
      params: {
        // XXX: Perform necessary validation
      }
    }
  },
];

router.route(routes);
export default router
