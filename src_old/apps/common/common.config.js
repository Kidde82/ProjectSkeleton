"use strict";
/*@ngInject*/
function commonConfigFunc($locationProvider, $urlRouterProvider, $stateProvider) {
    // CommonConfig
    $locationProvider.html5Mode(true);
    $urlRouterProvider.when("", "/startpage");
    $urlRouterProvider.otherwise("/startpage");
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = commonConfigFunc;
//# sourceMappingURL=common.config.js.map