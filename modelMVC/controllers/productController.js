const Product = require('../models/product');

exports.getProducts = (req, res) => {
    const products = Product.fetchAll();
    res(products);
};

exports.addProduct = (req, res) => {
    const { name, price } = req.body; // Simulated request body
    const product = new Product(name, price);
    product.save();
    res({ message: 'Product added successfully!' });
};
