import User from '../models/User';

export default async function (ctx, next) {
  const email  = ctx.header.email;
  // console.log({ email })
  ctx.state.user = await User.findOne({ where: { email } })
  ctx.state.isAuthenticated = !!ctx.state.user
  // console.log(ctx.state.isAuthenticated)
  return next();
}

export async function isAuthenticated(ctx, next) {
  if (!ctx.state.isAuthenticated) {
    ctx.response.status = 403;
    return
  }
  return next()
}
