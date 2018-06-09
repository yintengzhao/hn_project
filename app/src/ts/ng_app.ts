// https://github.com/Microsoft/TypeScript/issues/10638#issuecomment-278094733
import * as __angular from "angular";

declare global {
    const angular: typeof __angular;
}
var IpAdress:string="10.134.38.92";

//====


let ng_app = angular.module(
  'fmid',
  [
    // https://material.angularjs.org/latest/
    'ngMaterial',
    // https://klarsys.github.io/angular-material-icons/
    'ngMdIcons',
    // 'ngResource',
    // 'ngMessages',
    'chart.js',
  ]
)

ng_app.config(['$httpProvider',function($httpProvider) {
$httpProvider.defaults.useXDomain=true;
$httpProvider.defaults.headers.common['X-Requested-With'];
// $httpProvider.defaults.crossDomain:true,
$httpProvider.defaults.withCredentials = true;
}
]);

ng_app.service('$check_login',function($window,$http){
  $http.get("http://"+IpAdress+":8080/ProductCenter/logincheck")
            .then(function(response) {
              if(response.data.result=="loggedout")
              {
                alert('请输入用户名和密码')
                $window.location.href="index.html";
              }
              else{
              }
            });

  // $window.location.href="index.html";
})
//

export { ng_app }
