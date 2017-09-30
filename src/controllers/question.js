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
  //var wrongAttempts=0
  var correctAttempts=0
  const { qno } = ctx.params
  const question = await Question.findOne({
    where: { qno },
  })
  ctx.body = ctx.request.body;
  const {user} = ctx.state
  const preAnswered = await UserAnswer.findAll({
    where:{
      questionId: question.id,
      userId: user.id 
    },
  })
  for(var i in preAnswered){
    if (preAnswered[i].useranswer in JSON.parse(question.answer))
      correctAttempts+=1 
    // else{
    //   wrongAttempts+=1
    // }
  }
  await UserAnswer.create(
    { questionId: question.id, userId: user.id, useranswer: ctx.body.answer}
  )
  if (correctAttempts==0 && (ctx.body.answer in JSON.parse(question.answer))) {
    const { user } = ctx.state
    if (user.maxUnlock == qno) {
      user.maxUnlock += 1
      user.score += question.score
      await user.save()
    }
    ctx.body = { response: true }
  }
  else if(correctAttempts==1) ctx.body = { response: "Already attempted" }
  else ctx.body = { response: false }

}
export async function getAll(ctx) {
  ctx.body = await Question.findAll({
    attributes: { exclude: [ 'answer', 'body' ] }
  })
  // XXX: Include only question number and title and nothing else
}
