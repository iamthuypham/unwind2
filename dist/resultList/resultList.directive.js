(function() {

  function ResultList() {
    return {
      templateUrl: '/resultList/result-list.html',
      restrict: 'E',
      scope: {},
      link: function(scope, element, attributes) {
        var placesObj = {
          placesArray: [{
            title: 'The Colors',
            description: 'Spend one night quite and romantic with your love',
          }, {
            title: 'The Family Stay',
            description: 'Your family will have fun time together here',
          }, {
            title: 'Retreat',
            description: 'Sometimes you need time to be alone. Give yourself a moment to not think about anything',
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
