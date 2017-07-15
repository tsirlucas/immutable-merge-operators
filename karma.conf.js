module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
            {pattern: 'src/index.js', included: true, watched: true},
            {pattern: 'test/**/*.spec.js', watched: true}
        ],
        frameworks: ['browserify', 'jasmine'],
        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*spec.js': ['browserify']
        },
        browserify: {
            debug: true,
            transform: [
                ['babelify']
            ]
        }
    });
};