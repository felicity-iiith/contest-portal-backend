import Question from '../models/Question'


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
    ctx.body = { response: true }
  }
  else ctx.body = { response: false }

}
export async function getAll(ctx) {
  // XXX: Include only question number and title and nothing else
  ctx.body = ctx.request.body
}

export async function isUnlocked(ctx) {
  // XXX: Check if the question has been unlocked by the user
  ctx.body = ctx.request.body
}
