// Plugins
const gulp         = require('gulp');
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
const sassdoc      = require('sassdoc')


// Paths
const path = {
	source: 'src/',
	build: 'build/',
	dist: 'dist/',
	docs: 'docs/'
};


// Tasks
const task = {
	build: 'build',
	docs: 'docs',
	html: 'html',
	css: 'css',
	docsCss: 'css-docs',
	js: 'js',
	php: 'php',
	files: 'files',
	docsWatch: 'docs-watch'
};


// Config
const config = {

	// Browser Sync
	browsersync: {
		server: 'dist/',
		browser: 'google chrome'
	},


	// Sourcemaps
	sourcemap: {
		build: '.',
	},


	// HTML
	html: {
		source: [path.source + 'html/**/*.html',
						 path.source + 'html/_config.yml'],
		dist: path.dist,
		buildHTML: 'jekyll build --source src/html --destination dist/'
	},


	// CSS
	css: {
		source: path.source + 'scss/**/*.scss',
		dist: path.dist + 'assets/',
		plugin: {
			rename: {
				suffix: '.min'
			},
			sass: {},
			postcss: [
				autoprefixer({
					browsers: ['> 5%']
				}),
				cssnano({
					autoprefixer: false,
					safe: true,
					sourcemap: false
				})
			]
		}
	},

	// JS
	js: {
		source: path.source + 'js/**/*.js',
		dist: path.dist + 'assets/',
		plugin: {
			concat: {
				path: 'script.js'
			},
			uglify: {},
			rename: {
				suffix: '.min'
			}
		}
	},

	// Files
	files: {
		source: path.source + 'files/**/*',
		dist: path.dist
	},

	// PHP
	php: {
		source: path.source + 'php/**/*.php',
		dist: path.dist
	},


	// Docs
	docs: {
		css: {
			source: path.source + 'scss/**/*.scss',
			plugin: {
				sassdoc: {
					dest: path.docs + 'reference/'
				}
			}
		}
	}
};



// Execute all tasks (not build docs)
const allTasks = [task.html, task.css, task.js, task.files, task.php];
gulp.task(task.build, allTasks);

// Build all docs
const docsTasks = [task.docsCss];
gulp.task(task.docs, docsTasks);



// Watch and Browser Sync - DEFAULT
gulp.task('default', allTasks, function () {

	// Browser sync
	browserSync.init(config.browsersync);

	// Watch
	gulp.watch(config.html.source, [task.html, browserSync.reload]);
	gulp.watch(config.css.source, [task.css]);
	gulp.watch(config.js.source, [task.js]);
	gulp.watch(config.files.source, [task.files, browserSync.reload]);
	gulp.watch(config.php.source, [task.php]);
});

// Watch docs
gulp.task(task.docsWatch, docsTasks, function () {
	gulp.watch(config.docs.css.source, [task.docsCss]);
});



// Error
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



// HTML
gulp.task(task.html, function() {
	return run(config.html.buildHTML).exec()
});



// CSS
gulp.task(task.css, function () {
	return gulp.src(config.css.source)
	.pipe(plumber({errorHandler: reportError}))
	.pipe(sourcemaps.init())
	.pipe(sass(config.css.plugin.sass))
	.pipe(postcss(config.css.plugin.postcss))
	.pipe(rename(config.css.plugin.rename))
	.pipe(sourcemaps.write(config.sourcemap.build))
	.pipe(gulp.dest(config.css.dist))
	.pipe(browserSync.stream());
});

// CSS Docs
gulp.task(task.docsCss, [task.css], function () {
  return gulp.src(config.docs.css.source)
    .pipe(sassdoc(config.docs.css.plugin.sassdoc));
});



// JS
gulp.task(task.js, function() {
	return gulp.src(config.js.source)
	.pipe(plumber({errorHandler: reportError}))
	.pipe(sourcemaps.init())
	.pipe(concat(config.js.plugin.concat))
	.pipe(uglify(config.js.plugin.uglify))
	.pipe(rename(config.js.plugin.rename))
	.pipe(sourcemaps.write(config.sourcemap.build))
	.pipe(gulp.dest(config.js.dist))
	.pipe(browserSync.stream());
});



// Files (Only copy all the files in dist/)
gulp.task(task.files, function () {
	return gulp.src(config.files.source)
	.pipe(gulp.dest(config.files.dist))
});



// PHP (The same of 'files'. Only copy all PHP files.)
gulp.task(task.php, function () {
	return gulp.src(config.php.source)
	.pipe(gulp.dest(config.php.dist))
});
