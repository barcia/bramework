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
	build: './build/',
	css: {
		entry: './src/scss/style.scss',
		src: './src/scss/**/*.scss',
		dest: './build/assets/'
	},
	js: {
		src: './src/js/**/*.js',
		dest: './build/assets/'
	},
	web: {
		src: './src/web/**/*',
		dest: './build/'
	},
	sass: {
		includePaths: 'node_modules/'
	},
	postcss: [
		autoprefixer(),
		cssnano({
			autoprefixer: false,
			safe: true,
			sourcemap: false
		})
	],
	webpack: {
		entry: {
			app: './src/js/app.js',
		},
		output: {
			filename: '[name].js',
		}
	},
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



// CSS
function css_dev() {
	return gulp.src(config.css.entry, {since: gulp.lastRun(css_dev)})
		.pipe(sourcemaps.init())
		.pipe(sass(config.sass).on('error', notify.onError({
			title: 'Error in Gulp:Sass',
			message: '<%= error.message %>'
		})))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.css.dest))
		.pipe(browsersync.stream());
}

function css_prod() {
	return gulp.src(config.css.entry)
		.pipe(sass(config.sass).on('error', notify.onError({
			title: 'Error in Gulp:Sass',
			message: '<%= error.message %>'
		})))
		.pipe(postcss(config.postcss))
		.pipe(gulp.dest(config.css.dest))
}

function css_lint() {
	return gulp.src(config.css.src)
		.pipe(stylelint(config.stylelint));
}



// JS
function js_dev() {
	return  webpack({
		mode: 'development',
		entry: config.webpack.entry,
		output: config.webpack.output
	})
		.pipe(gulp.dest(config.js.dest))
		.pipe(browsersync.stream());
}

function js_prod() {
	return webpack({
		mode: 'production',
		entry: config.webpack.entry,
		output: config.webpack.output,
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
		.pipe(gulp.dest(config.js.dest))
}

function js_lint() {
	return gulp.src(config.js.src)
		.pipe(eslint(config.eslint))
		.pipe(eslint.format('stylish'))
		.pipe(eslint.failAfterError());
}

function js_test() {

}



// Web
function web() {
	return gulp.src(config.web.src)
		.pipe(gulp.dest(config.web.dest));
}



// Watch
function serve(done) {
	browsersync.init({
		server: {
			baseDir: config.build
		},
		port: 3000,
		open: false,
		notify: false
	});

	gulp.watch(config.css.src, {ignoreInitial: false}, css_dev);
	gulp.watch(config.js.src, {ignoreInitial: false}, js_dev);
	gulp.watch(config.web.src, {ignoreInitial: false}, gulp.series(web, reload));

	done();
}

function serve_proxy(done) {
	browsersync.init({
		proxy: argv.proxy,
		open: false,
		notify: false
	});

	gulp.watch(config.css.src, {ignoreInitial: false}, css_dev);
	gulp.watch(config.js.src, {ignoreInitial: false}, js_dev);
	gulp.watch(config.web.src, {ignoreInitial: false}, gulp.series(web, reload));

	done();
}



function reload(done) {
	browsersync.reload();
	done();
}

function clean() {
	return del([config.build + '*']);
}



exports.start = gulp.series(clean, gulp.parallel(serve));
exports.start_proxy = gulp.series(clean, gulp.parallel(serve_proxy));
exports.build = gulp.series(clean, css_lint, js_lint, gulp.parallel(css_prod, js_prod, web));
exports.build_force = gulp.series(clean, gulp.parallel(css_prod, js_prod, web));
exports.build_dev = gulp.series(clean, gulp.parallel(css_dev, js_dev, web));
exports.test = gulp.series(css_lint, js_lint, js_test);
