const path = require('./paths.json');
const gulp = require('gulp');
const webpack = require('webpack-stream');



const config = {
	js: {
		entry: {
			script: './src/assets/js/index.js',
		},
		output: {
			filename: '[name].js',
		}
	}
}



module.exports = {
	dev: function() {
		return  webpack({
			mode: 'development',
			entry: config.js.entry,
			output: config.js.output
		})
			.pipe(gulp.dest(path.assets))
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
			.pipe(gulp.dest(path.assets))
	}
}
