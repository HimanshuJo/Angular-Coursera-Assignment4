(function () {
    'use strict';
  
    angular.module('RestaurantMenu')
      .component('itemDetail', {
        template: '<table>\
        <thead>\
          <tr>\
            <th>Description</th>\
            <th>Large Portion Name</th>\
            <th>Name</th>\
            <th>Price Large</th>\
            <th>Price Small</th>\
            <th>Short Name</th>\
            <th>Small Portion Name</th>\
          </tr>\
        </thead>\
        <tbody>\
          <tr ng-repeat="item in $ctrl.items">\
            <td>{{ item.description }}</td>\
            <td>{{ item.large_portion_name }}</td>\
            <td>{{ item.name }}</td>\
            <td>{{ item.price_large }}</td>\
            <td>{{ item.price_small }}</td>\
            <td>{{ item.short_name }}</td>\
            <td>{{ item.small_portion_name }}</td>\
          </tr>\
        </tbody>\
      </table>',
        bindings: {
          items: '<'
        }
      });
  
  })();
  