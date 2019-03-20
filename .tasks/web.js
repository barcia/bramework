const config = require('./paths.json');
const gulp = require('gulp');


config.web = {
	src: './src/web/**/*',
}


module.exports = function() {
	return gulp.src(config.web.src)
		.pipe(gulp.dest(config.dist));
}
