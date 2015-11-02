module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'browserify', 'expect'],
    files: [
      'test-matchete.js'
    ],
    exclude: [
      'karma.conf.js'
    ],
    preprocessors: {
      'test-matchete.js': ['browserify']
    },
    browserify: {
      debug: true
    },
    reporters: ['spec'],
    logLevel: config.LOG_INFO,
    browsers: ['Chrome']
  })
}
