var webpack = require('webpack');

var serverPort = 3000;
var serverHost = 'localhost';
var staticPath = '/static/';

module.exports = {
    entry: [
	'webpack-hot-middleware/client?path=http://'+serverHost+':'+serverPort+'/__webpack_hmr',
        "./src/index.js"
    ],
    output: {
        path: __dirname + '/js/app',
        filename: "bundle.js",
	publicPath: 'http://'+serverHost+':'+serverPort+staticPath
    },
    module: {
        loaders: [
	    {
		test: /\.jsx?$/,
		loaders: ['babel']
            }
	]
    },
    plugins: [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()
    ]
}
