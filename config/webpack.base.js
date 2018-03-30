const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distFolder = path.resolve(__dirname, '../build');

module.exports = {
    entry: {
        app: './app/app.js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [ 'file-loader' ]
        }, {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin([distFolder]),
        new HtmlWebpackPlugin({ template: './app/index.html' }),
    ],
    output: {
        filename: '[name].[id].js',
        chunkFilename: '[name].[id].js',
        path: distFolder,
        publicPath: '/',
    },
    resolve: {
        modules: [
            path.resolve('./app'),
            path.resolve('./node_modules'),
        ],
    },
    externals: {
        'config': loadConfig(),
    }
};

function loadConfig() {
    const configPath = path.resolve(__dirname, 'app');
    const configTarget = process.env.VEEVRA_CONFIG || process.env.NODE_ENV;

    var config = null
    switch (configTarget) {
        case 'production':
            console.log("Using production configuration file for application.");
            config = require(`${configPath}/config.prod`);
            break;

        case 'development':
            console.log("Using dev / local configuration file for application.");
            config = require(`${configPath}/config.local`);
            break;

        default:
            console.log(`Using custom config <${configTarget}> for application.`);
            config = require(`${configPath}/config.${process.env.VEEVRA_CONFIG}`);
            break;
    }

    return JSON.stringify(config);
}
