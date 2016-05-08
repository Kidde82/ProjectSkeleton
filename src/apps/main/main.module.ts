import * as angular from "angular";
import commonConsts from "../common/common.const";
import consts from "./main.const";
import mainRouteFunc from "./main.config.route";
import mainConfigFunc from "./main.config";

let app = angular.module(consts.moduleName, [
	commonConsts.moduleName,
	"ui.router",
	consts.templateName
]);

app.constant(consts.id, consts);
app.config(mainRouteFunc);
app.config(mainConfigFunc);

export default app;