import User from './User'

export default async function setupModels() {
  await User.sync({ force: true })
  await User.bulkCreate([
    { email: 'user1@gmail.com', name: 'User 1' },
    { email: 'user2@gmail.com', name: 'User 2' },
    { email: 'user3@gmail.com', name: 'User 3' },
    { email: 'user4@gmail.com', name: 'User 4' },
    { email: 'user5@gmail.com', name: 'User 5' },
  ]);
}
