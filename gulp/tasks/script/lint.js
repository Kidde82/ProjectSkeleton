var gulp = require("gulp");
var plugins = {};
var config = {};

function lint(src) {
    return gulp.src(src)
        .pipe(plugins.tslint())
        .pipe(plugins.tslint.report("verbose"))
}

module.exports = function(callback) {
    plugins = this.opts.plugins;
    config = this.opts.config;

	plugins.runSequence(
		"script:lint:common",
		"script:lint:main",
		callback
	);
};

gulp.task("script:lint:common", () => {
	return lint(config.src.common.ts);
});

gulp.task("script:lint:main", () => {
	return lint(config.src.main.ts);
});