var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest, temlateName) {
	return gulp.src(src)
		.pipe(plugins.angularHtmlify())
		.pipe(plugins.ngTemplates({ module: temlateName, filename: `${temlateName}.js`}))
		.pipe(gulp.dest(dest));
}

module.exports = function() {
    plugins = this.opts.plugins;
    config = this.opts.config;

	return compile(config.src.main.html, config.wwwroot.main.path, config.wwwroot.main.templateName);
};