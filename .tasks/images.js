const config = require('./paths.json');
const gulp = require('gulp');


config.img = {
	src: './src/assets/img/**/*',
}


module.exports = function() {
	return gulp.src(config.img.src)
		.pipe(gulp.dest(config.assets));
}
