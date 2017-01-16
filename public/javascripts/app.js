(function() {
  angular.module('myApp', ['ui.router', 'ngResource']);

  angular.module('myApp').run(appRun);

  appRun.$inject = [];
  function appRun() {}
})();
