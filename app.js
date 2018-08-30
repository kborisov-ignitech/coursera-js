(function() {
'use strict';
var x = "hello";
angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope){
    $scope.name="Y";
    $scope.reverse_name="Y";
    $scope.sayHello = function(){
      return "Hello, Coursera!";
    };
    $scope.UpdateName = function()
    {
      var r="";
      for(var i=0;i<$scope.name.length;i++)
      {
        r+=$scope.name[$scope.name.length-i-1];
      }

      $scope.reverse_name=r;
    }
  });
})();
