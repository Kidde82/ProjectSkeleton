var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest) {
	var tsProject = plugins.typescript.createProject('tsconfig.json');

	var result = tsProject.src(src)
		.pipe(plugins.typescript(tsProject))

	return result.js
		.pipe(plugins.ngAnnotate())
		.pipe(gulp.dest(dest));
}

module.exports = function(callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		"test:compile:app",
		"test:compile:common",
		"test:compile:main",
		"test:compile:services",
		"test:compile:startpage",
		callback
	);
};

gulp.task("test:compile:app", () => {
	return compile(config.src.app.spec, config.build.app.path);
});

gulp.task("test:compile:common", () => {
	return compile(config.src.common.spec, config.build.common.path);
});

gulp.task("test:compile:main", () => {
	return compile(config.src.main.spec, config.build.main.path);
});

gulp.task("test:compile:services", () => {
	return compile(config.src.services.spec, config.build.services.path);
});

gulp.task("test:compile:startpage", () => {
	return compile(config.src.startpage.spec, config.build.startpage.path);
});