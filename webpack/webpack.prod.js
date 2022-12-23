const path = require('path');
const webpackConfig = require('./webpack.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    ...webpackConfig,
    optimization: {
        minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})]
    }
};
