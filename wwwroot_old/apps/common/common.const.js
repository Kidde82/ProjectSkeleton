define(["require", "exports"], function (require, exports) {
    "use strict";
    var CommonConst = (function () {
        function CommonConst() {
            this.id = "common";
            this.moduleName = "app-common";
            this.templateName = "common.templates";
            this.controllerAs = "vm";
        }
        return CommonConst;
    }());
    exports.CommonConst = CommonConst;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new CommonConst();
});
