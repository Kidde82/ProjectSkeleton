define(["require", "exports"], function (require, exports) {
    "use strict";
    var MainConst = (function () {
        function MainConst() {
            this.id = "main";
            this.moduleName = "app-main";
            this.templateName = "main.templates";
        }
        return MainConst;
    }());
    exports.MainConst = MainConst;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new MainConst();
});
