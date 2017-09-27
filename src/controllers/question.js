import Question from '../models/Question'
import User from '../models/User'


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
  // XXX: Need to fill in this stub and return true or false
  // XXX: If true update score and max unlocked question is necessary
  ctx.body = ctx.request.body;
  if(ctx.body.answer==question.answer){
    const { user }=ctx.state
    if(user.maxUnlock==qno){
      user.maxUnlock+=1
      user.score+=20
      user.update({score: user.score, maxUnlock: user.maxUnlock})      
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