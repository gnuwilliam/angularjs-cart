App.controller('CartController', function ($scope) { 
  $scope.bill = {};
  
  $scope.remove = function(index) {
    $scope.products.splice(index, 1);
  }
});