const Sequelize = require('sequelize')
const db = require('../db')

const LeaseOption = db.define('leaseOption', {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  notes: {
    type: Sequelize.STRING,
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
    type: Sequelize.FLOAT
  },
  initialDirectCosts: {
    type: Sequelize.FLOAT
  },
  purchaseOptionLikely: {
    type: Sequelize.BOOLEAN
  },
  purchaseAmount: {
    type: Sequelize.FLOAT
  },
  terminationAmount: {
    type: Sequelize.FLOAT
  },
  residualGuarAmount: {
    type: Sequelize.FLOAT
  },
  residualPayAmount: {
    type: Sequelize.FLOAT
  }
})

module.exports = LeaseOption
