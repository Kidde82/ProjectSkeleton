var gulp = require("gulp");

module.exports = function() {
var plugins = this.opts.plugins;
var config = this.opts.config;

return gulp.src(`${config.src.path}/index.html`)
	.pipe(plugins.inject(
		gulp.src(`${config.wwwroot.apps.path}/**/*.css`), {
			transform: function (filepath) {
				var modifiedPath = "";
				if (filepath.indexOf(`${config.wwwroot.path}/`) > -1) {
				modifiedPath = filepath.replace(`${config.wwwroot.path}/`, "");
				return `<link rel="stylesheet" href="${modifiedPath}">`;
				}
				// Use the default transform as fallback:
				return plugins.inject.transform.apply(plugins.inject.transform, arguments);
			}
		}
	))
	.pipe(gulp.dest(config.wwwroot.path));
};