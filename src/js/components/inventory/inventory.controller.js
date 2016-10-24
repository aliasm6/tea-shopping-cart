(function() {
  'use strict';
  angular.module('teaShopApp.components.inventory')
    .controller('InventoryController', InventoryController);

  InventoryController.$inject = ['$scope', 'inventoryService'];

  function InventoryController ($scope, inventoryService) {
    /*jshint validthis: true */
    this.saySomething = 'Must be 10am';
    this.teas = inventoryService.tea;
  }

}());
