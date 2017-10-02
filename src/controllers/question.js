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
  //let wrongAttempts=0
  let correctAttempts=0
  const { qno } = ctx.params
  const question = await Question.findOne({
    where: { qno },
  })
  ctx.body = ctx.request.body;
  const {user} = ctx.state
  const preAnswered = await Submission.findAll({
    where:{
      questionId: question.id,
      userId: user.id 
    },
  })
  const answers=JSON.parse(question.answer)
  for(var i in preAnswered){
    if (preAnswered[i].submission in answers)
      correctAttempts+=1 
    // else{
    //   wrongAttempts+=1
    // }
  }
  await Submission.create(
    { questionId: question.id, userId: user.id, submission: ctx.body.answer}
  )
  if (correctAttempts==0 && (ctx.body.answer in answers)) {
    const { user } = ctx.state
    if (user.maxUnlock == qno) {
      user.maxUnlock += 1
      user.score += question.score
      await user.save()
    }
    ctx.body = { response: true }
  }
  else if(correctAttempts==1 && (ctx.body.answer in answers)) ctx.body = { response: "Already attempted" }
  else ctx.body = { response: false }

}
export async function getAll(ctx) {
  ctx.body = await Question.findAll({
    attributes: { exclude: [ 'answer', 'body' ] }
  })
  // XXX: Include only question number and title and nothing else
}
