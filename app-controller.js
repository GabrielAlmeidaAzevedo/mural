(function () {
    const app = angular.module('mural');
    app.controller('AppCtrl', function AppCtrl() {
      const vm = this;
      vm.msg = "oi (vindo do controller)";
    });
  }());