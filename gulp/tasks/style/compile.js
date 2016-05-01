var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest) {
    return gulp.src(src)
		.pipe(
			plugins.sass({
				outputStyle: "compressed"
			}).on("error", plugins.sass.logError))
		.pipe(gulp.dest(dest));
}

module.exports = function() {
	plugins = this.opts.plugins;
	config = this.opts.config;

	return compile(config.src.main.scss, config.build.main.path);
};

