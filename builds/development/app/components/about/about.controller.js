angular.module('ngFit.about', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/about',{
      templateUrl: 'app/components/about/about.html',
      controller: 'AboutCtrl'
    })
  })
  .controller('AboutCtrl', function($scope) {
    $scope.title = 'About';
  });
