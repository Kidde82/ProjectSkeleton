module.exports = function(callback) {
	var plugins = this.opts.plugins;
	var config = this.opts.config;

	plugins.runSequence(
		[
			"clean"
		],
		[
			"script:lint",
			"style:lint"
		],
		[
			"script:compile",
			"style:compile"
		],
		[
			"copy:all",
			"copy:images",
			"copy:html"
		],
		// [
		// 	"html:compile"
		// ],
		[
			"html:inject"
		],
		// [
		// 	"test:compile"
		// ],
		// [
		// 	"test:run"
		// ],
		callback);
};