(function() {
  'use strict';
  angular.module('teaShopApp.components.inventory')
    .controller('InventoryController', InventoryController);

  InventoryController.$inject = ['$scope']

  function InventoryController ($scope) {
    /*jshint validthis: true */
    this.saySomething = 'Must be 10am';
  }

}());
