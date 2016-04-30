var gulp = require("gulp");

module.exports = function() {
    var plugins = this.opts.plugins;
    var config = this.opts.config;

    var result = gulp.src(config.tsPaths)
        .pipe(plugins.typescript(config.tsConfig))

	return result.js
		.pipe(plugins.ngAnnotate())
        .pipe(gulp.dest(config.build.path))
};