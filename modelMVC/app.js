const productController = require('./controllers/productController');
const productView = require('./views/productsView');

// Simulated request-response functions
const req = {
    body: { name: 'Smartphone', price: 999 } // Simulated request body
};

const res = (response) => {
    if (Array.isArray(response)) {
        productView.displayProducts(response);
    } else if (response.message) {
        productView.showMessage(response.message);
    }
};

// Simulate adding a product
productController.addProduct(req, res);

// Simulate fetching all products
productController.getProducts({}, res);
