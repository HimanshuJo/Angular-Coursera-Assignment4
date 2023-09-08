(function () {
  'use strict';

  angular.module('RestaurantMenu')
    .component('restaurantMenu', {
      template: '<ul>\
      <li ng-repeat="item in $ctrl.items" ui-sref="items({categoryShortName: {{ item.id }}})">\
      <strong>id:</strong> {{ item.id }}<br>\
      <strong>name:</strong> {{ item.name }}<br>\
      <strong>short_name: </strong> {{item.short_name}}<br>\
      <strong>special_instructions: </strong> {{item.special_instructions}}\
      <hr>\
      </li>\
      </ul>',
      bindings: {
        items: '<'
      }
    });

})();
