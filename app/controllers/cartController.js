App.controller('CartController', function ($scope) { 
  $scope.bill = {};

  $scope.totalCart = function() {
    var total = 0;
    for (var i = 0, len = $scope.products.length; i < len; i++) {
      total = total + $scope.products[i].price * $scope.products[i].qty;
    }
    
    return total;
  }

  $scope.remove = function(index) {
    $scope.products.splice(index, 1);
  }
});