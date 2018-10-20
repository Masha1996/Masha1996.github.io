// @flow
'use strict';

const define = require('./define');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// MiniCssExtractPlugin заменяет ExtractTextWebpackPlugin и выполняет ту же задачу (сборку css в один файл)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
	new MiniCssExtractPlugin({
		chunkFilename: '[id].css',
		filename: '[name].css'
	}),
];

define.pages.forEach(page => {
	plugins.push(
		new HtmlWebpackPlugin({
			chunks: [`${page}`],
			filename: `${page}.html`,
			template: './src/index.html',
			title: 'Аверс'
		})
	)
});

module.exports = plugins;
