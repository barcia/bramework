const config = require('./paths.json');
const gulp = require('gulp');
const browsersync = require('browser-sync');
const webpack = require('webpack-stream');


config.js = {
	entry: {
		script: './src/js/index.js',
	},
	output: {
		filename: '[name].js',
	},
	src: './src/js/**/*.js',
}


module.exports = {
	dev: function() {
		return  webpack({
			mode: 'development',
			entry: config.js.entry,
			output: config.js.output
		})
			.pipe(gulp.dest(config.assets))
			.pipe(browsersync.stream());
	},
	prod: function() {
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
}
