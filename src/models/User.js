import Sequelize from 'sequelize';
import db from './db'

const User = db.define('user', {
  email: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
});

export default User
