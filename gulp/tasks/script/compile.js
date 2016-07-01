var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest, typings) {
	var tsProject = plugins.typescript.createProject("tsconfig.json");
	var result = gulp.src([src, typings])
		.pipe(plugins.typescript(tsProject));

	return result.js
		.pipe(plugins.ngAnnotate())
		.pipe(gulp.dest(dest));
}

module.exports = function(callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		"script:compile:app",
		"script:compile:common",
		"script:compile:main",
		"script:compile:services",
		"script:compile:startpage",
		callback
	);
};

gulp.task("script:compile:app", () => {
	return compile(config.src.app.ts, config.build.app.path, config.typings.definitions);
});

gulp.task("script:compile:common", () => {
	return compile(config.src.common.ts, config.build.common.path, config.typings.definitions);
});

gulp.task("script:compile:main", () => {
	return compile(config.src.main.ts, config.build.main.path, config.typings.definitions);
});

gulp.task("script:compile:services", () => {
	return compile(config.src.services.ts, config.build.services.path, config.typings.definitions);
});

gulp.task("script:compile:startpage", () => {
	return compile(config.src.startpage.ts, config.build.startpage.path, config.typings.definitions);
});