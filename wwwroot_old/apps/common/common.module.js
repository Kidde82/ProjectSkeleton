define(["require", "exports", "angular", "./common.const", "./common.config"], function (require, exports, angular, common_const_1, common_config_1) {
    "use strict";
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
});
