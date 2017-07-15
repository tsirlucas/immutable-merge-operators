module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
            { pattern: 'dist/index.js', included: true, watched: true },
            { pattern: 'test/**/*.spec.js', watched: true }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test/**/*.spec.': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};