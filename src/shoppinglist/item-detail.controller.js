/*

(function () {
  'use strict';

  angular.module('ShoppingList')
    .controller('ItemDetailController', ItemDetailController);


  ItemDetailController.$inject = ['ShoppingListService', '$stateParams', 'items'];
  function ItemDetailController(ShoppingListService, $stateParams, items) {
    var mainlist = this;
    mainlist.items = items;
  }

})();
*/

(function () {
  'use strict';

  angular.module('ShoppingList')
    .controller('ItemDetailController', ItemDetailController);

  // 'item' is injected through state's resolve
  ItemDetailController.$inject = ['item']
  function ItemDetailController(item) {
    var itemDetail = this;
    itemDetail.id = item.id;
    itemDetail.name = item.name;
    itemDetail.short_name = item.short_name;
    itemDetail.special_instructions=item.special_instructions;
  };

})();