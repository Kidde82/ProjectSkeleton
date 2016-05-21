module.exports = function(config) {
	config.set({
		basePath: "wwwroot",
		frameworks: [
			"systemjs",
			"jasmine"
		],
		reporters: ["mocha"],
		browsers: ["PhantomJS"],
		plugins: [
			"karma-systemjs",
			"karma-phantomjs-launcher",
			"karma-jasmine",
			"karma-mocha-reporter"
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