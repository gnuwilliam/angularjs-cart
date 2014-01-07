App.controller('CartController', function ($scope) { 
  $scope.bill = {};

  $scope.totalCart = function() {
    var total = 0;
    for (var i = 0, len = $scope.products.length; i < len; i++) {
      total = total + $scope.products[i].price * $scope.products[i].qty;
    }

    return total;
  }

  $scope.subtotal = function() {
    return $scope.totalCart() - $scope.bill.discount;
  }

  function calculateDiscount(newValue, oldValue, scope) {
    $scope.bill.discount = newValue > 100 ? 10 : 0;
  }

  $scope.remove = function(index) {
    $scope.products.splice(index, 1);
  }
});