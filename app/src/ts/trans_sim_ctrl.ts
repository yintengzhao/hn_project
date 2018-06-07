import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("TransSimCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce','$mdSidenav','$check_login'
  function($scope, $interval, $timeout, $window, $http, $sce,$mdSidenav,$check_login) {
    var Ip_Flag=false;
    var IpAdress:string
    if(Ip_Flag==true){
      var IpAdress:string="39.105.79.4";
    }
    else{
      var IpAdress:string="10.134.40.219";
    }












    var E = $window.wangEditor;
    var apply = new E('#apply');
    // // 或者 var editor = new E( document.getElementById('editor') )
    apply.customConfig.menus = [
      'head',  // 标题
  'bold',  // 粗体
  'fontSize',  // 字号
  'fontName',  // 字体
  'italic',  // 斜体
  'foreColor',  // 文字颜色
  'backColor',  // 背景颜色
  'link',  // 插入链接
  'justify',  // 对齐方式
  'table',  // 表格
]
    apply.create();


    var E = $window.wangEditor;
    var parameter = new E('#parameter');
    // // 或者 var editor = new E( document.getElementById('editor') )
    parameter.customConfig.menus = [
      'head',  // 标题
  'bold',  // 粗体
  'fontSize',  // 字号
  'fontName',  // 字体
  'italic',  // 斜体
  'foreColor',  // 文字颜色
  'backColor',  // 背景颜色
  'link',  // 插入链接
  'justify',  // 对齐方式
  'table',  // 表格
]
    parameter.create();

    //退出系统
    $scope.logout=function(){
      $http.get("http://"+IpAdress+":8080/ProductCenter/logout").then(
        function(response){
          $window.location.href="index.html";
        },

        function(){
          alert('logout err');
          $window.location.href="index.html";

        });
    }

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
      // console.log(points, evt);
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
    //展示一级列表
    $http.get("http://"+IpAdress+":8080/ProductCenter/showFirstclass").then(
      function(response){$scope.firstClasses=response.data},
      function(){alert('firstClasseserr')});

    // 增删改查部分.............................................................
$scope.add=function(){
  var fd = new FormData();
  var file = document.querySelector('input[type=file]').files[0];
  fd.append('file', file);
  var workid={
            method:'POST',
            url:'http://'+IpAdress+':8080/ProductCenter/uploadImage',
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
                        url:'http://'+IpAdress+':8080/ProductCenter/addProduct',
                        params: {type:$scope.type;apply:apply.txt.html();parameter:parameter.txt.html();firstclass:$scope.new_firstclass;secondclass:$scope.new_secondclass;image:response.data.path},
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
              ma.apply=ma.apply.substring(0,20)
            }
            $scope.allpros = response.data;
          });
// 删除模块
$scope.del_pro=function(proid){
  var workid={
    method:'POST',
    url:'http://'+IpAdress+':8080/ProductCenter/delProduct',
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
    url:'http://'+IpAdress+':8080/ProductCenter/findbyWord',
    params: { word: $scope.the_max };
  };
  $http(workid).then(function(response){
    for(let ma of response.data){
      ma.apply=ma.apply.substring(0,30)
    }
    $scope.allpros = response.data;    },function(){})
}
//列表模块
$scope.dis_second_class=function(firstclassid){
  $scope.second_class_flag=true;
  //展示二级列表
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
$scope.show_second_class=function(){
  $scope.second_class_flag=true;
}
$scope.hide_second_class=function(){
  $scope.second_class_flag=false;
}
//类别部分
$scope.qwe=function(firstClass){
  $scope.new_firstid=firstClass.id
  $scope.new_firstclass=firstClass.name
  //展示二级列表
  var workid = {
    method: 'POST',
    url: 'http://'+IpAdress+':8080/ProductCenter/showSecondclass',
    headers: {'Content-Type' : 'text/plain;charset=UTF-8'},
    params: { id: $scope.new_firstid },
  }
  $http(workid).then(function(response) {
    $scope.display_secondClasses=response.data;
    // console.log($scope.display_secondClasses[0])
  }, function() { });
  // $http.post('http://'+IpAdress+':8080/ProductCenter/showSecondclass',firstClassid ).then(function(response) {
  //   $scope.display_secondClasses=response.data;
  // }, function() { });
  //展示次类别弹窗
  $scope.toggleSidenav_2 = buildToggler('closeEventsDisabled_2');
  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }
}


//将选择的类给添加产品参数赋值
$scope.qwe_2=function(display_secondClass){
  $scope.new_secondclass=display_secondClass.name
}
//查看主要类商品
$scope.del_tab_flag=false;
$scope.showByFirstclass=function(firstClassid,firstClassname){
  var workid = {
    method: 'POST',
    url: 'http://'+IpAdress+':8080/ProductCenter/showByFirstclass',
    headers: {'Content-Type' : 'text/plain;charset=UTF-8'},
    params: { id: firstClassid },
  }
  $http(workid).then(function(response) {
    $scope.allpros=response.data;
  }, function() { });
  //删除主类别
  $scope.del_firstclass=function(){
    $scope.del_tab_flag=true;
    $scope.del_firstclass_message="你将删除"+firstClassname+"及该分类下(即当前页面)所有产品，你确定吗？";
    $scope.confirm_del=function(){
      var workid = {
        method: 'POST',
        url: 'http://'+IpAdress+':8080/ProductCenter/delFirstclass',
        headers: {'Content-Type' : 'text/plain;charset=UTF-8'},
        params: { id: firstClassid },
      }
      $http(workid).then(function(response) {
        //刷新主类
        $http.get("http://"+IpAdress+":8080/ProductCenter/showFirstclass").then(
          function(response){$scope.firstClasses=response.data},
          function(){alert('firstClasseserr')});
          $scope.del_tab_flag=false;

          $scope.warn_tab_flag=true;
          $timeout(function(){
            $scope.warn_tab_flag=false;
          },1300);

      }, function() { });
    }
  }
}
//查看次要类商品
$scope.showBySecondclass=function(secondClassid,secondClassname){
  var workid = {
    method: 'POST',
    url: 'http://'+IpAdress+':8080/ProductCenter/showBySecondclass',
    headers: {'Content-Type' : 'text/plain;charset=UTF-8'},
    params: { id: secondClassid },
  }
  $http(workid).then(function(response) {
    $scope.allpros=response.data;
  }, function() { });
  //删除次类别
  $scope.del_firstclass=function(){
    $scope.del_tab_flag=true;
    $scope.del_firstclass_message="你将删除"+secondClassname+"及该分类下所有产品，你确定吗？";
    $scope.confirm_del=function(){
      var workid = {
        method: 'POST',
        url: 'http://'+IpAdress+':8080/ProductCenter/delSecondclass',
        headers: {'Content-Type' : 'text/plain;charset=UTF-8'},
        params: { id: secondClassid },
      }
      $http(workid).then(function(response) {
        $scope.del_tab_flag=false;
        $scope.warn_tab_flag=true;
        $timeout(function(){
  $scope.warn_tab_flag=false;
},1300);
      }, function() { });
    }
  }
}
//再想想 X 取消弹窗
$scope.cancel_del_tab=function(){
  $scope.del_tab_flag=false;
}
//添加主类别
$scope.toggleSidenav = buildToggler('closeEventsDisabled');
function buildToggler(componentId) {
  return function() {
    $mdSidenav(componentId).toggle();
  };
}

$scope.add_firstclass=function(){
  var workid = {
    method: 'POST',
    url: 'http://'+IpAdress+':8080/ProductCenter/addFirstclass',
    headers: {'Content-Type' : 'text/plain;charset=UTF-8'},
    params: { name: $scope.add_firstclass_value },
  }
  $http(workid).then(function(response) {
    $scope.add_firstclass_value=null;
    $scope.warn_tab_flag=true;
    $timeout(function(){
      $scope.warn_tab_flag=false;
    },1300);
    //展示一级列表
    $http.get("http://"+IpAdress+":8080/ProductCenter/showFirstclass").then(
      function(response){$scope.firstClasses=response.data},
      function(){alert('firstClasseserr')});
  }, function() { });
}
//添加次类别
$scope.add_secondclass=function(){
  var workid = {
    method: 'POST',
    url: 'http://'+IpAdress+':8080/ProductCenter/addSecondclass',
    headers: {'Content-Type' : 'text/plain;charset=UTF-8'},
    params: {firstname:$scope.new_firstclass; secondname: $scope.add_secondclass_value },
  }
  $http(workid).then(function(response) {
    $scope.warn_tab_flag=true;
    $timeout(function(){
      $scope.warn_tab_flag=false;
    },100);
  }, function() { });
}










//图片预览
$scope.reader = new FileReader();   //创建一个FileReader接口
    // $scope.form = {     //用于绑定提交内容，图片或其他数据
    //     image:{},
    // };
    $scope.thumb = {};      //用于存放图片的base64
    // $scope.thumb_default = {    //用于循环默认的‘加号’添加图片的框
    //     1111:{}
    // };
    $scope.img_display = function(files) {       //单次提交图片的函数
        $scope.guid = (new Date()).valueOf();   //通过时间戳创建一个随机数，作为键名使用
        $scope.reader.readAsDataURL(files[0]);  //FileReader的方法，把图片转成base64
        $scope.reader.onload = function(ev) {
            $scope.$apply(function(){
                $scope.thumb[0] = {
                    imgSrc : ev.target.result,  //接收base64
                }});
              };
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
