var gulp = require("gulp");

module.exports = function() {
    var plugins = this.opts.plugins;
    var config = this.opts.config;

	return gulp.src(config.scssPaths)
    	.pipe(
			plugins.scssLint({
				"config": "stylelint.yml"
			})
		);
};