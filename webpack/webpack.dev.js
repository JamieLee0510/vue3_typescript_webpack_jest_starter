const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.common');

module.exports = {
    ...webpackConfig,
    devServer: {
        static: path.join(__dirname, '../dist'), // from "contentBase" to "static"
        compress: true,
        hot: true,
        port: 3000,
        historyApiFallback: true
    },
    plugins: [...webpackConfig.plugins, new webpack.HotModuleReplacementPlugin()],
    devtool: 'inline-cheap-module-source-map'
};
