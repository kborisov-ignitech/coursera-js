(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService', 'ApiPath'];
function MyInfoController(UserService, ApiPath) {
  var myinfoCtrl = this;
  myinfoCtrl.basePath = ApiPath;
  myinfoCtrl.user=UserService.getUserInfo();
};

})();
