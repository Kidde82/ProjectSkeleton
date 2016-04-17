var gulp = require("gulp");

module.exports = function() {
    var plugins = this.opts.plugins;
    var config = this.opts.config;
    
    return gulp.src(config.tsPaths)
        .pipe(plugins.typescript(config.tsConfig))
        .pipe(gulp.dest(config.build.path))
};