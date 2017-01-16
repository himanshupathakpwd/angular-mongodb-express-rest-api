(function() {
    angular.module('myApp', ['ui.router', 'ngResource']);

    angular.module('myApp').config(appConfig).run(appRun);

    appConfig.$inject = ['$stateProvider', '$httpProvider', '$urlRouterProvider'];
    function appConfig($stateProvider, $httpProvider, $urlRouterProvider) {
        // Used for express to detect that this is an AJAX request
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // Send to home page for any unmatched URL.
        $urlRouterProvider.otherwise("/home");
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/templates/home'
        });
        $stateProvider.state('about', {
            url: '/about',
            templateUrl: '/templates/about'
        });
    }

    appRun.$inject = [];
    function appRun() {
    }
})();
