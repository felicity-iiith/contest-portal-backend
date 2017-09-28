import Sequelize from 'sequelize';
import db from './db'

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  score:{
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  maxUnlock:{
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
});

export default User
