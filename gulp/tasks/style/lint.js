var gulp = require("gulp");
var plugins = {};
var config = {};

function lint(src) {
	return gulp.src(src)
		.pipe(
			plugins.scssLint({
				"config": config.lint.style
			})
		);
}

module.exports = function(callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		"style:lint:app",
		"style:lint:main",
		"style:lint:startpage",
		callback
	);
};

gulp.task("style:lint:app", () => {
	return lint(config.src.app.scss);
});

gulp.task("style:lint:main", () => {
	return lint(config.src.main.scss);
});

gulp.task("style:lint:startpage", () => {
	return lint(config.src.startpage.scss);
});