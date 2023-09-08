(function () {
    'use strict';
  
    angular.module('RestaurantMenu')
      .component('itemDetail', {
        template: '<ul>\
        <li ng-repeat="item in $ctrl.items">\
        <strong>Description: </strong> {{ item.description }}<br>\
        <strong>Large Portion Name: </strong> {{ item.large_portion_name }}<br>\
        <strong>Name: </strong> {{item.name}}<br>\
        <strong>Price Large: </strong> {{item.price_large}}<br>\
        <strong>Price Small: </strong> {{item.price_small}}<br>\
        <strong>Short name: </strong> {{item.short_name}}<br>\
        <strong>Small Portion Name: </strong> {{item.small_portion_name}}<br>\
        <hr>\
        </li>\
        </ul>',
        bindings: {
          items: '<'
        }
      });
  
  })();
  