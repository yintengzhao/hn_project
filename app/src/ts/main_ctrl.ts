import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("MainCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
  function($scope, $interval, $timeout, $window, $http, $sce) {
    var IpAdress: string = "10.134.40.219";
    $scope.login = function() {
      var workid = {
        method: 'POST',
        url: 'http://' + IpAdress + ':8080/ProductCenter/login',
        params: {
          username: $scope.username,
          password: $scope.password
        }
      };
      $http(workid).then(function(response){
        console.log(response.data.result);
        if(response.data.result=="ok"){
          // alert('登录成功')
          $window.location.href="trans_sim.html";
        }
        else{
          alert('用户名或密码错误')
        }
      })
    };


$scope.get_html=function(){
  // alert('hanshu');
  $http.get("http://"+IpAdress+":8080/ProductCenter/logincheck")
            .then(function(response) {
              alert(response.data.result)
              // if(response.data.result=="loggedout")
              // {
              //   $window.location.href="index.html";
              // }
              // else{
              //   $window.location.href="trans_sim.html";
              //
              // }
            });
}

//退出系统
$scope.logout=function(){
  $http.get("http://"+IpAdress+":8080/ProductCenter/logout").then(
    function(response){
      // $window.location.href="index.html";
    },

    function(){
      alert('logout err');
      $window.location.href="index.html";

    });
}

    // console.log($scope);
//     var E = $window.wangEditor;
//     var editor = new E('#editor');
//     // // 或者 var editor = new E( document.getElementById('editor') )
//     editor.customConfig.menus = [
//       'head',  // 标题
//   'bold',  // 粗体
//   'fontSize',  // 字号
//   'fontName',  // 字体
//   'italic',  // 斜体
//   'foreColor',  // 文字颜色
//   'backColor',  // 背景颜色
//   'link',  // 插入链接
//   'justify',  // 对齐方式
//   'table',  // 表格
// ]
//     editor.create();
// $scope.get_html=function(){
//   alert(editor.txt.html())
//
// }
}])
