angular.module('ngFit.main', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'app/components/main/main.html',
        controller: 'MainCtrl'
      })

  })
  .controller('MainCtrl', function($scope) {
    $scope.title = 'Main page - contrler';
  });