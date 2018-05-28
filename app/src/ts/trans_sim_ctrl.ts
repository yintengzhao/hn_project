import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("TransSimCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
  function($scope, $interval, $timeout, $window, $http, $sce) {
    var IpAdress:string="10.134.45.94";


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
$scope.add=function(){
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
          };
          $http(workid).then
          (
            function(response){
              // 添加模块
              var workid={
                        method:'POST',
                        url:'http://10.134.45.94:8080/ProductCenter/addProduct',
                        params: {type:$scope.type;apply:$scope.apply;parameter:$scope.parameter;firstclass:$scope.firstclass;secondclass:$scope.secondclass;image:response.data.path},
                      }
                      $http(workid).then(function(response){
                        // 刷新产品信息
                        $http.get("http://"+IpAdress+":8080/ProductCenter/showAll")
                                  .then(function(response) {
                                    for(let ma of response.data){
                                      ma.apply=ma.apply.substring(0,30)
                                    }
                                    $scope.allpros = response.data;
                                  });
                      },function(){
                        // alert('err');
                        $http.get("http://"+IpAdress+":8080/ProductCenter/showAll")
                                  .then(function(response) {
                                    for(let ma of response.data){
                                      ma.apply=ma.apply.substring(0,30)
                                    }
                                    $scope.allpros = response.data;
                                  });
                    });
            },
            function(response){console.log(response)}
          );
}
// 展示后台信息
$http.get("http://"+IpAdress+":8080/ProductCenter/showAll")
          .then(function(response) {
            for(let ma of response.data){
              ma.apply=ma.apply.substring(0,30)
            }
            $scope.allpros = response.data;
          });
// 删除模块
$scope.del_pro=function(proid){
  var workid={
    method:'POST',
    url:'http://10.134.45.94:8080/ProductCenter/delProduct',
    params: { id: proid }
  };
  $http(workid).then(function(){
    $http.get("http://"+IpAdress+":8080/ProductCenter/showAll")
              .then(function(response) {
                for(let ma of response.data){
                  ma.apply=ma.apply.substring(0,30)
                }
                $scope.allpros = response.data;
              });
  },function(){})

};
// 搜索模块
$scope.search_pro=function(){
  var workid={
    method:'POST',
    url:'http://10.134.45.94:8080/ProductCenter/findbyWord',
    params: { word: $scope.the_max };
  };
  $http(workid).then(function(response){
    for(let ma of response.data){
      ma.apply=ma.apply.substring(0,30)
    }
    $scope.allpros = response.data;    },function(){})

}
















//图片预览
$scope.reader = new FileReader();   //创建一个FileReader接口
    $scope.form = {     //用于绑定提交内容，图片或其他数据
        image:{},
    };
    $scope.thumb = {};      //用于存放图片的base64
    $scope.thumb_default = {    //用于循环默认的‘加号’添加图片的框
        1111:{}
    };

    $scope.img_upload = function(files) {       //单次提交图片的函数
        $scope.guid = (new Date()).valueOf();   //通过时间戳创建一个随机数，作为键名使用
        $scope.reader.readAsDataURL(files[0]);  //FileReader的方法，把图片转成base64
        $scope.reader.onload = function(ev) {
            $scope.$apply(function(){
                $scope.thumb[$scope.guid] = {
                    imgSrc : ev.target.result,  //接收base64
                }
            });
        };

        var data = new FormData();      //以下为像后台提交图片数据
        data.append('image', files[0]);
        data.append('guid',$scope.guid);
        $http({
            method: 'post',
            url: '/comm/test-upload.php?action=success',
            data:data,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function(data) {
            if (data.result_code == 'SUCCESS') {
                $scope.form.image[data.guid] = data.result_value;
                $scope.thumb[data.guid].status = 'SUCCESS';
                console.log($scope.form)
            }
            if(data.result_code == 'FAIL'){
                console.log(data)
            }
        })
    };

    $scope.img_del = function(key) {    //删除，删除的时候thumb和form里面的图片数据都要删除，避免提交不必要的
        var guidArr = [];
        for(var p in $scope.thumb){
            guidArr.push(p);
        }
        delete $scope.thumb[guidArr[key]];
        delete $scope.form.image[guidArr[key]];
    };
}])

angular.bootstrap(document.getElementsByTagName("body")[0], ['fmid']);
