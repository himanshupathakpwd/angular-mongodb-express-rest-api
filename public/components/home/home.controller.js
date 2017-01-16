(function () {
  angular.module('myApp').controller('homeController', homeController);

  homeController.$inject = ['$scope'];
  function homeController($scope) {
    var homeCtrl = this;
    homeCtrl.message = 'Welcome to My Website';
  }
})();
