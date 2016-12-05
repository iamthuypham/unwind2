(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
    //disable to hashbang mode like localhost:3000/#!/album
      .html5Mode({
      enabled: true,
      requireBase: false
    });
    //add state to direct to correct template
    $stateProvider
      .state('main', {
        url: '/',
        // controller: 'LandingCtrl as landing',
        templateUrl: 'template/main.html'
      })
  }

  angular
    .module('unwind', [
      //angular add-on
      'ui.router'
      , 'ui.bootstrap'
      , 'ngAnimate'
      , 'ngTouch'
      
      ])
    .config(config)
})();
