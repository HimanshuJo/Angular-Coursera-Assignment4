(function () {
  'use strict';

  angular.module('RestaurantMenu')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
        url: '/',
        template: '<a ui-sref="categories">Welcome to our Restaurant</a>',
      })

      .state('categories', {
        url: '/categories',
        template: '<a ui-sref="home">Home</a>\
                   <h3>All categories</h3>\
                   <restaurant-menu items="mainList.items"></shopping-list>\
                   <ui-view></ui-view>',
        controller: 'MainRestaurantMenuController as mainList',
        resolve: {
          items: ['RestaurantMenuService', function (RestaurantMenuService) {
            return RestaurantMenuService.getMenuCategories();
          }]
        }
      })

      .state('items', {
        url: '/items/{categoryShortName}',
        params: {
          categoryShortName: 'A'
        },
        template: '<a ui-sref="home">Home</a>\
                   <h3>All items under this category</h3>\
                   <item-detail items="mainList.items"></shopping-list>',
        controller: 'MainRestaurantMenuController as mainList',
        resolve: {

          items: ['$stateParams', 'RestaurantMenuService', function ($stateParams, RestaurantMenuService) {
            return RestaurantMenuService.getMenuItems($stateParams.categoryShortName);
          }]
        }
      })

  };

})();