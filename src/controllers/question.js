import Question from '../models/Question'

export async function get(ctx) {
  const { qno } = ctx.params
  ctx.body = await Question.findOne({
    where: { qno },
    attributes: { exclude: [ 'answer' ] }
  })
}

export async function checkAnswer(ctx) {
  // XXX: Need to fill in this stub and return true or false
  const { qno } = ctx.params
  ctx.body = await Question.findOne({
    where: { qno },
    attributes: {  }
  })
  ctx.body = ctx.request.body;
}
