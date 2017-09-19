import compose from 'koa-compose'

import main from './main'
import user from './user'

export default compose([
  main.middleware(),
  user.middleware(),
])
