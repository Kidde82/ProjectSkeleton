var gulp = require("gulp");

module.exports = function() {
    var plugins = this.opts.plugins;
    var config = this.opts.config;
    
    return gulp.src(config.scssPaths)
        .pipe(
            plugins.sass({
                    outputStyle: 'compressed'
                }).on('error', plugins.sass.logError))
        .pipe(gulp.dest(config.build.path));   
};