// controllers/cartController.js
const sequelize = require('../util/database');

exports.getProductsInCart = (req, res, next) => {
  sequelize.query(`
    SELECT p.*
    FROM products p
    JOIN cart_items ci ON p.id = ci.product_id
    JOIN carts c ON ci.cart_id = c.id
    WHERE c.user_id = 1
  `)
  .then(([results, metadata]) => {
    res.json(results);  // Sends the products data as JSON to the client
  })
  .catch(err => {
    console.log('Error fetching products:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  });
};

exports.getUsersWithProductInCart = (req, res, next) => {
  sequelize.query(`
    SELECT u.*
    FROM users u
    JOIN carts c ON u.id = c.user_id
    JOIN cart_items ci ON c.id = ci.cart_id
    WHERE ci.product_id = 1
  `)
  .then(([results, metadata]) => {
    res.json(results);  // Sends the users data as JSON to the client
  })
  .catch(err => {
    console.log('Error fetching users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  });
};
