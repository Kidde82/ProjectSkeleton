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
		"copy:styles:app",
		"copy:styles:main",
		"copy:styles:startpage",
		callback
	);
};

gulp.task("copy:styles:app", () => {
	return copy(config.build.app.css, config.wwwroot.app.path);
});

gulp.task("copy:styles:main", () => {
	return copy(config.build.main.css, config.wwwroot.main.path);
});

gulp.task("copy:styles:startpage", () => {
	return copy(config.build.startpage.css, config.wwwroot.startpage.path);
});