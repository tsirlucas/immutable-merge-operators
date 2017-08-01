import path from 'path';
import webpack from 'webpack';
import glob from 'glob';

const mainPath = path.resolve(__dirname, 'src', 'index.js');
const splitPath = glob.sync('./src/operators/*.js*');
const buildPath = path.resolve(__dirname, 'dist');

// Converting glob path to filename
const getFileName = (str) => {
  const splitStr = str.split('/');
  return splitStr[splitStr.length-1]
    .slice(0, splitStr.length-7);
};

// Converting array to object with same keys
const split = splitPath.reduce((obj, val) => {
  obj[getFileName(val)] = val;
  return obj;
}, {});

const config = {
  entry: {
    index: mainPath,
    ...split
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    publicPath: '/dist/',
    library: ["ImmutableMergeOperators", "[name]"],
    libraryTarget: "umd"
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
