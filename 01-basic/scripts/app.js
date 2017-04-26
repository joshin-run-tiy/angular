"use strict"

const app = angular.module('ourApp', []);

app.controller('FirstCtrl', First);

function First ($scope) {
  console.log('main controller to groundcontrol');

  let now = new Date();
  $scope.now = now.toTimeString();
  console.log('$scope.now is:', $scope.now);

  $scope.updateTime = function() {
    let now = new Date();
    $scope.now = now.toTimeString();
  }
}

app.controller("BindingController", ['$scope', function($scope) {

}])

const

now.getDate
now.getFullYear
now.getMonth() (0 = January)
now.getDay() - day of the week (0 = Sunday)
now.getMinute()
now.getDate
