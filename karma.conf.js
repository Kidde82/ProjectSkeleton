module.exports = function(config) {
	config.set({
		basePath: `${__dirname}`,
		frameworks: [
			"systemjs",
			"jasmine"
		],
		// reporters: ["spec"],
		browsers: ["PhantomJS"],
		plugins: [
			"karma-systemjs",
			"karma-phantomjs-launcher",
			"karma-jasmine"
		],
		files: [
			"build/**/*.spec.js"
		],
		systemjs: {
			configFile: "/wwwroot/system.config.js",
			serveFiles: [
				"/wwwroot/bower_components/**/*.js",
				"build/**/*.js"
			],
			config: {
				paths: {
					"angular": "wwwroot/bower_components/angular/angular.js",
					"angular-mocks": "wwwroot/bower_components/angular-mocks/angular-mocks.js"
				}
			},
			proxies: {
				"/base/bower_components/angular/angular.js": `${__dirname}/wwwroot/bower_components/angular/angular.js`
			}
		},
		singleRun: false
	});
}