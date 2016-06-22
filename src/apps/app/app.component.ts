import { Component } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { SampleService } from "../services/sample.service";
import { StartpageComponent } from "../startpage/startpage.component";

@Component({
	selector: "app-main",
	templateUrl: "apps/app/app.component.html",
	styleUrls: ["apps/app/app.component.css"],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		SampleService
	]
})
@RouteConfig([
	{
		path: "/startpage",
		name: "Startpage",
		component: StartpageComponent,
		useAsDefault: true
	}
])
export class AppComponent {
	title = "The title";
}