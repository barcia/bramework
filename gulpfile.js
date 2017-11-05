// Dependencies
var gulp         = require('gulp');
var rename       = require('gulp-rename');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var sassdoc      = require('sassdoc');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');
var browserSync  = require('browser-sync').create();
var svgstore     = require('gulp-svgstore');
var svgmin       = require('gulp-svgmin');

// Paths
var sourcePath = './src/';
var distPath   = './dist/';
var docsPath   = './docs/';

// Tasks
var cssTask         = 'css';
var jsTask          = 'js';
var svgTask         = 'svg';
var docsTask        = 'docs';
var allTask         = 'all';
var browserSyncTask = 'sync';



var onError = function (err) {
  notify({
    title: 'Gulp: Sass error'
  }).write(err);
  console.log(err.toString());
  this.emit('end');
};



// Compile Scss files to CSS, and apply PostCSS plugins
gulp.task(cssTask, function () {
  var postcssPlugins = [
    autoprefixer({
      browsers: ['last 2 version']
    }),
    cssnano({
      autoprefixer: false,
      safe: true,
      sourcemap: false
    })
  ];

  var sassOptions = {};

  return gulp.src(sourcePath+'scss/style.scss')
    .pipe(plumber({ errorHandle: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', onError))
    .pipe(postcss(postcssPlugins))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(distPath));
});



// Concatenate and minify JS files
gulp.task(jsTask, function() {
  return gulp.src(sourcePath+'js/**/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(distPath));
});



// SVG
gulp.task(svgTask, function() {
  return gulp.src(sourcePath+'svg/**/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(rename({
      basename: 'icons',
      suffix: '.min',
      extname: '.svg'
    }))
    .pipe(gulp.dest(distPath));
});



// Docs
gulp.task(docsTask, function () {
  var options = {
    dest: docsPath,
  };
  return gulp.src(sourcePath+'scss/**/*.scss')
    .pipe(sassdoc(options));
});



// Watch
gulp.task('default', function () {
  gulp.watch(sourcePath+'scss/**/*.scss', [cssTask]);
  gulp.watch(sourcePath+'js/**/*.js', [jsTask]);
  gulp.watch(sourcePath+'svg/**/*.svg', [svgTask]);
});



// Browser Sync
gulp.task(browserSyncTask, function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(distPath+'style.min.css').on('change', browserSync.reload);
  gulp.watch(distPath+'script.min.js').on('change', browserSync.reload);
  gulp.watch(distPath+'icons.min.svg').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
});



gulp.task(allTask, [cssTask, jsTask, svgTask]);
