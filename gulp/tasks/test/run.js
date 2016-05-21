var gulp = require("gulp");

module.exports = function(done) {
	var plugins = this.opts.plugins;
	var config = this.opts.config;

	var Server = plugins.karma.Server;

	return new Server({
		configFile: __dirname + "\\..\\..\\..\\karma.conf.js",
		singleRun: true
	}, done).start();
};