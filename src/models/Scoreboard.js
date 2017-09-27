import Sequelize from 'sequelize';
import db from './db'

const Scoreboard = db.define('scoreboard', {
  name: {
    type: Sequelize.STRING
  },
  score: {
    type: Sequelize.INTEGER
  }
});

export default Scoreboard
