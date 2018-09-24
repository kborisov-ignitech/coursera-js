(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var signupCtrl = this;
  signupCtrl.submit = function () {
    signupCtrl.invalid_favorite = false;
    signupCtrl.completed = false;
    signupCtrl.user.favorite = signupCtrl.user.favorite.toUpperCase(); // No lowercase dishes

    // Check the favorite dish
    var itemPromise = MenuService.getSingleMenuItem(signupCtrl.user.favorite);
    itemPromise.then(function(response){
      signupCtrl.user.favoriteDishData=response;
      UserService.storeUserInfo(signupCtrl.user);
      signupCtrl.completed = true;
    })
    .catch(function(response){
      signupCtrl.invalid_favorite = true;
    })
  };
}

})();
