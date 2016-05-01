module.exports = function(callback) {
	var plugins = this.opts.plugins;

	return plugins.runSequence(
		[
			"style:lint"
		],
		[
			"style:compile"
		],
		[
			"copy:styles"
		],
		callback);
};