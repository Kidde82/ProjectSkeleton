/// <reference path="reference.ts" />
"use strict";
var ng = require("angular");
require("angular-mocks");
var main_const_1 = require("./main.const");
describe(("Controller: main"), function () {
    beforeEach(function () {
        ng.mock.module(main_const_1.default.moduleName);
    });
    describe("Given something", function () {
        describe("When something", function () {
            it("Then something", function () {
                expect(true).toBe(true);
            });
        });
    });
});
//# sourceMappingURL=main.controller.spec.js.map