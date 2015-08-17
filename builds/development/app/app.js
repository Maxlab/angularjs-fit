// initialize material design js
$.material.init();

angular.module('ngFit', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl: '/view/main.html'
      })
      .when('/contact',{
        templateUrl: '/view/contact.html'
      })
      .when('/about',{
        templateUrl: '/view/about.html'
      });

  })
;
