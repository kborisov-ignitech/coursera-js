(function() {
  'use strict';
  angular.module('MenuApp').config(RoutesConfig);
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categories.template.html',
      controller: 'categoriesController as categoriesCtrl',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'templates/items.template.html',
      controller: 'itemsController as itemsCtrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
          function($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }],
      shortName: ['$stateParams', function($stateParams){return $stateParams.categoryShortName;}]
      }
    });
  }
})();
