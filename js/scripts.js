var appmsg = angular.module('app',['ngMessages']);

app.controller('MainCtrl',function MainCtrl() {
  'use strict';
  var vm = this;
  vm.angularVersion = angular.version.full;
});

angular.module('app', []).config(function($controllerProvider) {
$controllerProvider.allowGlobals();

// This is 1.2 no longer this way in 1.3
function FirstCtrl($scope) {
  $scope.data = {message: "panel"}; 
}

});


