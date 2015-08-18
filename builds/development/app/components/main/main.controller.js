//best practice code style
(function() {


  "use strict";

  angular.module('ngFit.main', ['ngRoute'])
    .config(configMain)
    .controller('MainCtrl',MainCtrl)
    .factory('factoryPlusOne',factoryPlusOne) // can return object, a function, or any value
    .service('servicePlusOne',servicePlusOne) // always return object
  ;

  // Factory can be an object, a function reference, or any value at all
  function factoryPlusOne() {
    //private
    var one = 1;
    var sum = 0;
    function privatePlusOne(num) {
      sum = num + one;
      return sum;
    }
    //public
    return {
      plusOne: privatePlusOne
    }
  }
  // Service must always be an object
  function servicePlusOne() {
    var one = 1;
    var sum = 0;
    this.plusOne = function(num) {
      sum = one + num;
      return sum;
    }
  }

  configMain.$inject = ['$routeProvider'];
  function configMain($routeProvider) {
    $routeProvider.when('/',{
      templateUrl: 'app/components/main/main.html',
      controller: 'MainCtrl',
      controllerAs: 'vm'
    })
  }

  MainCtrl.$inject = ['$rootScope', 'appVars','servicePlusOne','factoryPlusOne'];
  function MainCtrl($rootScope,appVars,servicePlusOne,factoryPlusOne) {
    $rootScope.curPath = 'main';
    this.title = 'Main page - contrler';
    this.url_fb = appVars.firebase_url;

    var injectedFactoryPlusOne = factoryPlusOne;
    var injectedServicePlusOne = servicePlusOne;
    console.log(injectedFactoryPlusOne.plusOne(2));
    console.log(injectedFactoryPlusOne.plusOne(2));
    console.log(injectedServicePlusOne.plusOne(2));
  }


})();