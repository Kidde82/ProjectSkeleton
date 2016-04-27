var gulp = require("gulp");

module.exports = function() {
    var plugins = this.opts.plugins;
    var config = this.opts.config;

  return gulp.src(config.src.path + "/app/**/*.html")
    .pipe(plugins.angularHtmlify())
    .pipe(gulp.dest(config.wwwroot.path + "/app"));
};