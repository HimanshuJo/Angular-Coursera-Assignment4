(function () {
    'use strict';
  
    angular.module('ShoppingList')
      .component('itemDetail', {
        template: '<ul>\
        <li ng-repeat="item in $ctrl.items">\
        Description: {{ item.description }}<br>\
        Large Portion Name: {{ item.large_portion_name }}<br>\
        Name: {{item.name}}<br>\
        Price Large: {{item.price_large}}<br>\
        Price Small: {{item.price_small}}<br>\
        Short name: {{item.short_name}}<br>\
        Small Portion Name: {{item.small_portion_name}}<br>\
        <hr>\
        </li>\
        </ul>',
        bindings: {
          items: '<'
        }
      });
  
  })();
  