module.exports = {
	scssPaths: [
		"./src/**/*.scss"
	],
	tsPaths: [
		"./src/**/*.ts",
		"!./src/**/*.spec.ts"
	],
	artifactPath: "./_artifact",
	src: {
		path: "./src"
	},
	build: {
		path: "./build",
		artifacts: [
			"./build/**/*.css",
			"./build/**/*.js",
			"!./build/**/*.spec.js"
		]
	},
	dist: {
		path: "./dist",
		scriptFile: "script.min.js",
		styleFile: "style.min.css"
	},
	wwwroot: {
		path: "./wwwroot"
	},
	cleanPaths: [
		"./build",
		"./dist",
		"./wwwroot/index.html",
		"./wwwroot/app"
	],
	tsConfig: {
		module: "commonjs",
		target: "es5",
		noImplicitAny: false,
		removeComments: true,
		declaration: true,
		sourceMap: false
	}
};