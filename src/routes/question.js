import koaRouter from 'koa-joi-router';

import * as ctrl from '../controllers/question';

import { isAuthenticated } from '../middleware/auth'
import { isUnlocked } from '../middleware/isUnlocked'

const Joi = koaRouter.Joi;
const router = koaRouter();
router.prefix('/api/questions')

const routes = [
  {
    method: 'get',
    path: '/:qno',
    handler: [ isAuthenticated, isUnlocked, ctrl.get ],
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
  },
  {
    method: 'post',
    path: '/:qno',
    handler: [ isAuthenticated, ctrl.addcomment ],
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
];

router.route(routes);
export default router
