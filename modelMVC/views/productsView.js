exports.displayProducts = (products) => {
  console.log('--- Product List ---');
  products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - $${product.price}`);
  });
  console.log('-------------------');
};

exports.showMessage = (message) => {
  console.log(message);
};
