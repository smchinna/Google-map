const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const base = require('./webpack.base.js');

module.exports = merge(base, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../build'),
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
});
