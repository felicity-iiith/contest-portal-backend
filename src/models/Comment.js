import Sequelize from 'sequelize';
import db from './db'
import User from './User'
import Question from './Question'

const Comment = db.define('comment', {  
  comment: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: false,
    }
  },
});
Comment.belongsTo(User)
Comment.belongsTo(Question)
export default Comment