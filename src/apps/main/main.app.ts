import * as angular from "angular";
import app from "./main.module";

app.config(() => {
	// Main app init
});

angular.element(document).ready(() => {
	angular.bootstrap(document.documentElement, ["app-main"]);
});

export default app;