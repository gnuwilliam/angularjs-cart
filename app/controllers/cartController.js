App.controller('CartController', function ($scope) { 
  $scope.products = [
    { name: 'Product 1', price: '22', qty: 0 },
    { name: 'Product 2', price: '32', qty: 0 },
    { name: 'Product 3', price: '42', qty: 0 },
    { name: 'Product 4', price: '52', qty: 0 }
  ];

  $scope.remove = function(index) {
    $scope.products.splice(index, 1);
  }
});