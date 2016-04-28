angular.module("myApp", [
	"ui.router",
	"myApp.Templates",
	"myApp.Main"
])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.when("", "/startpage");
  $urlRouterProvider.otherwise("/startpage");
  $locationProvider.html5Mode(true);
  //
  // Now set up the states
  $stateProvider
    .state("startpage", {
      templateUrl: "main/main.html",
	  url: "/"
    });
});