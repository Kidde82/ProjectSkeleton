"use strict";
var main_controller_1 = require("./main.controller");
/*@ngInject*/
function mainRouteFunc($stateProvider) {
    $stateProvider
        .state("startpage", {
        controller: main_controller_1.MainController,
        templateUrl: "main.html",
        url: "/"
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mainRouteFunc;
//# sourceMappingURL=main.config.route.js.map