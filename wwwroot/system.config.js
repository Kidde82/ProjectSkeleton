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
				"main-templates",
				"app-common"
			]
		},
		"app-common": {
			"format": "amd",
			"deps": [
				"angular",
				"angular-ui-router",
				"common-templates"
			]
		}
	},
	map: {
		"angular": "bower/angular/angular",
		"angular-ui-router": "bower/angular-ui-router/release/angular-ui-router",
		"app-common": "/apps/common/common.module",
		"common-templates": "/apps/common/common.templates",
		"app-main": "/apps/main/main.app",
		"main-module": "/apps/main/main.module",
		"main-templates": "/apps/main/main.templates"
	}
});