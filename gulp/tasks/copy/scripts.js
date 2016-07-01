var gulp = require("gulp");
var plugins = {};
var config = {};

function copy(src, dest) {
	return gulp.src(src)
		.pipe(gulp.dest(dest));
}

module.exports = function (callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		"copy:scripts:app",
		"copy:scripts:common",
		"copy:scripts:main",
		"copy:scripts:services",
		"copy:scripts:startpage",
		callback
	);
};

gulp.task("copy:scripts:app", () => {
	return copy([config.build.app.js, `!${config.build.app.spec}`], config.wwwroot.app.path);
});

gulp.task("copy:scripts:common", () => {
	return copy([config.build.common.js, `!${config.build.common.spec}`], config.wwwroot.common.path);
});

gulp.task("copy:scripts:main", () => {
	return copy([config.build.main.js, `!${config.build.main.spec}`], config.wwwroot.main.path);
});

gulp.task("copy:scripts:services", () => {
	return copy([config.build.services.js, `!${config.build.services.spec}`], config.wwwroot.services.path);
});

gulp.task("copy:scripts:startpage", () => {
	return copy([config.build.startpage.js, `!${config.build.startpage.spec}`], config.wwwroot.startpage.path);
});