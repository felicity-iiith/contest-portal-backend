import compose from 'koa-compose'

import main from './main'
import user from './user'
import question from './question'
import scoreboard from './scoreboard'

export default compose([
  main.middleware(),
  user.middleware(),
  question.middleware(),
  scoreboard.middleware(),
])
