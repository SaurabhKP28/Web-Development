const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:Lonewolf@123@localhost:3306/expense');

const Expense = sequelize.define('Expense', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Expense;
