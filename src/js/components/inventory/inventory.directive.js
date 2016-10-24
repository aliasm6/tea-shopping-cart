(function() {
  'use strict';
  angular.module('teaShopApp.components.inventory')
    .directive('tsInventory', InventoryDirective);

  function InventoryDirective () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'InventoryController',
      controllerAs: 'vm',
      templateUrl: './js/components/inventory/view.html'
    };
  }
}());
