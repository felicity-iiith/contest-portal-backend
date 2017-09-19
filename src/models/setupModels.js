import User from './User'

export default async function setupModels() {
  await User.sync({ force: true })
  await User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
}
