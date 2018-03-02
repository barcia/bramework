// Plugins
const gulp         = require('gulp');
const del          = require('del');
const path         = require('path');
const browserSync  = require('browser-sync').create();
const rename       = require('gulp-rename');
const run          = require('gulp-run');
const plumber      = require('gulp-plumber');
const notify       = require('gulp-notify');
const sourcemaps   = require('gulp-sourcemaps');
const sass         = require('gulp-sass');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify-es').default;
const sassdoc      = require('sassdoc');


// Import the config file
const config       = require('./config.json');


// Sourcefiles
const sourcefiles = {
	html: [config.path.srcHtml + '**/*.html',
				 config.path.srcHtml + '_config.yml'],
	php: config.path.srcPhp + '**/*.php',
	css: config.path.srcScss + '**/*.scss',
	js: config.path.srcJs + '**/*.js',
	stuff: config.path.srcStuff + '**/*',
}


// Build HTMl with Jekyll. You need to have Jekyll installed
const buildHTML = 'jekyll build --source src/html --destination dist/';



// FUNCTIONS


/**
 * Execute all build functions.
 */
const build = function() {
	switch (config.language) {
	  case 'html':
	    htmlTask();
	    break;
	  case 'php':
			phpTask();
			break;
	  default:
	    break;
	}
	cssTask();
	jsTask();
	stuffTask();
	console.log("Builded All");
};



/**
 * Remove build/ and dist/ folders
 */
const deleteBuild = function() {
	del([config.path.dist, config.path.build]);
	console.log("Removed build/ and dist/ folders");
};



/**
 * Error function
 */
const reportError = function (error) {
	notify({
		title: 'Gulp error',
		subtitle: error.plugin,
		message: error.message,
		sound: 'Basso',
		timeout: 3
	}).write(error);
	console.error(error.toString());
	this.emit('end');
};



/**
 * Init browserSync
 */
const initBrowserSync = function() {
	if (config.browserSync.proxy) {

		browserSync.init({
			browser: config.browserSync.browser,
			proxy: config.browserSync.proxyURL
		});

	} else {

		browserSync.init({
			browser: config.browserSync.browser,
			server: config.browserSync.server
		});

	}
};



/**
 * Watch
 */
const watch = function() {
	gulp.watch(sourcefiles.html, [config.task.html, browserSync.reload]);
	gulp.watch(sourcefiles.css, [config.task.css]);
	gulp.watch(sourcefiles.js, [config.task.js]);

	/**
	 * Watch for PHP and delete PHP files in dist directory if it was removed in src
	 * With any change also reload browserSync
	 */
	gulp.watch(sourcefiles.php, [config.task.php, browserSync.reload]).on('change', function(ev) {
		if(ev.type === 'deleted') {
				del(path.relative('./', ev.path).replace(config.path.srcPhp, config.path.dist));
		}
	});

	/**
	 * Watch for all files in src/stuff/, and delete this files in dist directory if it was removed in src
	 * With any change also reload browserSync
	 */
	gulp.watch(sourcefiles.stuff, [config.task.stuff, browserSync.reload]).on('change', function(ev) {
		if(ev.type === 'deleted') {
				del(path.relative('./', ev.path).replace(config.path.srcStuff, config.path.dist));
		}
	});
};



/**
 * HTML. Execute the jekyll buil command. You need to have Jekyll installed
 */
const htmlTask = function() {
	return run(buildHTML).exec();
};



/**
 * PHP. The same of 'stuff'. This ONLY COPY all PHP files, not sync. For also
 * remove the deleted files use the watch task (default gulp task)
 */
const phpTask = function() {
	return gulp.src(sourcefiles.php)
	.pipe(gulp.dest(config.path.dist));
};



/**
 * CSS
 */
const cssTask = function() {
	return gulp.src(sourcefiles.css)
	.pipe(plumber({errorHandler: reportError}))
	.pipe(sourcemaps.init())
	.pipe(sass({}))
	.pipe(postcss([
		autoprefixer({
			browsers: [config.postCss.autoprefixer.browsers]
		}),
		cssnano({
			autoprefixer: config.postCss.cssnano.autoprefixer,
			safe: config.postCss.cssnano.safe,
			sourcemap: config.postCss.cssnano.sourcemap
		})
	]))
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(sourcemaps.write(config.path.sourcemap))
	.pipe(gulp.dest(config.path.distAssets))
	.pipe(browserSync.stream());
};



/**
 * JS
 */
const jsTask = function() {
	return gulp.src(sourcefiles.js)
	.pipe(plumber({errorHandler: reportError}))
	.pipe(sourcemaps.init())
	.pipe(concat({
		path: 'script.js'
	}))
	.pipe(uglify({}))
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(sourcemaps.write(config.path.sourcemap))
	.pipe(gulp.dest(config.path.distAssets))
	.pipe(browserSync.stream());
};



/**
 * Stuff. This ONLY COPY all files, not sync. For also
 * remove the deleted files use the watch task (default gulp task)
 */
const stuffTask = function() {
	return gulp.src(sourcefiles.stuff)
	.pipe(gulp.dest(config.path.dist));
};



const buildDocs = function() {
	cssDocs();
	console.log("Builded documentation");
};



const cssDocs = function() {
	return gulp.src(sourcefiles.css)
    .pipe(sassdoc({
			dest: config.path.docsScss
		}));
};





/**
 * TASKS
 */

// Default - Build all, start BrowserSync and Watch
gulp.task('default', function () {
	initBrowserSync();
	watch();
});

gulp.task(config.task.all, function() { build() });
gulp.task(config.task.stuff, function() { stuffTask() });
gulp.task(config.task.html, function() { htmlTask() });
gulp.task(config.task.php, function() { phpTask() });
gulp.task(config.task.css, function() { cssTask() });
gulp.task(config.task.js, function() { jsTask() });

// DOCS
gulp.task(config.task.docs.all, function() { buildDocs() });
gulp.task(config.task.docs.css, function() { cssDocs() });
