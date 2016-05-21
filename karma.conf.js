module.exports = function(config) {
	config.set({
		basePath: "wwwroot",
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
			"../build/**/*.spec.js"
		],
		systemjs: {
			configFile: "/system.config.js",
			serveFiles: [
				"/bower_components/**/*.js",
				"../build/**/*.js"
			],
			config: {
				paths: {
					"angular-mocks": "bower_components/angular-mocks/angular-mocks.js"
				}
			}
		},
		singleRun: false
	});
}