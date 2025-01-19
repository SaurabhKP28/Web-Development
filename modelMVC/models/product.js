const fs = require('fs');
const path = require('path');

// Resolve the path for the products.json file
const dataFilePath = path.join(__dirname, '../data/products.json');

// Helper function to read data from the file
const readDataFromFile = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data || '[]');
    } catch (err) {
        console.error('Error reading file:', err.message);
        return [];
    }
};

// Helper function to write data to the file
const writeDataToFile = (data) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing file:', err.message);
    }
};

// Product model class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    static fetchAll() {
        return readDataFromFile();
    }

    save() {
        const products = Product.fetchAll();
        products.push(this);
        writeDataToFile(products);
    }
}

module.exports = Product;
