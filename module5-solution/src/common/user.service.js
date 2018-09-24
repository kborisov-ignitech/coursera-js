(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;

  service.storeUserInfo = function(user){
    service.userInfo = user;
  }

  service.getUserInfo = function(){
    return(service.userInfo);
  }

}

})();
