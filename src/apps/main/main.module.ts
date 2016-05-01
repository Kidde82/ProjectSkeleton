import consts from "./main.const";
import mainRouteFunc from "./main.config.route";
import mainConfigFunc from "./main.config";
import * as angular from "angular";

let app = angular.module(consts.moduleName, [
	"ui.router",
	consts.templateName
]);

app.constant(consts.id, consts);
app.config(mainRouteFunc);
app.config(mainConfigFunc);

export default app;