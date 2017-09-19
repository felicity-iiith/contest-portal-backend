export async function create(ctx) {
  ctx.body = 'Create user'
}

export async function get(ctx) {
  ctx.body = `Get user ${ctx.params.id}`
}

export async function del(ctx) {
  ctx.body = 'Delete user'
}
