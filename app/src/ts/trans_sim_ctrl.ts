import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("TransSimCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
  function($scope, $interval, $timeout, $window, $http, $sce) {


    //time
    $interval(function() { $scope.nowtime = new Date(); }
    $interval(function() {
        for (let i of [0, 1]) {
          var ar = $scope.data[i];
          ar.shift();
          ar.push(Math.floor(Math.random() * 100) + 1);
        }
        var ar = $scope.data2[0];
        ar.shift();
        ar.push(Math.floor(Math.random() * 100) + 1);
      }, 500)
    //chart----------------------------------------
    const DATA_NUM = 30;
    $scope.labels = Array(DATA_NUM).join(1).split('').map(function() { return ""; });
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      Array(DATA_NUM).join(1).split('').map(function() { return 0; }),
      Array(DATA_NUM).join(1).split('').map(function() { return 0; }),
    ];
    $scope.data2 = [
      Array(DATA_NUM).join(1).split('').map(function() { return 0; }),
    ];
    $scope.onClick = function(points, evt) {
      console.log(points, evt);
    };
    $scope.colors = ['#FF5C00', '#167BAC'];
    $scope.colors2 = ['#10BE1C'];
    $scope.datasetOverride = [{ lineTension: 0, fill: false }, { lineTension: 0, fill: false }, { lineTension: 0, fill: true }];
    $scope.datasetOverride2 = [{ fill: true }];
    $scope.options = {
      scales: {
        yAxes: [{
          ticks: { display: false, suggestedMin: 0 }
        }],
        xAxes: [{
          ticks: { display: false, suggestedMin: 0 }
        }]
      },
      // https://stackoverflow.com/questions/37621020/setting-width-and-height
      responsive: true,
      maintainAspectRatio: false,
      legends: {
        display: false
      }
    };
    // 增删改查部分.............................................................
$scope.save=function(){
  var fd = new FormData();
        var file = document.querySelector('input[type=file]').files[0];
        fd.append('file', file);
  var workid={
            method:'POST',
            url:'http://10.134.45.94:8080/ProductCenter/uploadImage',
            // params: { file: $scope.myFile },
            data: fd,
            headers: {'Content-Type':undefined},
            transformRequest: angular.identity,
          }
          $http(workid).then(function(response){},function(){alert('err')});
}
// 添加模块
$scope.add=function(){
  var workid={
            method:'POST',
            url:'http://10.134.45.94:8080/ProductCenter/addProduct',
            params: {type:$scope.type;apply:$scope.apply;parameter:$scope.parameter;firstclass:$scope.firstclass;secondclass:$scope.secondclass;image:$scope.image},
          }
          $http(workid).then(function(response){console.log(response)},function(){alert('err')});
}











}])

angular.bootstrap(document.getElementsByTagName("body")[0], ['fmid']);
