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
		"copy:styles:common",
		"copy:styles:main",
		callback
	);
};

gulp.task("copy:styles:common", () => {
	return copy(config.build.common.css, config.wwwroot.common.path);
});

gulp.task("copy:styles:main", () => {
	return copy(config.build.main.css, config.wwwroot.main.path);
});