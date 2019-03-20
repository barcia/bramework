'use strict';

const gulp = require('gulp');

// Tasks
const clean = require('./.tasks/clean');
const css = require('./.tasks/css');
const img = require('./.tasks/images');
const js = require('./.tasks/javascript');
const watch = require('./.tasks/watch');

// Exports
exports.watch = gulp.series(clean, watch.assets);
exports.build = gulp.series(clean, gulp.parallel(css.prod, js.prod, img));
exports.clean = clean;
