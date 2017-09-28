import Sequelize from 'sequelize';
import db from './db'
import User from './User'
import Question from './Question'

const UserAnswer = db.define('useranswer', {

  useranswer: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
});

UserAnswer.belongsTo(Question)
UserAnswer.belongsTo(User)

export default UserAnswer
