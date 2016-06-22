define(["require", "exports", "./main.controller"], function (require, exports, main_controller_1) {
    "use strict";
    /*@ngInject*/
    mainRouteFunc.$inject = ["$stateProvider"];
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
});
