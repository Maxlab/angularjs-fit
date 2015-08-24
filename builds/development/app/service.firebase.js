;(function() {

  "use strict";

  angular
    .module('ngFit.service.firebase',['firebase'])
    .service('serviceFirebase', fire);

  fire.$inject = ['$firebaseObject','$log','appVars'];
  function fire($firebaseObject,$log,appVars) {
    var ref = new Firebase(appVars.firebase_url);
    var users = $firebaseObject(ref.child('users'));

    this.getUsers = function() {
      return users;
    };
  }


})();