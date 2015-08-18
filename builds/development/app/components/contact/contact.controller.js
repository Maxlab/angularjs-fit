angular.module('ngFit.contact', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/contact',{
      templateUrl: 'app/components/contact/contact.html',
      controller: 'ContactCtrl'
    })
  })
  .controller('ContactCtrl', function($scope) {
    $scope.title = 'Contact - My name is Nikolay'
    $scope.sayHello = function() {
      alert('Hi, Nikolay!');
    }
  });