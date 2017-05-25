var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'babel-polyfill',
		'./app/learning.js',
		'./app/classes/lion.js',
		'./app/classes/calculator.js',
		'./app/prototypes/wizard.js',
		'./app/prototypes/ds.js',
		'./app/closures/learning.js',
		'./app/closures/budget.js',
		'./app/generators/learning.js',
		'./app/generators/iterator.js',
		'./app/promises/learning.js',
		'./app/promises/apifetch.js',
		'./app/es7-new-features/learning.js',
		'./app/es8-proposals/learning.js'
		],
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