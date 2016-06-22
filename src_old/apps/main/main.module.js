"use strict";
var angular = require("angular");
var common_const_1 = require("../common/common.const");
var main_const_1 = require("./main.const");
var main_config_route_1 = require("./main.config.route");
var main_config_1 = require("./main.config");
var app = angular.module(main_const_1.default.moduleName, [
    common_const_1.default.moduleName,
    "ui.router",
    main_const_1.default.templateName
]);
app.constant(main_const_1.default.id, main_const_1.default);
app.config(main_config_route_1.default);
app.config(main_config_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
//# sourceMappingURL=main.module.js.map