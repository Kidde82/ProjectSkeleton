define(["require", "exports", "angular", "./main.module"], function (require, exports, angular, main_module_1) {
    "use strict";
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
});
