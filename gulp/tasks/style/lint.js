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
		"style:lint:common",
		"style:lint:main",
		callback
	);
};

gulp.task("style:lint:common", () => {
	return lint(config.src.common.scss);
});

gulp.task("style:lint:main", () => {
	return lint(config.src.main.scss);
});