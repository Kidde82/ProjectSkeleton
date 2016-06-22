var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest) {
	var tsProject = plugins.typescript.createProject("tsconfig.json");
	var result = gulp.src([src, "./typings/**/*.d.ts"])
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
		"script:compile:main",
		"script:compile:services",
		"script:compile:startpage",
		callback
	);
};

gulp.task("script:compile:app", () => {
	return compile(config.src.app.ts, config.build.app.path);
});

gulp.task("script:compile:main", () => {
	return compile(config.src.main.ts, config.build.main.path);
});

gulp.task("script:compile:services", () => {
	return compile(config.src.services.ts, config.build.services.path);
});

gulp.task("script:compile:startpage", () => {
	return compile(config.src.startpage.ts, config.build.startpage.path);
});