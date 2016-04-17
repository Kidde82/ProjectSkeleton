var gulp = require("gulp");

module.exports = function() {
    var plugins = this.opts.plugins;
    var config = this.opts.config;
    console.log(plugins);
    return plugins.del(config.build.path);
};