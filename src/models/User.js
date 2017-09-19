import Sequelize from 'sequelize';
import db from './db'

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

export default User
