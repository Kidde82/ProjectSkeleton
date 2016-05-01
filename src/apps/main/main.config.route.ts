import {IStateProvider} from "angular-ui-router";

import {MainController} from "./main.controller";

/*@ngInject*/
export default function mainRouteFunc(
	$stateProvider: IStateProvider,
	$urlRouterProvider: any,
	$locationProvider: any) {

	$urlRouterProvider.when("", "/startpage");
	$urlRouterProvider.otherwise("/startpage");
	$locationProvider.html5Mode(true);

	$stateProvider
	.state("startpage", {
		controller: MainController,
		templateUrl: "main.html",
		url: "/"
	});
}