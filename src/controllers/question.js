import Question from '../models/Question'

export async function get(ctx) {
  const { qno } = ctx.params
  ctx.body = await Question.findOne({
    where: { qno },
    attributes: { exclude: [ 'answer' ] }
  })
}

export async function del(ctx) {
  ctx.body = 'Delete user'
}
