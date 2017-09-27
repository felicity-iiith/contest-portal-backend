import Sequelize from 'sequelize';
import db from './db'

const User = db.define('user', {
  email: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  score:{
    type: Sequelize.INTEGER
  },
  maxUnlock:{
    type: Sequelize.INTEGER
  },
});

export default User
