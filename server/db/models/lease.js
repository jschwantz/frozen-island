const Sequelize = require('sequelize')
const db = require('../db')

const Lease = db.define('lease', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Lease
