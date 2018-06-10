import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("WatchGoodsCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce','$location',
  function($scope, $interval, $timeout, $window, $http, $sce,$location) {
    var Ip_Flag=false;
    var IpAdress:string
    if(Ip_Flag==true){
      var IpAdress:string="39.105.79.4";
    }
    else{
      var IpAdress:string="10.134.38.51";
    }
var receiveId=$location.absUrl().split("=").pop();

var workid={
          method:'POST',
          url:'http://'+IpAdress+':8080/ProductCenter/getProduct',
          params: {id:receiveId},
        }
        $http(workid).then(function(response){
          $scope.allpros = response.data;
          $scope.apply_as_html = $sce.trustAsHtml( $scope.allpros.apply );
          $scope.parameter_as_html = $sce.trustAsHtml( $scope.allpros.parameter );
        },function(){});


        $scope.go_back = function() {
      //$ionicHistory.forwardView();
		$ionicHistory.goBack();
       //alert(111);
	};

  window.addEventListener("popstate",function(e){
    alert('sdsjjfjk');
  })
}
