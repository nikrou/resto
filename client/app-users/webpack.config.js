var webpack = require('webpack');

module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path: __dirname + '/js/app',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel'
        }]
    }
}
