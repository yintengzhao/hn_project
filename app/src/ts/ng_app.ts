// https://github.com/Microsoft/TypeScript/issues/10638#issuecomment-278094733
import * as __angular from "angular";

declare global {
    const angular: typeof __angular;
}
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
}
]);

ng_app.service('$check_login',function($window){

  // $window.location.href="index.html";
})
//

export { ng_app }
