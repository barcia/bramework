'use strict';

const gulp = require('gulp');
const del = require('del');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const stylelint = require('gulp-stylelint');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');
const argv = require('yargs').argv;

const config = {
	dist: './dist/',
	assets: './dist/assets/',
	scss: {
		entry: [
			'./src/scss/style.scss',
			// './src/scss/print.scss',
		],
		src: './src/scss/**/*.scss',
		options: {
			includePaths: 'node_modules/'
		}
	},
	js: {
		entry: {
			app: './src/js/index.js',
		},
		output: {
			filename: '[name].js',
		},
		src: './src/js/**/*.js',
	},
	img: {
		src: './src/img/**/*',
	},
	web: {
		src: './src/web/**/*',
	},
	postcss: [
		autoprefixer(),
		cssnano({
			autoprefixer: false,
			safe: true,
			sourcemap: false
		})
	],
	stylelint: {
		configFile: '.stylelintrc',
		reporters: [
			{
				formatter: 'string',
				console: true
			}
		]
	},
	eslint: {
		configFile: '.eslintrc'
	}
}



// Check arguments
if (argv.proxy && !argv.serve) {
	console.log("🚨 If you pass a proxy, you must pass also the --serve option");
	return false;
}



// CSS
function css_dev() {
	return gulp.src(config.scss.entry)
		.pipe(sourcemaps.init())
		.pipe(sass(config.scss.options).on('error', notify.onError({
			title: 'Error in Gulp:Sass',
			message: '<%= error.message %>'
		})))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.assets))
		.pipe(browsersync.stream());
}

function css_prod() {
	return gulp.src(config.scss.entry)
		.pipe(sass(config.scss.options).on('error', notify.onError({
			title: 'Error in Gulp:Sass',
			message: '<%= error.message %>'
		})))
		.pipe(postcss(config.postcss))
		.pipe(gulp.dest(config.assets))
}

function css_lint(done) {
	if (! argv.force) {
		return gulp.src(config.scss.src)
			.pipe(stylelint(config.stylelint));
	}
	done();
}



// JS
function js_dev() {
	return  webpack({
		mode: 'development',
		entry: config.js.entry,
		output: config.js.output
	})
		.pipe(gulp.dest(config.assets))
		.pipe(browsersync.stream());
}

function js_prod() {
	return webpack({
		mode: 'production',
		entry: config.js.entry,
		output: config.js.output,
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
			],
		},
	})
		.pipe(gulp.dest(config.assets))
}

function js_lint(done) {
	if (! argv.force) {
		return gulp.src(config.js.src)
			.pipe(eslint(config.eslint))
			.pipe(eslint.format('stylish'))
			.pipe(eslint.failAfterError());
	}
	done();
}



// Img
function img() {
	return gulp.src(config.img.src)
		.pipe(gulp.dest(config.assets));
}



// Web
function web(done) {
	if (argv.serve || argv.web) {
		return gulp.src(config.web.src)
			.pipe(gulp.dest(config.dist));
	}
	done();
}



// Watch
function watch(done) {
	gulp.watch(config.scss.src, {ignoreInitial: false}, css_dev);
	gulp.watch(config.js.src, {ignoreInitial: false}, js_dev);
	gulp.watch(config.img.src, {ignoreInitial: false}, gulp.series(img, reload));

	if (argv.serve || argv.web) {
		gulp.watch(config.web.src, {ignoreInitial: false}, gulp.series(web, reload));
	}

	if (argv.serve) {
		if (argv.proxy) {
			browsersync.init({
				proxy: argv.proxy,
				open: false,
				notify: false
			});
		} else {
			browsersync.init({
				server: {
					baseDir: config.dist
				},
				port: 3000,
				open: false,
				notify: false
			});
		}
	}

	done();
}



// Clean
function clean() {
	if (argv.web || argv.serve) {
		return del([config.dist + '*']);
	} else {
		return del([config.assets + '*']);
	}
}



// Reload BrowserSync
function reload(done) {
	browsersync.reload();
	done();
}



// Exports
exports.watch = gulp.series(clean, gulp.parallel(watch));
exports.build = gulp.series(clean, css_lint, js_lint, gulp.parallel(css_prod, js_prod, img, web));
exports.test = gulp.series(css_lint, js_lint);
