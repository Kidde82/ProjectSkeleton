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
		"script:lint:app",
		"script:lint:common",
		"script:lint:main",
		"script:lint:services",
		"script:lint:startpage",
		callback
	);
};

gulp.task("script:lint:app", () => {
	return lint(config.src.app.ts);
});

gulp.task("script:lint:common", () => {
	return lint(config.src.common.ts);
});

gulp.task("script:lint:main", () => {
	return lint(config.src.main.ts);
});

gulp.task("script:lint:services", () => {
	return lint(config.src.services.ts);
});

gulp.task("script:lint:startpage", () => {
	return lint(config.src.startpage.ts);
});