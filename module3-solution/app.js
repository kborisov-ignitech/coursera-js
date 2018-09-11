(function() {
'use strict';
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems)
;

// Directive
function FoundItems() {
  var ddo = {
    restrict: "E",
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true

  };

  return ddo;
}

function FoundItemsDirectiveController() {
   var list = this;
  };

// The main controller
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
    var menu = this;
    menu.notFound = undefined;
    menu.loadData = function(search)
    {
      menu.found = undefined;
      if(search == undefined) search = "";
      if(search == "") {
        menu.notFound = true;
      }
      else {
        var promise = MenuSearchService.getMatchedMenuItems(search);
          promise.then(function (response) {
          menu.found = response;
          if(menu.found.length>0) menu.notFound = false;
        }).catch(function (response) {
         console.log("Something went terribly wrong.");
        })
      }
    }


    menu.removeItem = function (itemIndex) {
      this.found.splice(itemIndex, 1);
    };
}

// The service
MenuSearchService.$inject = ['$http', 'ApiBasePath', '$q'];
function MenuSearchService($http, ApiBasePath, $q){
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        });
    if(searchTerm === undefined) searchTerm="";
    var deffered = $q.defer();
    response.then(function (response) {
      var result = response.data.menu_items;
      var found = new Array();
      result.forEach(function(item){
        if(item.description.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1){
          found.push(item);
        }
      });
      deffered.resolve(found);
    })
    .catch(function (response) {
     deferred.reject(response);
    })
    return deffered.promise;
};

}
})();
