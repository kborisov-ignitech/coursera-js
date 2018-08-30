(function() {
'use strict';
var x = "hello";
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.dishes="";
    $scope.message="";
    $scope.checkDishes = function () {
    var dishesCount = $scope.dishes.split(',').filter(n => n).length;

    // Check if we have data
    if($scope.dishes=="") $scope.message="Please enter data first";
    // Check number of dishes
    else if(dishesCount <4)  $scope.message="Enjoy!";
    else  $scope.message="Too much!";
  };
  }
})();
