var shoppingModule = angular.module('ShoppingModule', []);

shoppingModule.factory('Products', function() {
  var products = {};

  products.query = function() {
    return [
      { name: 'Product 1', price: '22', qty: 0 },
      { name: 'Product 2', price: '32', qty: 0 },
      { name: 'Product 3', price: '42', qty: 0 },
      { name: 'Product 4', price: '52', qty: 0 }
    ];
  }

  return products;
});