(function () {
  'use strict';

  angular.module('ShoppingList')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state('home', {
        url: '/',
        template: '<a ui-sref="mainList">See our Premade No Cookie Shopping List!</a>',
        //templateUrl: 'src/shoppinglist/templates/home.template.html'
      })

      // Premade list page
      .state('mainList', {
        url: '/main-list',
        template: '<a ui-sref="home">Home</a> &lt; <span>List</span>\
                   <h3>Premade List with Absolutely No Cookies in it</h3>\
                   <shopping-list items="mainList.items"></shopping-list>\
                   <ui-view></ui-view>',
        //templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
        controller: 'MainShoppingListController as mainList',
        resolve: {
          items: ['ShoppingListService', function (ShoppingListService) {
            return ShoppingListService.getMenuCategories();
          }]
        }
      })

      .state('itemDetail', {
        url: '/item-detail/{categoryShortName}',
        params: {
          categoryShortName: 'A'
        },
        template: '<a ui-sref="home">Home</a> &lt; <span>List</span>\
                   <h3>Premade List with Absolutely No Cookies in it</h3>\
                   <item-detail items="mainList.items"></shopping-list>',
        //templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
        controller: 'MainShoppingListController as mainList',
        resolve: {

          items: ['$stateParams', 'ShoppingListService', function ($stateParams, ShoppingListService) {
            console.log("here: "+$stateParams.categoryShortName)
            return ShoppingListService.getMenuItems($stateParams.categoryShortName);
          }]
        }
      })

      /*
      .state('itemDetail', {
        url: '/item-detail/{itemId}',
        template: '<a ui-sref="home">Home</a> &lt;\
        <a ui-sref="mainList">List</a> &lt;\
        id: {{ itemDetail.id }}<br>\
        name: {{ itemDetail.name }}<br>\
        short_name: {{itemDetail.short_name}}<br>\
        special_instructions: {{itemDetail.special_instructions}}',
        //templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
        controller: 'ItemDetailController as itemDetail',
        resolve: {
          item: ['$stateParams', 'ShoppingListService',
            function ($stateParams, ShoppingListService) {
              return ShoppingListService.getMenuItems($stateParams.itemId)
                .then(function (items) {
                  //return items[$stateParams.itemId];
                });
            }]
        }
      });
      */

    /*
    .state('itemDetail', {
      url: '/item-detail/{categoryShortName}',
      template: '<a ui-sref="home">Home</a> &lt; <span>List</span>\
      <h3>Premade List with Absolutely No Cookies in it</h3>\
      <item-detail items="itemDetail.items"></shopping-list>\
      <ui-view></ui-view>',
      controller: 'ItemDetailController as itemDetail',
      resolve: {
        item: ['$stateParams', 'ShoppingListService',
          function ($stateParams, ShoppingListService) {
            return ShoppingListService.getMenuItems($stateParams.categoryShortName)
              .then(function (items) {
                return items;
                //return items[$stateParams.categoryShortName];
              });
          }]
      }
    });
    */

  };

})();
