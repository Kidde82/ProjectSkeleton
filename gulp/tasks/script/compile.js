var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest) {
    var result = gulp.src(src)
        .pipe(plugins.typescript(config.tsConfig))

	return result.js
		.pipe(plugins.ngAnnotate())
        .pipe(gulp.dest(dest))
}

module.exports = function() {
    plugins = this.opts.plugins;
    config = this.opts.config;

	return compile(config.src.main.ts, config.build.main.path);
};