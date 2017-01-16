(function () {
  angular.module('myApp').controller('aboutController', aboutController);

  aboutController.$inject = ['$scope'];
  function aboutController($scope) {
    var aboutCtrl = this;
    aboutCtrl.message = 'You are on about page';
  }
})();
