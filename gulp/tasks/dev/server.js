var gulp = require("gulp");

module.exports = function() {
	var plugins = this.opts.plugins;
	var config = this.opts.config;

	gulp.src(config.wwwroot.path)
	.pipe(plugins.webserver({
		fallback: "index.html",
		livereload: true,
		open: true,
		port: 8585
	}));
};