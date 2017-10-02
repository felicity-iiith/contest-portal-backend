import Sequelize from 'sequelize';
import db from './db'
import User from './User'
import Question from './Question'

const Submission = db.define('submission', {

  submission: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
});

Submission.belongsTo(Question)
Submission.belongsTo(User)

export default Submission
