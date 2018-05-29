import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("RequireSimCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
  function($scope, $interval, $timeout, $window, $http, $sce) {
    var IpAdress:string="39.105.79.4";
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
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"组合开关类";secondclass:"2-4矿用隔爆兼本质安全型组合开关"},
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
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"组合开关类";secondclass:"4-6矿用隔爆兼本质安全型组合开关"},
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
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"组合开关类";secondclass:"6-8矿用隔爆兼本质安全型组合开关"},
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
      $scope.first_4=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"组合开关类";secondclass:"9-10矿用隔爆兼本质安全型组合开关"},
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
      $scope.first_5=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"组合开关类";secondclass:"9-12矿用隔爆兼本质安全型组合开关"},
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
      $scope.first_6=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"组合开关类";secondclass:"8-9卧式矿用隔爆兼本质安全型"},
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
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"通讯控制";secondclass:"KTC101系列组合扩音电话"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.second_flag=false;
                },function(){});
      }
      $scope.second_2=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"通讯控制";secondclass:"KTC102系列组合扩音电话"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.second_flag=false;
                },function(){});
      }
      $scope.second_3=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"通讯控制";secondclass:"急停闭锁开关"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.second_flag=false;
                },function(){});
      }
      $scope.second_4=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"通讯控制";secondclass:"控制器"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.second_flag=false;
                },function(){});
      }
      $scope.second_5=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"通讯控制";secondclass:"多功能终端"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.second_flag=false;
                },function(){});
      }
      $scope.second_6=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"通讯控制";secondclass:"电源"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.second_flag=false;
                },function(){});
      }
      $scope.second_7=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"通讯控制";secondclass:"输入输出"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.second_flag=false;
                },function(){});
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
      $scope.third_1=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"传感器";secondclass:"速度传感器CSC6"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.third_flag=false;
                },function(){});
      }
      $scope.third_2=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"传感器";secondclass:"堆煤传感器GUD-330"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.third_flag=false;
                },function(){});
      }
      $scope.third_3=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"传感器";secondclass:"跑偏传感器GEJ-15"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.third_flag=false;
                },function(){});
      }
      $scope.third_4=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"传感器";secondclass:"温度传感器GWM-45"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.third_flag=false;
                },function(){});
      }
      $scope.third_5=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"传感器";secondclass:"烟雾传感器GQL0.1"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.third_flag=false;
                },function(){});
      }

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
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showFirstclass',
                  params: {firstclass:"变频器"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.fourth_flag=false;
                },function(){});


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
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"负荷中心"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.fifth_flag=false;
                },function(){});



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
      $scope.sixth_1=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"支架电液";secondclass:"阀类产品"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.sixth_flag=false;
                },function(){});
      }
      $scope.sixth_2=function(){
        $scope.allpros_1=[];
        $scope.allpros_2=[];
        var workid={
                  method:'POST',
                  url:'http://'+IpAdress+':8080/ProductCenter/showClass',
                  params: {firstclass:"支架电液";secondclass:"电控产品"},
                }
                $http(workid).then(function(response){
                  $scope.allpros_2 = response.data;
                  while($scope.allpros_2>$scope.allpros_1){
                    $scope.allpros_1.push($scope.allpros_2.shift())
                  };
                  $scope.allpros_flag=true;
                  $scope.sixth_flag=false;
                },function(){});
      }

    }
    $window.onclick=function(){}

}
