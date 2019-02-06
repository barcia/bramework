'use strict';

const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const notify = require("gulp-notify");
const browsersync = require("browser-sync").create();
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const stylelint = require('gulp-stylelint');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');

const config = {
	css: {
		entry: "./src/scss/style.scss",
		src: "./src/scss/**/*.scss",
		dest: "./build/assets/"
	},
	js: {
		src: "./src/js/**/*.js",
		out: "script.js",
		dest: "./build/assets/"
	},
	web: {
		src: "./src/web/**/*",
		dest: "./build/"
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
	],
	sass: {
		includePaths: 'node_modules/'
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
		title: "Error in Gulp:Sass",
		message: "<%= error.message %>"
	})))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(config.css.dest))
	.pipe(browsersync.stream());
};

function css_prod() {
	return gulp.src(config.css.entry)
	.pipe(sass(config.sass).on('error', notify.onError({
		title: "Error in Gulp:Sass",
		message: "<%= error.message %>"
	})))
	.pipe(postcss(config.postcss))
	.pipe(gulp.dest(config.css.dest))
};

function css_lint() {
	return gulp.src(config.css.src)
		.pipe(stylelint(config.stylelint));
}



// JS
function js_dev() {
	return gulp.src(config.js.src, {since: gulp.lastRun(js_dev)})
		.pipe(sourcemaps.init())
		.pipe(concat(config.js.out))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.js.dest))
		.pipe(browsersync.stream());
}

function js_prod() {
	return gulp.src(config.js.src)
		.pipe(concat(config.js.out))
		.pipe(terser())
		.pipe(babel())
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


function serve(done) {
	browsersync.init({
		server: {
			baseDir: "./build/"
		},
		port: 3000,
		open: false,
		notify: false
	});

	gulp.watch("./src/scss/**/*", {ignoreInitial: false}, css_dev);
	gulp.watch("./src/js/**/*", {ignoreInitial: false}, js_dev);
	gulp.watch("./src/web/**/*", {ignoreInitial: false}, gulp.series(web, reload));
}



function reload(done) {
	browsersync.reload();
	done();
}



function clean() {
	return del(["./build/*"]);
}

exports.start = gulp.series(clean, gulp.parallel(serve));
exports.build = gulp.series(clean, css_lint, js_lint, gulp.parallel(css_prod, js_prod, web));
exports.build_force = gulp.series(clean, gulp.parallel(css_prod, js_prod, web));
