(function() {

  function ResultList(itemDb) {
    return {
      templateUrl: '/resultList/result-list.html',
      restrict: 'E',
      scope: {},
      link: function(scope, element, attributes) {
        scope.myData = itemDb.all;





      }
    }
  }

  angular
    .module('unwind')
    .directive('resultList', ResultList);
})();
