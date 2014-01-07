App.controller('CartController', function ($scope) { 
  $scope.remove = function(index) {
    $scope.products.splice(index, 1);
  }
});