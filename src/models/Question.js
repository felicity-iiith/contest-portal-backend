import Sequelize from 'sequelize';
import db from './db'

const Question = db.define('question', {
  qno: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      isInt: true,
    }
  },
  // Add question type (other than string answer?)
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    }
  },
  // Add provision for image
  body: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
});

export default Question
