var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest) {
    var result = gulp.src(src)
        .pipe(plugins.typescript(config.tsConfig))

	return result.js
		.pipe(plugins.ngAnnotate())
        .pipe(gulp.dest(dest))
}

module.exports = function(callback) {
    plugins = this.opts.plugins;
    config = this.opts.config;

	plugins.runSequence(
		"script:compile:common",
		"script:compile:main",
		callback
	);
};

gulp.task("script:compile:common", () => {
	return compile(config.src.common.ts, config.build.common.path);
});

gulp.task("script:compile:main", () => {
	return compile(config.src.main.ts, config.build.main.path);
});