var gulp = require("gulp");

module.exports = function() {
    var plugins = this.opts.plugins;
    var config = this.opts.config;

    return gulp.src(config.tsPaths)
        .pipe(plugins.tslint())
        .pipe(plugins.tslint.report("verbose"))
};
