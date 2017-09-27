import User from './User'
import Question from './Question'

// Remember to change if scores have been added

export default async function setupModels() {
  await User.sync({ force: true })
  await User.bulkCreate([
    { email: 'user1@gmail.com', name: 'User 1' },
    { email: 'user2@gmail.com', name: 'User 2' },
    { email: 'user3@gmail.com', name: 'User 3' },
    { email: 'user4@gmail.com', name: 'User 4' },
    { email: 'user5@gmail.com', name: 'User 5' },
  ]);
  await Question.sync({ force: true })
  await Question.bulkCreate([
    { qno: 1, title: 'QTitle 1', body: 'QBody 1', answer: '1' },
    { qno: 2, title: 'QTitle 2', body: 'QBody 2', answer: '2' },
    { qno: 3, title: 'QTitle 3', body: 'QBody 3', answer: '3' },
    { qno: 4, title: 'QTitle 4', body: 'QBody 4', answer: '4' },
    { qno: 5, title: 'QTitle 5', body: 'QBody 5', answer: '5' },
  ]);
}
