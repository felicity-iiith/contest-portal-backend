import User from '../models/User'

export async function get(ctx) {
  ctx.body = await User.findAll({
    order :  [
      ['score', 'DESC']],
    attributes: { exclude: [ 'email' ] }
  })
}
