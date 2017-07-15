import path from 'path';
import webpack from 'webpack';

const mainPath = path.resolve(__dirname, 'src', 'index.js');
const buildPath = path.resolve(__dirname, 'dist');

const config = {
    entry: {
        bundle: [mainPath]
    },
    output: {
        path: buildPath,
        filename: 'index.js',
        publicPath: '/dist/'
    },

    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: [path.resolve('src')],
                loader: 'babel-loader'
            }
        ]

    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: 0
            },
            sourceMap: false,
            compress: {
                unused: 1,
                warnings: 1,
                comparisons: 1,
                conditionals: 1,
                negate_iife: 1, // <- for `LazyParseWebpackPlugin()`
                dead_code: 1,
                if_return: 1,
                join_vars: 1,
                evaluate: 1
            }
        })
    ]
};

module.exports = config;
