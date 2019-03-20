const config = require('./paths.json');
const gulp = require('gulp');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browsersync = require('browser-sync');

sass.compiler = require('node-sass');


config.scss = {
		entry: [
			'./src/scss/style.scss',
			// './src/scss/print.scss',
		],
		src: './src/scss/**/*.scss',
		options: {
			includePaths: 'node_modules/'
		}
}

config.postcss = [
	autoprefixer(),
	cssnano({
		autoprefixer: false,
		safe: true,
		sourcemap: false
	})
]


module.exports = {
	dev: function() {
		return gulp.src(config.scss.entry)
		.pipe(sourcemaps.init())
		.pipe(sass(config.scss.options).on('error', notify.onError({
			title: 'Error in Gulp:Sass',
			message: '<%= error.message %>'
		})))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.assets))
		.pipe(browsersync.stream());
	},
	prod: function() {
		return gulp.src(config.scss.entry)
		.pipe(sass(config.scss.options).on('error', notify.onError({
			title: 'Error in Gulp:Sass',
			message: '<%= error.message %>'
		})))
		.pipe(postcss(config.postcss))
		.pipe(gulp.dest(config.assets))
	}
}
