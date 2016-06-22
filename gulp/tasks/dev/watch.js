var gulp = require("gulp");

module.exports = function() {
	var plugins = this.opts.plugins;
	var config = this.opts.config;

	gulp.watch(config.src.app.html, ["html:watch"]);
	gulp.watch([config.src.app.ts, `!${config.src.app.spec}`], ["script:watch"]);
	gulp.watch(config.src.app.scss, ["style:watch"]);

	gulp.watch(config.src.main.html, ["html:watch"]);
	gulp.watch([config.src.main.ts, `!${config.src.main.spec}`], ["script:watch"]);
	gulp.watch(config.src.main.scss, ["style:watch"]);

	gulp.watch([config.src.services.ts, `!${config.src.services.spec}`], ["script:watch"]);

	gulp.watch(config.src.startpage.html, ["html:watch"]);
	gulp.watch([config.src.startpage.ts, `!${config.src.startpage.spec}`], ["script:watch"]);
	gulp.watch(config.src.startpage.scss, ["style:watch"]);
};