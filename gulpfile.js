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
var tsConfig = require("./tsconfig.json")

require("gulp-task-loader")({
	dir: "gulp\\tasks",
	plugins: plugins,
	config: config,
	tsConfig: tsConfig
});

gulp.task("default", () => {
	gulp.watch("./src/**/*.ts", ["script:compile"]);
});

gulp.task("serve", ["dev:watch"], () => {
	gulp.start("dev:server");
});