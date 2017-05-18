var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app/index.js',
	output: {
		filename: './dist/js/bundle.js'
	},
	module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
	devServer: {
		port: 3000,
		inline: true,
		contentBase: './dist'		
	}
}