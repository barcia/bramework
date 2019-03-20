const config = require('./paths.json');
const gulp = require('gulp');
const browsersync = require('browser-sync').create();

const css = require('./css');
const img = require('./images');
const js = require('./javascript');


module.exports = {
	assets: function(done) {
		gulp.watch(config.scss.src, {ignoreInitial: false}, css.dev);
		gulp.watch(config.js.src, {ignoreInitial: false}, js.dev);
		gulp.watch(config.img.src, {ignoreInitial: false}, gulp.series(img, reload));
		done();
	}
}


// Reload BrowserSync
function reload(done) {
	browsersync.reload();
	done();
}
