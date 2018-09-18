(function() {
  'use strict';
  angular.module('MenuApp')
  .controller('itemsController', itemsController);
  itemsController.$inject = ['MenuDataService', 'items', 'shortName'];
  function itemsController(MenuDataService, items, shortName) {
    var itemsCtrl = this;
    itemsCtrl.items = items;
    itemsCtrl.shortName = shortName;
  }
})();
