const path = require('path');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const aliases = require('../tsconfig.alias.json');
function getWebpackAliasesFromPaths(configPaths) {
    const alias = Object.entries(configPaths).reduce((webpackAliases, [configAlias, configPathList]) => {
        const [aliasKey] = configAlias.split('/');
        const [relativePathToDir] = configPathList[0].split('/*');
        return {
            ...webpackAliases,
            [aliasKey]: path.resolve(__dirname, `../${relativePathToDir}`)
        };
    }, {});
    return alias;
}

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, '../src'),
    entry: {
        app: './main.ts'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
        filename: 'js/[name].[hash].js',
        assetModuleFilename: 'images/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                },
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: true, sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: getWebpackAliasesFromPaths(aliases.compilerOptions.paths)
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css'
        }),
        new HtmlPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            title: 'Hello Vue',
            filename: 'index.html',
            minify: false,
            inject: true,
            templateParameters: {
                publicPath: path.join(__dirname, '..')
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public/*.ico'),
                    to: path.resolve(__dirname, '../dist/[name][ext]')
                    //  flatten: true
                }
            ]
        })
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all'
        }
    }
    // externals: {
    //     vue: 'window.Vue'
    // }
};
