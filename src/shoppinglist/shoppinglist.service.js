(function () {
  'use strict';

  angular.module('ShoppingList')
    .service('ShoppingListService', ShoppingListService)
    .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
    .constant('ApiBasePath2', 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json');


  ShoppingListService.$inject = ['$q', '$timeout', '$http', 'ApiBasePath', 'ApiBasePath2']
  function ShoppingListService($q, $timeout, $http, ApiBasePath, ApiBasePath2) {
    var service = this;
    var items = [];
    let itemstmpmp = new Map();
    let itemsmp = new Map();
    let itemsarr = [];

    service.getMenuCategories = function () {

      $http({
        method: 'GET',
        url: (ApiBasePath + "")
      }).then(function successCallback(response) {
        const entries = Object.entries(response.data);
        console.log(response.data);
        for (let [key, value] of entries) {
          const entries2 = Object.entries(value);
          let id_value = "", name_value = "", short_name_value = "", special_instructions_value = "";
          for (let [key2, value2] of entries2) {
            if (key2.toString() === "id") {
              id_value = value2.toString();
            } else if (key2.toString() === "name") {
              name_value = value2.toString();
            } else if (key2.toString() === "short_name") {
              short_name_value = value2.toString();
            } else {
              special_instructions_value = value2.toString();
            }
          }
          items.push({
            id: id_value,
            name: name_value,
            short_name: short_name_value,
            special_instructions: special_instructions_value
          });
          itemstmpmp.set(short_name_value, id_value);
        }
      }, function errorCallback(response) {
      });

      var deferred = $q.defer();
      $timeout(function () {
        // deferred.reject(items);
        deferred.resolve(items);
      }, 800);

      return deferred.promise;
    };

    service.getMenuItems = function (curkey) {
      if(itemsarr.length!=0){
        itemsarr.splice(0, itemsarr.length);
      }

      $http({
        method: 'GET',
        url: (ApiBasePath2 + "")
      }).then(function successCallback(response) {
        const entries = Object.entries(response.data);
        for (let [key, value] of entries) {
          const entries2 = Object.entries(value);
          let curtochk = "";
          for (let [key2, value2] of entries2) {
            if (key2 === "category") {
              const entries3 = Object.entries(value2);
              for (let [key3, value3] of entries3) {
                if (key3 === "short_name") {
                  curtochk = value3.toString();
                }
              }
            }
            if (key2 === "menu_items" && curtochk !== "") {
              if (itemsmp.has(itemstmpmp.get(curtochk))) {
                itemsmp.get(itemstmpmp.get(curtochk)).push(value2);
              } else {
                itemsmp.set(itemstmpmp.get(curtochk), [value2]);
              }
              break;
            }
          }
        }
        for (let [key, value] of itemsmp) {
          if (key === curkey) {
            const entries = Object.entries(value[0]);
            for (let [key2, value2] of entries) {
              const entries2 = Object.entries(value2);
              let description_value = "", large_portion_name_value = "", name_value = "",
                price_large_value = "", price_small_value = "", short_name_value = "", small_portion_name_value = "";
              for (let [key3, value3] of entries2) {
                if (key3 === "description") {
                  description_value = value3;
                } else if (key3 === "large_portion_name") {
                  large_portion_name_value = value3;
                } else if (key3 === "name") {
                  name_value = value3;
                } else if (key3 === "price_large") {
                  price_large_value = value3;
                } else if (key3 === "price_small") {
                  price_small_value = value3;
                } else if (key3 === "short_name") {
                  short_name_value = value3;
                } else {
                  small_portion_name_value = value3;
                }
              }
              itemsarr.push({
                description: description_value,
                large_portion_name: large_portion_name_value,
                name: name_value,
                price_large: price_large_value,
                price_small: price_small_value,
                short_name: short_name_value,
                small_portion_name: small_portion_name_value
              })
            }
          }
        }
        console.log("currkey: " + curkey);
        console.log(itemsarr);
      }, function errorCallback(response) {
      });

      var deferred = $q.defer();

      $timeout(function () {
        // deferred.reject(items);
        deferred.resolve(itemsarr);
      }, 800);

      return deferred.promise;
    };

  };

})();