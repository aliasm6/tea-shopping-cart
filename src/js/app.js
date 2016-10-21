// sample angular code

(function() {

  'use strict';

  angular
    .module('teaShopApp', [
      'teaShopApp.config',
      'teaShopApp.components.main',
      'teaShopApp.components.inventory'
    ]);

})();
