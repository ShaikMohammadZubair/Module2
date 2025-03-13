// app.js
(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
            { name: "Apples", quantity: 5 },
            { name: "Bananas", quantity: 10 },
            { name: "Carrots", quantity: 7 },
            { name: "Detergent", quantity: 2 },
            { name: "Eggs", quantity: 12 }
        ];

        var boughtItems = [];

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getBoughtItems = function() {
            return boughtItems;
        };

        service.buyItem = function(itemIndex) {
            var item = toBuyItems.splice(itemIndex, 1)[0];
            boughtItems.push(item);
        };
    }
})();
