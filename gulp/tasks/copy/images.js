var gulp = require("gulp");

module.exports = function () {
	var plugins = this.opts.plugins;
	var config = this.opts.config;

	return gulp.src(`${config.src.path}/${config.src.assets.images}/*.{jpg,png}`)
		.pipe(gulp.dest(`${config.wwwroot.path}/${config.src.assets.images}`));
};