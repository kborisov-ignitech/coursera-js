(function() {
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();
    toBuyList.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };

  };

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtList = this;
    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  };

  function ShoppingListCheckOffService(){
    var service = this;
    var itemsToBuy = [];
    var itemsBought = [];

    service.addItemToBuy = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      itemsToBuy.push(item);
    };

    service.buyItem = function (itemIdex) {
      var item = itemsToBuy[itemIdex];
      console.log(item);
      itemsToBuy.splice(itemIdex, 1);
      itemsBought.push(item);
      console.log(itemsBought);
    };

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getBoughtItems = function () {
      return itemsBought;
    };

    // The initial array of items to buy
    service.addItemToBuy('coockies', 10);
    service.addItemToBuy('pills', 5);
    service.addItemToBuy('apples', 10);
    service.addItemToBuy('bottle of water', 10);
    service.addItemToBuy('candies', 567);
    service.addItemToBuy('carrot', 1);

  }
})();
