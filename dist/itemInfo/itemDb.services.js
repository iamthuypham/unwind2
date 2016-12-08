(function() {
  function itemDb($filter) {
    //Dummie Data
    var places = {
      localArray: [{
        id: 1,
        pic: 'assets/img/unwind1.jpg',
        title: 'Romantic Package',
        description: 'Spend one night quite and romantic with your love...',
        price: 250,
        unit: '2 nights'
      }, {
        id: 2,
        pic: 'assets/img/unwind2.jpg',
        title: 'The Family Stay',
        description: 'Your family will have fun time together here...',
        price: 430,
        unit: '4 nights'
      }, {
        id: 3,
        pic: 'assets/img/unwind3.jpg',
        title: 'Retreat',
        description: 'Sometimes you need time to be alone. Give yourself a moment to not think about anything...',
        price: 90,
        unit: '1 night'
      }]
    };
    
    return {
      all: places.localArray,
      getItemById: function(itemId) {
        var i = $filter('filter')(places.localArray, {id: itemId});
        return i;
      } 
    };
  }

  angular
    .module('unwind')
    .factory('itemDb', itemDb);
})();
