(function() {

  'use strict';

  angular
    .module('teaShopApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Hello World! Angular is working!';
  }

})();
