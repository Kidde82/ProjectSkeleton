module myApp.Main {
	"use strict";

	export class MainController {
		constructor() {
			this.init();
		}

		private init(): void {
			console.log("Main Controller");
		}
	}

	angular
		.module("myApp.Main")
		.controller("MainController", MainController);
}