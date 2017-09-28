import Question from '../models/Question'
import UserAnswer from '../models/UserAnswer'

export async function get(ctx) {
  const { qno } = ctx.params
  ctx.body = await Question.findOne({
    where: { qno },
    attributes: { exclude: [ 'answer' ] }
  })
}

export async function checkAnswer(ctx) {
  const { qno } = ctx.params
  const question = await Question.findOne({
    where: { qno },
  })
  ctx.body = ctx.request.body;
  const {user} = ctx.state
  const useranswer = UserAnswer.build({
                                        questionId: question.id,
                                        userId: user.id,
                                        useranswer: JSON.stringify(question.answer)
                                     })
  await useranswer.save()
  if (ctx.body.answer in JSON.parse(question.answer)) {
    const { user } = ctx.state
    if (user.maxUnlock == qno) {
      user.maxUnlock += 1
      user.score += 20
      await user.save()
    }
    ctx.body = { response: true }
  }
  else ctx.body = { response: false }

}
export async function getAll(ctx) {
  ctx.body = await Question.findAll({
    attributes: { exclude: [ 'answer', 'body' ] }
  })
  // XXX: Include only question number and title and nothing else
}
