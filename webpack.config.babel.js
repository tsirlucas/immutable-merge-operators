import path from 'path';
import webpack from 'webpack';

const mainPath = path.resolve(__dirname, 'src', 'playground.js');
const buildPath = path.resolve(__dirname, 'dist');

const config = {
    entry: {
        bundle: [mainPath]
    },
    output: {
        path: buildPath,
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]

    }
};

module.exports = config;
