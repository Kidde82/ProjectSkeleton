var gulp = require("gulp");

module.exports = function() {
	var plugins = this.opts.plugins;
	var config = this.opts.config;

	return plugins.del(config.cleanPaths);
};