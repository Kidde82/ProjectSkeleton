var gulp = require("gulp");

module.exports = function() {
    var plugins = this.opts.plugins;
    var config = this.opts.config;

    return gulp.src(config.build.path + "/**/*.css")
        .pipe(plugins.concat(config.dist.styleFile))
        .pipe(plugins.minifyCss({compability: 'ie8'}))
        .pipe(gulp.dest(config.dist.path));
};