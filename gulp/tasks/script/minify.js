var gulp = require("gulp");

module.exports = function() {
    var plugins = this.opts.plugins;
    var config = this.opts.config;
    
    return gulp.src(config.build.path + "/**/*.js")
        .pipe(plugins.concat(config.dist.scriptFile))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(config.dist.path));
};