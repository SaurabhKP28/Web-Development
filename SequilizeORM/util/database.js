const Sequelize = require('sequelize');

const sequelize = new Sequelize('products', 'root', 'Lonewolf@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
