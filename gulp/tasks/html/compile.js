var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest, temlateName) {
	return gulp.src(src)
		.pipe(plugins.angularHtmlify())
		.pipe(plugins.ngTemplates({ module: temlateName, filename: `${temlateName}.js`}))
		.pipe(gulp.dest(dest));
}

module.exports = function(callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		"html:compile:common",
		"html:compile:main",
		callback
	);
};

gulp.task("html:compile:common", () => {
	return compile(config.src.common.html, config.wwwroot.common.path, config.wwwroot.common.templateName);
});

gulp.task("html:compile:main", () => {
	return compile(config.src.main.html, config.wwwroot.main.path, config.wwwroot.main.templateName);
});