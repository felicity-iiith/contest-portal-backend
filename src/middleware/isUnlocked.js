export async function isUnlocked(ctx, next) {
  const { user } = ctx.state
  const { qno } = ctx.params
  if (qno <= user.maxUnlock) {
    return next()
  }
  else ctx.response.status = 403
}
