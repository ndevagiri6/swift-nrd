var app = angular.module('chatApp', ['ngMaterial']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .dark();
});

app.controller('chatController', function ($scope){

	$scope.messages = [
	{
		sender: "BOT",
		text:"Hello There,What do you want to know?",
		time:"13:12"
	},
	{
		sender: "User",
		text:"Hi, I wanted to check on weather.",
		time:"13:12"
	},
	{
		sender: "BOT",
		text:"Today the weather in Bengaluru is 36 C.",
		time:"13:13"
	},
	
	{
		sender: "User",
		text:"Thanks.",
		time:"13:14"
	}];

	var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
	exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);    
   };

});