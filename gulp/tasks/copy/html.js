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
		"copy:html:app",
		"copy:html:common",
		"copy:html:main",
		"copy:html:startpage",
		callback
	);
};

gulp.task("copy:html:app", () => {
	return copy(config.src.app.html, config.wwwroot.app.path);
});

gulp.task("copy:html:common", () => {
	return copy(config.src.common.html, config.wwwroot.common.path);
});

gulp.task("copy:html:main", () => {
	return copy(config.src.main.html, config.wwwroot.main.path);
});

gulp.task("copy:html:startpage", () => {
	return copy(config.src.startpage.html, config.wwwroot.startpage.path);
});