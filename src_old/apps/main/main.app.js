"use strict";
var angular = require("angular");
var main_module_1 = require("./main.module");
main_module_1.default.config(function () {
    // Main app init
});
angular.element(document).ready(function () {
    angular.bootstrap(document.documentElement, [main_module_1.default.name], {
        strictDi: true
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = main_module_1.default;
//# sourceMappingURL=main.app.js.map