"use strict";
var angular = require("angular");
var common_const_1 = require("./common.const");
var common_config_1 = require("./common.config");
var app = angular.module(common_const_1.default.moduleName, [
    "ui.router",
    common_const_1.default.templateName
]);
app.constant(common_const_1.default.id, common_const_1.default);
app.config(common_config_1.default);
app.run(function () {
    // Run
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
//# sourceMappingURL=common.module.js.map