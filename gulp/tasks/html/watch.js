module.exports = function(callback) {
	var plugins = this.opts.plugins;

	return plugins.runSequence(
		[
			"html:compile"
		],
		[
			"html:inject"
		],
		callback);
};