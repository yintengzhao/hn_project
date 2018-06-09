import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()
ng_app.controller("RequireSimCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
  function($scope, $interval, $timeout, $window, $http, $sce) {
    var Ip_Flag = false;
    var IpAdress: string
if (Ip_Flag == true) {
  var IpAdress: string = "39.105.79.4";
}
else {
  var IpAdress: string = "10.134.38.61";
}
$scope.allpros_flag = true;
$scope.second_class_flag=false;

$scope.pro_part_flag =true;
$scope.search_bar_flag =false;
// 展示所有商品
$scope.allpros_1 = [];
$scope.test = [];
$http.get("http://" + IpAdress + ":8080/ProductCenter/showAll")
  .then(function(response) {
    for (let ma of response.data) {
      ma.image = ma.image.split("image/")[0] + "image/thumb_" + ma.image.split("image/")[1];
    }
    $scope.allpros_2 = response.data;
    $scope.test = [];
    for (var i = 0; i < $scope.allpros_2.length; i += 2) {
      $scope.test.push($scope.allpros_2.slice(i, i + 2));
    };
  });
//所有产品
$scope.rec = function() {
  $scope.second_class_flag=false;
  $scope.allpros_flag = true;
  $scope.allpros_1 = [];
  $scope.allpros_2 = [];
  $http.get("http://" + IpAdress + ":8080/ProductCenter/showAll")
    .then(function(response) {
      for (let ma of response.data) {
        ma.image = ma.image.split("image/")[0] + "image/thumb_" + ma.image.split("image/")[1];
      }

      $scope.allpros_2 = response.data;
      $scope.test = [];
      for (var i = 0; i < $scope.allpros_2.length; i += 2) {
        $scope.test.push($scope.allpros_2.slice(i, i + 2));
      }
    });
}
//展示一级列表
$http.get("http://"+IpAdress+":8080/ProductCenter/showFirstclass").then(
  function(response){$scope.firstClasses=response.data},
  function(){alert('firstClasseserr')});

  //展示二级列表

  $scope.dis_second_class=function(firstclassid){
    $scope.second_class_flag=true;
    $scope.allpros_flag = false;
    var workid = {
      method: 'POST',
      url: 'http://'+IpAdress+':8080/ProductCenter/showSecondclass',
      headers: {'Content-Type' : 'text/plain;charset=UTF-8'},
      params: { id: firstclassid },
    }
    $http(workid).then(function(response) {
      $scope.secondClasses=response.data;
    }, function() { });
  }

  //查看次要类商品
  $scope.showBySecondclass=function(secondClassid,secondClassname){
    $scope.allpros_flag = true;
    $scope.second_class_flag=false;


    $scope.allpros_1 = [];
    $scope.test = [];

    var workid = {
      method: 'POST',
      url: 'http://'+IpAdress+':8080/ProductCenter/showBySecondclass',
      headers: {'Content-Type' : 'text/plain;charset=UTF-8'},
      params: { id: secondClassid },
    }
    $http(workid).then(function(response) {
      for (let ma of response.data) {
        ma.image = ma.image.split("image/")[0] + "image/thumb_" + ma.image.split("image/")[1];
      }
      $scope.allpros_2 = response.data;
      $scope.test = [];
      for (var i = 0; i < $scope.allpros_2.length; i += 2) {
        $scope.test.push($scope.allpros_2.slice(i, i + 2));
      };

    }, function() { });
  }
//搜索商品
$scope.history_state=[];
$scope.search_pro=function(){
  $scope.search_bar_flag =true;
}
$scope.hide_search_bar=function(e){
  $scope.search_bar_flag =false;
}
$scope.prevent_event=function($event){
$event.stopPropagation();
}

$scope.show_pro=function(){
  $scope.allpros_1 = [];
  $scope.allpros_2 = [];
  var workid={
    method:'POST',
    url:'http://'+IpAdress+':8080/ProductCenter/findbyWord',
    params: { word: $scope.the_max };
  };
  $http(workid).then(function(response){
    for (let ma of response.data) {
      ma.image = ma.image.split("image/")[0] + "image/thumb_" + ma.image.split("image/")[1];
    }


    $scope.allpros_2 = response.data;
    $scope.test = [];
    for (var i = 0; i < $scope.allpros_2.length; i += 2) {
      $scope.test.push($scope.allpros_2.slice(i, i + 2));
    }
    $scope.allpros_flag = true;
    $scope.search_bar_flag =false;
    $scope.the_max="";
  },function(){})
}
// $scope.show_back=function(){
//   $scope.pro_part_flag =true;
//   $scope.search_bar_flag =false;
//   $scope.allpros_flag=$scope.history_state.shift();
//   $scope.first_flag=$scope.history_state.shift();
//   $scope.second_flag=$scope.history_state.shift();
//   $scope.third_flag=$scope.history_state.shift();
//   $scope.fourth_flag=$scope.history_state.shift();
//   $scope.fifth_flag=$scope.history_state.shift();
//   $scope.sixth_flag=$scope.history_state.shift();
//   console.log(  $scope.history_state);
// }
  }])
