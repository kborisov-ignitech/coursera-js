(function() {
'use strict';
var x = "hello";
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.dishes="";
    $scope.message="";
    $scope.colorStyle = ""; // Default color before the first click

    $scope.checkDishes = function () {
    var dishesCount = $scope.dishes.replace( /\s/g, '').split(',').filter(n => n).length;

    $scope.colorStyle = "is-green";
    // Check if we have data
    if($scope.dishes=="")
    {
       $scope.message="Please enter data first";
       $scope.colorStyle = "is-red";
     }
    // Check number of dishes
    else if(dishesCount <4)  $scope.message="Enjoy!";
    else  $scope.message="Too much!";
  };
  }
})();
