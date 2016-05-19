var gulp = require("gulp");
var plugins = require("gulp-load-plugins")({
	pattern: [
		"gulp-*",
		"gulp.*",
		"del",
		"run-sequence",
		"karma",
		"karma-*"
	]
});
var config = require("./gulp/config");

require("gulp-task-loader")({
	dir: "gulp\\tasks",
	plugins: plugins,
	config: config
});

gulp.task("default", () => {
	console.log("yep started");
	gulp.watch("./src/**/*.ts", ["script:compile"]);
});