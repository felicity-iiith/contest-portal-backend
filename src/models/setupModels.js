import User from './User'
import Question from './Question'
import Submission from './Submission'
// Remember to change if scores have been added

export default async function setupModels() {
  await User.sync({ force: true })
  await User.bulkCreate([
    { email: 'user1@gmail.com', name: 'User 1', score:40, maxUnlock: 2},
    { email: 'user2@gmail.com', name: 'User 2', score:40, maxUnlock: 2},
    { email: 'user3@gmail.com', name: 'User 3', score:40, maxUnlock: 2},
    { email: 'user4@gmail.com', name: 'User 4', score:30, maxUnlock: 1},
    { email: 'user5@gmail.com', name: 'User 5', score:50, maxUnlock: 3},
  ]);
  await Question.sync({ force: true })
  await Question.bulkCreate([
    { qno: 1, title: 'QTitle 1', body: 'QBody 1', answer: JSON.stringify(['1','2','3'])},
    { qno: 2, title: 'QTitle 2', body: 'QBody 2', answer: JSON.stringify(['2'])},
    { qno: 3, title: 'QTitle 3', body: 'QBody 3', answer: JSON.stringify(['1','4'])},
    { qno: 4, title: 'QTitle 4', body: 'QBody 4', answer: JSON.stringify(['3'])},
    { qno: 5, title: 'QTitle 5', body: 'QBody 5', answer: JSON.stringify(['4'])},
  ]);
  await Submission.sync({ force: true })
}
