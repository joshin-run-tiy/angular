var app = angular.module('app', []);

app.directive("superDuck", function() {
  return {
    restrict: 'EAC',
    scope: {
      'duckname': '@'
    },
    link: function(scope, element, attrs) {
      scope.duckname = attrs.duckname || "Default Duck"
    // register DOM listeners, exicuted after ... cloned
    // link: is a method
    },
    template: "<div><p>Please tell me your coding woes so we can paddle to the finish line together!</p><p>Yours truwly, {{duckname}}</p></div>"
  }
})
