module.exports = function(callback) {
	var plugins = this.opts.plugins;

	return plugins.runSequence(
		[
			"script:lint"
		],
		[
			"script:compile"
		],
		[
			"copy:scripts"
		],
		callback);
};