export async function isUnlocked(ctx, next) {
	const { user } = ctx.state
	const { qno } = ctx.params
	if(qno<=user.maxUnlock){
		return next()
	}
	else ctx.response.status = 403
  // XXX: Check if the question has been unlocked by the user
  // Use ctx.state.user and ctx.params.qno
  // Do next only if it is unlocked

}
