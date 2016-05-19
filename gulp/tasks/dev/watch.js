var gulp = require("gulp");

module.exports = function() {
	var plugins = this.opts.plugins;
	var config = this.opts.config;

	gulp.watch(config.src.common.html, ["html:watch"]);
	gulp.watch([config.src.common.ts, `!${config.src.common.spec}`], ["script:watch"]);
	gulp.watch(config.src.common.scss, ["style:watch"]);

	gulp.watch(config.src.main.html, ["html:watch"]);
	gulp.watch([config.src.main.ts, `!${config.src.main.spec}`], ["script:watch"]);
	gulp.watch(config.src.main.scss, ["style:watch"]);
};