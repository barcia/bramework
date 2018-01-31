// Dependencies
var gulp         = require('gulp');
var rename       = require('gulp-rename');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var sourcemaps   = require('gulp-sourcemaps');
var browserSync  = require('browser-sync').create();
var pug          = require('gulp-pug');
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify-es').default;
var svgstore     = require('gulp-svgstore');
var svgmin       = require('gulp-svgmin');
var sassdoc      = require('sassdoc')


// Global paths
const path = {
	source: 'src/',
	build: 'build/',
	dist: 'dist/',
	docs: 'docs/'
};


// Config
const config = {

	// Sourcemap
	sourcemap: {
		build: '../../' + path.build + 'sourcemap'
	},

	// Browser Sync
	browsersync: {
		server: path.dist,
		// startPath: "index.html",
		browser: 'google chrome'
	},

	// HTML
	html: {
		task: 'html',
		source: [
			path.source + 'pug/**/*.pug',
			'!' + path.source + 'pug/docs/**/*.pug',
			'!' + path.source + 'pug/parts/**/*.pug'
		],
		sourceAll: path.source + 'pug/**/*.pug',
		dist: path.dist,
		plugin: {
			pug: {
				pretty: true
			}
		},
		docs: {
			task: 'htmldocs',
			source: [
				path.source + 'pug/docs/**/*.pug',
				'!' + path.source + 'pug/docs/parts/**/*.pug',
			],
			dist: path.docs
		}
	},

	// CSS
	css: {
		task: 'css',
		source: path.source + 'scss/**/*.scss',
		dist: path.dist + 'assets/',
		plugin: {
			rename: {
				suffix: '.min'
			},
			sass: {

			},
			postcss: [
				autoprefixer({
					browsers: ['last 2 version']
				}),
				cssnano({
					autoprefixer: false,
					safe: true,
					sourcemap: false
				})
			]
		},
		docs: {
			task: 'cssdocs',
			source: path.source + 'scss/**/*.scss',
			plugin: {
				sassdoc: {
					dest: path.docs + 'reference/'
				}
			}
		}
	},

	// JS
	js: {
		task: 'js',
		source: path.source + 'js/**/*.js',
		dist: path.dist + 'assets/',
		plugin: {
			concat: {
				path: 'script.js'
			},
			uglify: {

			},
			rename: {
				suffix: '.min'
			}
		}
	},

  // SVG
	svg: {
		task: 'svg',
		source: path.source + 'svg/**/*.svg',
		dist: path.dist + 'assets/',
		plugin: {
			svgmin: {},
			svgstore: {},
			rename: {
				basename: 'icons',
				suffix: '.min',
				extname: '.svg'
			}
		}
	},
};



// HTML
gulp.task(config.html.task, function () {
	return gulp.src(config.html.source)
	.pipe(plumber({errorHandler: reportError}))
		.pipe(pug(config.html.plugin.pug))
	.pipe(plumber.stop())
	.pipe(gulp.dest(config.html.dist))
	.pipe(browserSync.stream());
});

// HTML Docs
gulp.task(config.html.docs.task, function () {
	return gulp.src(config.html.docs.source)
	.pipe(plumber({errorHandler: reportError}))
		.pipe(pug(config.html.plugin.pug))
	.pipe(plumber.stop())
	.pipe(gulp.dest(config.html.docs.dist))
	.pipe(browserSync.stream());
});



// CSS
gulp.task(config.css.task, function () {
	return gulp.src(config.css.source)
	.pipe(plumber({errorHandler: reportError}))
		.pipe(sourcemaps.init())
			.pipe(sass(config.css.plugin.sass))
			.pipe(postcss(config.css.plugin.postcss))
			.pipe(rename(config.css.plugin.rename))
		.pipe(sourcemaps.write(config.sourcemap.build))
	.pipe(plumber.stop())
	.pipe(gulp.dest(config.css.dist))
	.pipe(browserSync.stream());
});


// CSS Docs
gulp.task(config.css.docs.task, function () {
  return gulp.src(config.css.docs.source)
    .pipe(sassdoc(config.css.docs.plugin.sassdoc));
});



// JS
gulp.task(config.js.task, function() {
	return gulp.src(config.js.source)
	.pipe(plumber({errorHandler: reportError}))
		.pipe(sourcemaps.init())
			.pipe(concat(config.js.plugin.concat))
			.pipe(uglify(config.js.plugin.uglify))
			.pipe(rename(config.js.plugin.rename))
		.pipe(sourcemaps.write(config.sourcemap.build))
	.pipe(plumber.stop())
	.pipe(gulp.dest(config.js.dist))
	.pipe(browserSync.stream());
});



// SVG
gulp.task(config.svg.task, function() {
	return gulp.src(config.svg.source)
	.pipe(plumber({errorHandler: reportError}))
		.pipe(svgmin(config.svg.plugin.svgmin))
		.pipe(svgstore(config.svg.plugin.svgstore))
		.pipe(rename(config.svg.plugin.rename))
	.pipe(plumber.stop())
	.pipe(gulp.dest(config.svg.dist))
	.pipe(browserSync.stream());
});



// ERROR
var reportError = function (error) {
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



// DEFAULT
gulp.task('default', [config.html.task, config.css.task, config.js.task, config.svg.task], function () {

	// Browser sync
	browserSync.init(config.browsersync);

	// Watch
	gulp.watch(config.html.sourceAll, [config.html.task]);
	gulp.watch(config.css.source, [config.css.task]);
	gulp.watch(config.js.source, [config.js.task]);
	gulp.watch(config.svg.source, [config.svg.task]);

	gulp.watch(config.html.docs.source, [config.html.docs.task]);
	gulp.watch(config.css.docs.source, [config.css.docs.task]);
});


// All tasks
gulp.task('all', [config.html.task, config.css.task, config.js.task, config.svg.task, 'docs']);
gulp.task('docs', [config.html.docs.task, config.css.docs.task]);
