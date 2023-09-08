(function () {
  'use strict';

  angular.module('ShoppingList')
    .component('shoppingList', {
      template: '<ul>\
      <li ng-repeat="item in $ctrl.items" ui-sref="itemDetail({categoryShortName: {{ item.id }}})">\
      id: {{ item.id }}<br>\
      name: {{ item.name }}<br>\
      short_name: {{item.short_name}}<br>\
      special_instructions: {{item.special_instructions}}\
      <hr>\
      </li>\
      </ul>',
      bindings: {
        items: '<'
      }
    });

})();
