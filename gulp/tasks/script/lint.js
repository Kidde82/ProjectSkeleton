var gulp = require("gulp");
var plugins = {};
var config = {};

function lint(src) {
    return gulp.src(src)
        .pipe(plugins.tslint())
        .pipe(plugins.tslint.report("verbose"))
}

module.exports = function() {
    plugins = this.opts.plugins;
    config = this.opts.config;

	return lint(config.src.main.ts);
};
