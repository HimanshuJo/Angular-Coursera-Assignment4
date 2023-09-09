(function () {
  'use strict';

  angular.module('RestaurantMenu')
    .component('restaurantMenu', {
      template: '<table>\
      <thead>\
        <tr>\
          <th>ID</th>\
          <th>Name</th>\
          <th>Short Name</th>\
          <th>Special Instructions</th>\
          <th>Navigation</th>\
        </tr>\
      </thead>\
      <tbody>\
        <tr ng-repeat="item in $ctrl.items">\
          <td>{{ item.id }}</td>\
          <td>{{ item.name }}</td>\
          <td>{{ item.short_name }}</td>\
          <td>{{ item.special_instructions }}</td>\
          <td><a ng-href="#/items/{{ item.id }}" ui-sref="items({ categoryShortName: item.id })">Details</a></td>\
        </tr>\
      </tbody>\
    </table>',
      bindings: {
        items: '<'
      }
    });

})();
