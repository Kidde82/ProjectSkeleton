var gulp = require("gulp");
var plugins = {};
var config = {};

function copy(src, dest) {
	return gulp.src(src)
		.pipe(gulp.dest(dest));
}

module.exports = function() {
    plugins = this.opts.plugins;
    config = this.opts.config;

	copy(config.build.main.css, config.wwwroot.main.path);
};