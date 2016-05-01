System.config({
	baseUrl: "/",
	transpiler: false,
	defaultJSExtensions: true,
	paths: {
		"*": "/wwwroot/*",
		"bower/*": "/bower_components/*"
	},
	meta: {
		"angular-ui-router": {
			"format": "global",
			"deps": [
				"angular"
			]
		},
		"angular" : {
			"exports": "angular",
			"format": "global"
		},
		"app-main": {
			"format": "amd",
			"deps": [
				"angular",
				"angular-ui-router",
				"main-templates"
			]
		}
	},
	map: {
		"angular": "bower/angular/angular",
		"angular-ui-router": "bower/angular-ui-router/release/angular-ui-router",
		"app-main": "/apps/main/main.app",
		"main-module": "/apps/main/main.module",
		"main-templates": "/apps/main/main.templates"
	}
});