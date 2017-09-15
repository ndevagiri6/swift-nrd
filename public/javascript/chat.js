var app = angular.module('chatApp', ['ngMaterial']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .dark();
});

app.controller('chatController', function ($scope){

});