import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("MainCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
  function($scope, $interval, $timeout, $window, $http, $sce) {
    var IpAdress:string="10.134.40.219";

    $scope.login=function(){
      var workid={
        method:'POST',
        url:'http://'+IpAdress+':8080/ProductCenter/login',
        params: { username: $scope.username; password:$scope.password};
      };
      $http(workid).then(function(){};)
      // $http(workid).then(function(){};function(){});
    }

    var E = window.wangEditor
        var editor = new E('#editor')
        // 或者 var editor = new E( document.getElementById('editor') )
        editor.create()


})
