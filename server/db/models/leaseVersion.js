const Sequelize = require('sequelize')
const db = require('../db')

const LeaseVersion = db.define('leaseVersion', {
  version: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  approvalStatus: {
    type: Sequelize.STRING
  },
  approvalDate: {
    type: Sequelize.DATE
  }
})

module.exports = LeaseVersion
