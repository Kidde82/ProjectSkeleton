define(["require", "exports", "angular", "../common/common.const", "./main.const", "./main.config.route", "./main.config"], function (require, exports, angular, common_const_1, main_const_1, main_config_route_1, main_config_1) {
    "use strict";
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
});
