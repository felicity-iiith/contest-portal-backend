import Sequelize from 'sequelize';
import db from './db'

const Question = db.define('question', {
  qno: {
    type: Sequelize.INTEGER
  },
  // Add question type (other than string answer?)
  title: {
    type: Sequelize.STRING
  },
  // Add provision for image
  body: {
    type: Sequelize.STRING
  },
  answer: {
    type: Sequelize.STRING
  },
});

export default Question
