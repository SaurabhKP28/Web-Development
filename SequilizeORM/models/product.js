const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Ensure findAll is not recursively calling itself.
Product.findAll()
  .then(products => {
    console.log('Found products:', products);
  })
  .catch(err => {
    console.error('Error:', err);
  });

console.log('After calling findAll');


module.exports = Product;
