var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest) {
	return gulp.src(src)
		.pipe(
			plugins.sass({
				outputStyle: "compressed"
			}).on("error", plugins.sass.logError))
		.pipe(gulp.dest(dest));
}

module.exports = function(callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		"style:compile:app",
		"style:compile:common",
		"style:compile:main",
		"style:compile:startpage",
		callback
	);
};

gulp.task("style:compile:app", () => {
	return compile(config.src.app.scss, config.build.app.path);
});

gulp.task("style:compile:common", () => {
	return compile(config.src.common.scss, config.build.common.path);
});

gulp.task("style:compile:main", () => {
	return compile(config.src.main.scss, config.build.main.path);
});

gulp.task("style:compile:startpage", () => {
	return compile(config.src.startpage.scss, config.build.startpage.path);
});