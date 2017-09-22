import Sequelize from 'sequelize';
import db from './db'

const User = db.define('user', {
  email: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
  // XXX: Add score for the user
  // XXX: Add max unlocked question for user
});

export default User
