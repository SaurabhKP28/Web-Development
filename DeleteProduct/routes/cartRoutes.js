// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Route to get products in the cart for user ID = 1
router.get('/cart-products', cartController.getProductsInCart);

// Route to get users who have product ID = 1 in their cart
router.get('/users-with-product-in-cart', cartController.getUsersWithProductInCart);

module.exports = router;
