import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("WatchGoodsCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce','$location',
  function($scope, $interval, $timeout, $window, $http, $sce,$location) {
    var Ip_Flag=true;
    var IpAdress:string
    if(Ip_Flag==true){
      var IpAdress:string="39.105.79.4";
    }
    else{
      var IpAdress:string="10.134.41.175";
    }
var receiveId=$location.absUrl().split("=").pop();

var workid={
          method:'POST',
          url:'http://'+IpAdress+':8080/ProductCenter/getProduct',
          params: {id:receiveId},
        }
        $http(workid).then(function(response){
          $scope.allpros = response.data;
        },function(){});

}
