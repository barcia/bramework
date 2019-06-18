const path = require('./paths.json');
const gulp = require('gulp');



module.exports = function() {
	return gulp.src(path.img.src)
		.pipe(gulp.dest(path.assets));
}
