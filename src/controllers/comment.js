import Question from '../models/Question'
import Comment from '../models/Comment'

export async function addComment(ctx) {
  const { qno } = ctx.params
  const { user } = ctx.state
  const question = await Question.findOne({
    where: { qno },
  })
  const questionid = question.id
  const userid = user.id
  await Comment.create({ questionId: questionid, userId: userid, comment: ctx.request.body.comment})
  ctx.body = { response: ctx.request.body.comment }
}
export async function getAll(ctx) { 
  const { qno } = ctx.params
  const question = await Question.findOne({
    where: { qno },
  })
  const qid = question.id
  const comment = await Comment.findAll({
    where: { 
      questionId: qid 
    },
  })
  ctx.body = { response: comment }
}
