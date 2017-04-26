




angular.module('moreDirectivesApp', [])

.controller('IfShowHideCtrl', IfShowHideCtrl)

function IfShowHideCtrl() {}

function RepeatCtrl () {
  this.ourLast = [
    {name: 'Patrick'},
    {name: 'Carrie'},
    {name: 'Tyler'},
    {name: 'Josh'},
    {name: 'Curt'},
    {name: 'Rob'},
    {name: 'Dex'}
  ]
}





// "use strict"
//
// const app = angular.module("ngApp", [])
//
// app.controller("ExampleCtrl", ExampleCtrl)
//
// function ExampleCtrl ($scope) {
//   $scope.txtChange = function() {
//     console.log('ng-change called');
//   }
// }
// app.controller("Ctrl1", CtrlOne);
// app.controller("Ctrl2", CtrlTwo);
//
// function CtrlOne ($scope) {
//   $scope.testVar = "testVar inside CtrlOne";
// }
//
// function CtrlTwo ($scope) {
//   $scope.testVar = "testVar inside CtrlTwo";
// }
