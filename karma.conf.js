module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
            {pattern: 'dist/index.js', included: true, watched: true},
            {pattern: 'test/**/*.spec.js', watched: true}
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'src/**/*.js': ['babel'],
            'test/**/*spec.js': ['babel']
        },
        babelPreprocessor: {
            options: {
                presets: [
                    "es2015",
                    "stage-0"
                ]
            },
            filename: function (file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        }
    });
};