/// <reference path="reference.ts" />

import * as ng from "angular";
import "angular-mocks";
import consts from "./main.const";

describe(("Controller: main"), () => {
	beforeEach(() => {
		ng.mock.module(consts.moduleName);
	});

	describe("Given something", () => {
		describe("When something", () => {
			it("Then something", () => {
				expect(true).toBe(true);
			});
		});
	});
});