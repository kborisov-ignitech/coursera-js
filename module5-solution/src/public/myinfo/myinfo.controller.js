(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['apiPath', 'user'];
function MyInfoController(apiPath, user) {
  var myinfoCtrl = this;
  myinfoCtrl.basePath = apiPath;
  myinfoCtrl.user = user;
};

})();
