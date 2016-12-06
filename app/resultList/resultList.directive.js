(function() {

  function ResultList() {
    return {
      templateUrl: '/resultList/result-list.html',
      restrict: 'E',
      scope: {},
      link: function(scope, element, attributes) {
        //Dummie Data
        var placesObj = {
          placesArray: [{
            pic: 'assets/img/unwind1.jpg',
            title: 'Romantic Package',
            description: 'Spend one night quite and romantic with your love...',
            price: 250,
            unit: '2 nights'
          }, {
            pic: 'assets/img/unwind2.jpg',
            title: 'The Family Stay',
            description: 'Your family will have fun time together here...',
            price: 430,
            unit: '4 nights'
          }, {
            pic: 'assets/img/unwind3.jpg',
            title: 'Retreat',
            description: 'Sometimes you need time to be alone. Give yourself a moment to not think about anything...',
            price: 90,
            unit: '1 night'
          }]
        };

        scope.myData = placesObj.placesArray;
        
        



      }
    }
  }

  angular
    .module('unwind')
    .directive('resultList', ResultList);
})();
