const config = require('./paths.json');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const css = require('./css');
const img = require('./images');
const web = require('./web');
const js = require('./javascript');


module.exports = function(done) {

	browserSync.init({
		server: {
			baseDir: config.dist
		},
		files: config.dist,
		port: 8080,
		notify: false,
		open: false
	});

	gulp.watch(config.scss.src, {ignoreInitial: false}, css.dev);
	gulp.watch(config.js.src, {ignoreInitial: false}, js.dev);
	gulp.watch(config.img.src, {ignoreInitial: false}, img);
	gulp.watch(config.web.src, {ignoreInitial: false}, web);

	done();
}
