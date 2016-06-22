import {IStateProvider} from "angular-ui-router";

import {MainController} from "./main.controller";

/*@ngInject*/
export default function mainRouteFunc(
	$stateProvider: IStateProvider) {

	$stateProvider
		.state("startpage", {
			controller: MainController,
			templateUrl: "main.html",
			url: "/"
		});
}