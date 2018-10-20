'use strict';

const define = require('./define');
const loaders = require('./loaders');
const localIp = require('my-local-ip');
const optimization = require('./optimization');
const plugins = require('./plugins');
const resolve = require('./resolve');

let entries = {};
entries['index'] = ['babel-polyfill', './src/entries/index.js'];

define.pages.forEach(page => {
	entries[page] = [`./src/entries/${page}.js`]
});

module.exports = {
	devServer: {
		host: localIp()
	},
	devtool: define.development ? 'inline-source-map' : false,
	entry: entries,
	mode: define.mode,
	module: loaders,
	optimization,
	output: {
		filename: '[name].js',
		path: define.dist
	},
	plugins,
	resolve
};
