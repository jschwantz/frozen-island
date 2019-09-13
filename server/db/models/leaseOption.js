const Sequelize = require('sequelize')
const db = require('../db')

const LeaseOption = db.define('leaseOption', {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  notes: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  // 1 = short-term
  // 2 = Operating
  // 3 = Finance
  // 4 = Finance, No Depr
  classification: {
    type: Sequelize.ENUM('1', '2', '3', '4')
  },
  discountRate: {
    type: Sequelize.FLOAT
  },
  prepaidFlag: {
    type: Sequelize.BOOLEAN
  },
  incentives: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  initialDirectCosts: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  purchaseOptionLikely: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  purchaseAmount: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  terminationAmount: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  residualGuarAmount: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  residualPayAmount: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  }
})

module.exports = LeaseOption
