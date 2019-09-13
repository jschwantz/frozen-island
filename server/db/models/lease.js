const Sequelize = require('sequelize')
const db = require('../db')

const Lease = db.define('lease', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('Initiated', 'Approved', 'Terminated'),
    allowNull: false,
    defaultValue: 'Initiated'
  }
})

module.exports = Lease
