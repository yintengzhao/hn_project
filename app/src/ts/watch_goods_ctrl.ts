import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("WatchGoodsCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce','$location',
  function($scope, $interval, $timeout, $window, $http, $sce,$location) {
console.log($location.absUrl());
var receiveId=$location.absUrl().split("=").pop();

var workid={
          method:'POST',
          url:'http://10.134.45.94:8080/ProductCenter/getProduct',
          params: {id:receiveId},
        }
        $http(workid).then(function(response){
          $scope.allpros = response.data;
        },function(){});

}
