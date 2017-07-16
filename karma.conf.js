module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        browserNoActivityTimeout: 30000,
        files: [
            {pattern: 'src/index.js', included: true, watched: true},
            {pattern: 'test/**/*.spec.js', watched: true}
        ],
        frameworks: ['browserify', 'jasmine'],
        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*spec.js': ['browserify']
        },
        browserify: {
            transform: [
                ['babelify', { plugins: ["transform-object-assign"] }],
                ['browserify-istanbul', {
                    instrumenterConfig: {
                        embedSource: true   // this is important for HTML reports
                    }
                }]
            ]
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            dir: './coverage',
            reporters: [
                {type: 'text-summary'},
                {type: 'html'},
                {type: 'lcovonly', subdir: '.', file: 'lcov.info'}
            ]
        }
    });
};
