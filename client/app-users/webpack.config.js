var webpack = require('webpack');

module.exports = {
    entry: [
	"./src/app.js"
    ],
    output: {
        path: __dirname + '/js',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/,
	      loader: 'babel'
	    }
	]
    }
}
