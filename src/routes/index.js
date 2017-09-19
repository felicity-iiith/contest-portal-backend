import compose from 'koa-compose'

import main from './main'
import user from './user'
import question from './question'

export default compose([
  main.middleware(),
  user.middleware(),
  question.middleware(),
])
