import Sequelize from 'sequelize';
import db from './db'

const Question = db.define('question', {
  qno: {
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.STRING
  },
  answer: {
    type: Sequelize.STRING
  },
});

export default Question
