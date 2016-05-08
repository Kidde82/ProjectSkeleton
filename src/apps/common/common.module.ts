import * as angular from "angular";
import consts from "./common.const";
import commonConfigFunc from "./common.config";

let app = angular.module(consts.moduleName, [
	"ui.router",
	consts.templateName
]);

app.constant(consts.id, consts);
app.config(commonConfigFunc);

app.run(() => {
	// Run
});

export default app;