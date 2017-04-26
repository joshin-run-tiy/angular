# Angular Notes

- ng-init sometimes uses to bootstrap an app, get up and running quick
- $scope - dependency injection

# Setup Angular App
- create directory
- create, index.html, script directory, app.js
- import angular and create angular.js - download, cdn, npm, etc.
- declare html document as Angular app:
`<html ng-app="moreModulesApp">`
- create controller: index.html
- connect to script file
give ng-app name in html
create controller


```
<div ng-controller="MoreModulesModule as ctrl">
  {{ ctrl.helloWorld }}
</div>
```

- register controller: app.js file

```javascript
app.controller('MoreModulesModule', MoreModules);

function MoreModules () {
  this.helloWorld = "Hello, World!"
}
```


### Directives
- attribut directive
```javascript
super-duck
```
  - can pass arguments through

- element directive
```
<super-duck></super-duck>

- html: kabab case
- javascript: camelCase
