import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("RequireSimCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
  function($scope, $interval, $timeout, $window, $http, $sce) {
    $scope.rec=function()
    {
      $scope.first_flag=false;
      $scope.second_flag=false;
      $scope.third_flag=false;
      $scope.fourth_flag=false;
      $scope.fifth_flag=false;
      $scope.sixth_flag=false;


    }
    $scope.first=function()
    {
      $scope.first_flag=true;
      $scope.second_flag=false;
      $scope.third_flag=false;
      $scope.fourth_flag=false;
      $scope.fifth_flag=false;
      $scope.sixth_flag=false;

    }
    $scope.second=function()
    {
      $scope.first_flag=false;
      $scope.second_flag=true;
      $scope.third_flag=false;
      $scope.fourth_flag=false;
      $scope.fifth_flag=false;
      $scope.sixth_flag=false;
    }
    $scope.third=function()
    {
      $scope.first_flag=false;
      $scope.second_flag=false;
      $scope.third_flag=true;
      $scope.fourth_flag=false;
      $scope.fifth_flag=false;
      $scope.sixth_flag=false;
    }
    $scope.fourth=function()
    {
      $scope.first_flag=false;
      $scope.second_flag=false;
      $scope.third_flag=false;
      $scope.fourth_flag=true;
      $scope.fifth_flag=false;
      $scope.sixth_flag=false;
    }
    $scope.fifth=function()
    {
      $scope.first_flag=false;
      $scope.second_flag=false;
      $scope.third_flag=false;
      $scope.fourth_flag=false;
      $scope.fifth_flag=true;
      $scope.sixth_flag=false;
    }
    $scope.sixth=function()
    {
      $scope.first_flag=false;
      $scope.second_flag=false;
      $scope.third_flag=false;
      $scope.fourth_flag=false;
      $scope.fifth_flag=false;
      $scope.sixth_flag=true;
    }
    $window.onclick=function(){}

}
