import User from '../models/User';

export default async function (ctx, next) {
  const { email } = ctx.header;
  ctx.state.user = await User.findOne({ where: { email } })
  ctx.state.isAuthenticated = !!ctx.state.user
  return next();
}

export async function isAuthenticated(ctx, next) {
  if (!ctx.state.isAuthenticated) {
    ctx.response.status = 403;
    return
  }
  return next()
}
