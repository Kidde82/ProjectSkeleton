import {ILocationProvider} from "angular";
import {IStateProvider, IUrlRouterProvider} from "angular-ui-router";

/*@ngInject*/
export default function commonConfigFunc(
	$locationProvider: ILocationProvider,
	$urlRouterProvider: IUrlRouterProvider,
	$stateProvider: IStateProvider
) {
	// CommonConfig
	$locationProvider.html5Mode(true);

	$urlRouterProvider.when("", "/startpage");
	$urlRouterProvider.otherwise("/startpage");
}