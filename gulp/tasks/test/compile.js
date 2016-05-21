var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest) {
	var result = gulp.src(src)
		.pipe(plugins.typescript(config.tsConfig))

	return result.js
		.pipe(plugins.ngAnnotate())
		.pipe(gulp.dest(dest));
}

module.exports = function(callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		"test:compile:common",
		"test:compile:main",
		callback
	);
};

gulp.task("test:compile:common", () => {
	return compile(config.src.common.spec, config.build.common.path);
});

gulp.task("test:compile:main", () => {
	return compile(config.src.main.spec, config.build.main.path);
});