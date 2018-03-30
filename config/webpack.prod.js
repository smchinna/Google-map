const merge = require('webpack-merge');
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const base = require('./webpack.base.js');

module.exports = merge(base, {
    plugins: [
        new UglifyJSPlugin({ sourceMap: true }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});
