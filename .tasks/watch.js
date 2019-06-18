const path = require('./paths.json');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const css = require('./css');
const img = require('./img');
const web = require('./web');
const js = require('./js');



module.exports = function(done) {
	browserSync.init({
		server: {
			baseDir: path.dist
		},
		files: path.dist,
		port: 8080,
		notify: false,
		open: false
	});

	gulp.watch(path.scss.src, {ignoreInitial: false}, css.dev);
	gulp.watch(path.js.src, {ignoreInitial: false}, js.dev);
	gulp.watch(path.img.src, {ignoreInitial: false}, img);
	gulp.watch(path.web.src, {ignoreInitial: false}, web);

	done();
}
