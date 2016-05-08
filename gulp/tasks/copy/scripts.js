var gulp = require("gulp");
var plugins = {};
var config = {};

function copy(src, dest) {
	return gulp.src(src)
		.pipe(gulp.dest(dest));
}

module.exports = function(callback) {
    plugins = this.opts.plugins;
    config = this.opts.config;

	plugins.runSequence(
		"copy:scripts:common",
		"copy:scripts:main",
		callback
	);
};

gulp.task("copy:scripts:common", () => {
	return copy([config.build.common.js, `!${config.build.common.spec}`], config.wwwroot.common.path);
});

gulp.task("copy:scripts:main", () => {
	return copy([config.build.main.js, `!${config.build.main.spec}`], config.wwwroot.main.path);
});