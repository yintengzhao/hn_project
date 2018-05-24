import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("RequireSimCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
  function($scope, $interval, $timeout, $window, $http, $sce) {
    var IpAdress:string="10.134.45.94";
    $scope.allpros_flag=true
    // 展示所有商品
    $scope.allpros_1=[];
    $http.get("http://"+IpAdress+":8080/ProductCenter/showAll")
              .then(function(response) {
                console.log(response);
                $scope.allpros_2 = response.data;
                while($scope.allpros_2>$scope.allpros_1){
                  $scope.allpros_1.push($scope.allpros_2.shift())
                }
                console.log($scope.allpros_2,$scope.allpros_1)
              });







    $scope.rec=function()
    {
      $scope.first_flag=false;
      $scope.second_flag=false;
      $scope.third_flag=false;
      $scope.fourth_flag=false;
      $scope.fifth_flag=false;
      $scope.sixth_flag=false;
      $scope.allpros_flag=true;
      $scope.allpros_1=[];
      $scope.allpros_2=[];
      $http.get("http://"+IpAdress+":8080/ProductCenter/showAll")
                .then(function(response) {
                  console.log(response);
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  }
                  console.log($scope.allpros_2,$scope.allpros_1)
                });


    }
    $scope.first=function()
    {
      $scope.first_flag=true;
      $scope.second_flag=false;
      $scope.third_flag=false;
      $scope.fourth_flag=false;
      $scope.fifth_flag=false;
      $scope.sixth_flag=false;
      $scope.allpros_flag=false;
      $scope.first_1=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];

        var workid={
                  method:'POST',
                  url:'http://10.134.45.94:8080/ProductCenter/showClass',
                  params: {firstclass:"组合开关类";secondclass:"矿用隔爆兼本质安全型组合开关"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.first_flag=false;
                },function(){});
      }
      $scope.first_2=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://10.134.45.94:8080/ProductCenter/showClass',
                  params: {firstclass:"组合开关类";secondclass:"矿用隔爆兼本质安全型组合开关"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.first_flag=false;
                },function(){});
      }
      $scope.first_3=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://10.134.45.94:8080/ProductCenter/showClass',
                  params: {firstclass:"组合开关类";secondclass:"矿用隔爆兼本质安全型组合开关"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.first_flag=false;
                },function(){alert('err')});
      }
      $scope.first_4=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://10.134.45.94:8080/ProductCenter/showClass',
                  params: {firstclass:"组合开关类";secondclass:"矿用隔爆兼本质安全型组合开关"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.first_flag=false;
                },function(){alert('err')});
      }
      $scope.first_5=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://10.134.45.94:8080/ProductCenter/showClass',
                  params: {firstclass:"组合开关类";secondclass:"矿用隔爆兼本质安全型组合开关"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.first_flag=false;
                },function(){alert('err')});
      }
      $scope.first_6=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://10.134.45.94:8080/ProductCenter/showClass',
                  params: {firstclass:"组合开关类";secondclass:"矿用隔爆兼本质安全型组合开关"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.first_flag=false;
                },function(){alert('err')});
      }

    }
    $scope.second=function()
    {
      $scope.first_flag=false;
      $scope.second_flag=true;
      $scope.third_flag=false;
      $scope.fourth_flag=false;
      $scope.fifth_flag=false;
      $scope.sixth_flag=false;
      $scope.allpros_flag=false;
      $scope.second_1=function(){
        var workid={
                  method:'POST',
                  url:'http://10.134.45.94:8080/ProductCenter/showClass',
                  params: {firstclass:"组合开关类";secondclass:"矿用隔爆兼本质安全型组合开关"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.first_flag=false;
                },function(){alert('err')});
      }

    }
    $scope.third=function()
    {
      $scope.first_flag=false;
      $scope.second_flag=false;
      $scope.third_flag=true;
      $scope.fourth_flag=false;
      $scope.fifth_flag=false;
      $scope.sixth_flag=false;
      $scope.allpros_flag=false;

    }
    $scope.fourth=function()
    {
      $scope.first_flag=false;
      $scope.second_flag=false;
      $scope.third_flag=false;
      $scope.fourth_flag=true;
      $scope.fifth_flag=false;
      $scope.sixth_flag=false;
      $scope.allpros_flag=false;

    }
    $scope.fifth=function()
    {
      $scope.first_flag=false;
      $scope.second_flag=false;
      $scope.third_flag=false;
      $scope.fourth_flag=false;
      $scope.fifth_flag=true;
      $scope.sixth_flag=false;
      $scope.allpros_flag=false;

    }
    $scope.sixth=function()
    {
      $scope.first_flag=false;
      $scope.second_flag=false;
      $scope.third_flag=false;
      $scope.fourth_flag=false;
      $scope.fifth_flag=false;
      $scope.sixth_flag=true;
      $scope.allpros_flag=false;

    }
    $window.onclick=function(){}

}
