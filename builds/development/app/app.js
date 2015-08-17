// initialize material design js
$.material.init();

angular.module('ngFit', ['ngRoute'])
  .config(ngFitConfig)
  .controller('MainCtrl', MainCtrl)
  .controller('ContactCtrl',ContactCtrl);

function MainCtrl($scope) {
  $scope.title = 'Main page - contrler';
}

function ContactCtrl($scope) {
  $scope.title = 'Contact - My name is Nikolay'
  $scope.sayHello = function() {
    alert('Hi, Nikolay!');
  }
}

function ngFitConfig($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: '/view/main.html',
      controller: 'MainCtrl'
    })
    .when('/contact',{
      templateUrl: '/view/contact.html',
      controller: 'ContactCtrl'
    })
    .when('/about',{
      templateUrl: '/view/about.html'
    });
}