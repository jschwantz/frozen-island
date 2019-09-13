const Sequelize = require('sequelize')
const db = require('../db')

const LeaseVersion = db.define('leaseVersion', {
  version: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = LeaseVersion
