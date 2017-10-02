import Question from '../models/Question'
import Submission from '../models/Submission'
import Comment from '../models/Comment'

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
  await Submission.create(
    { questionId: question.id, userId: user.id, submission: ctx.body.answer}
  )
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
export async function addcomment(ctx) { 
  const { qno } = ctx.params
  const { user } = ctx.state
  const question = await Question.findOne({
    where: { qno },
  })
  await Comment.create({ qid: question.id, uid: user.id, comment: ctx.request.body.comment})
  ctx.body = { response: ctx.request.body.comment }
}