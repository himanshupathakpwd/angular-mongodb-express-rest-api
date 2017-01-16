(function() {
  angular.module('myApp').config(appConfig);

  appConfig.$inject = ['$stateProvider', '$httpProvider', '$urlRouterProvider'];
  function appConfig($stateProvider, $httpProvider, $urlRouterProvider) {
    // Used for express to detect that this is an AJAX request
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    // Send to home page for any unmatched URL.
    $urlRouterProvider.otherwise("/home");
    var states = [
      {
        name: 'home',
        url: '/home',
        templateUrl: '/templates/home',
        controller: 'homeController',
        controllerAs: 'homeCtrl'
      }, {
        name: 'about',
        url: '/about',
        templateUrl: '/templates/about',
        controller: 'aboutController',
        controllerAs: 'aboutCtrl'
      }
    ];

    states.forEach(function(state) {
      $stateProvider.state(state);
    });
  }
})();
