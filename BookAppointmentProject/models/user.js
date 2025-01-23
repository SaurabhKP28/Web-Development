// models/user.js
const { Sequelize, DataTypes } = require('sequelize');

// Configure the Sequelize instance
const sequelize = new Sequelize('bookAppointment', 'root', 'Lonewolf@123', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
sequelize.sync();

module.exports = { User, sequelize };
