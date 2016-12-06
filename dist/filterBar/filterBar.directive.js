(function() {

  function FilterBar() {
    return {
      templateUrl: '/filterBar/filter-bar.html',
      restrict: 'E',
      scope: {},
      link: function(scope, element, attributes) {
        console.log("Here")


      }
    }
  }

  angular
    .module('unwind')
    .directive('filterBar', FilterBar);
})();
