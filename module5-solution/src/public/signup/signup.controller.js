(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService', 'menuItems'];
function SignUpController(MenuService, UserService, menuItems) {
  var signupCtrl = this;
  signupCtrl.menuItems = menuItems;

  signupCtrl.submit = function () {
    signupCtrl.invalid_favorite = false;
    signupCtrl.completed = false;
    signupCtrl.user.favorite = signupCtrl.user.favorite.toUpperCase(); // No lowercase dishes

    signupCtrl.user.favoriteDishData = signupCtrl.validatedMenuItem;
    UserService.storeUserInfo(signupCtrl.user);
    signupCtrl.completed = true;
    ///// Previous, non-bonus implementation of validation /////
    //Check the favorite dish
    //var itemPromise = MenuService.getSingleMenuItem(signupCtrl.user.favorite);
    //itemPromise.then(function(response){
    //  signupCtrl.user.favoriteDishData=response;
    //  UserService.storeUserInfo(signupCtrl.user);
    //  signupCtrl.completed = true;
    //})
    //.catch(function(response){
    //  signupCtrl.invalid_favorite = true;
    //})
  };

  signupCtrl.validateDish = function(value) {
    if(value == undefined) return false;

    value = value.toUpperCase();
    var items = signupCtrl.menuItems.menu_items;
    for(var i=0; i<items.length; i++)  // Loop throught the injected items
    {
      if(items[i].short_name == value)
      {
        signupCtrl.validatedMenuItem = items[i];
        return true;
      }
    }
    return false;
  };
}



})();
