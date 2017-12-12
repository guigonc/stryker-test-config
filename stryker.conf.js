module.exports = function(config) {
  config.set({
    files: [
      { pattern: "package.json", mutated: false, included: false },
      { pattern: "src/**/*.*", mutated: true, included: false },
      "test/**/*.js"
    ],
    testRunner: "mocha",
    mochaOptions: {
      timeout: 3500,
      recursive: true,
      compilers: ['js:babel-register', 'js:babel-polyfill']
    },
    mutator: "javascript",
    transpilers: ["babel"],
    reporter: ["html", "clear-text", "progress"],
    testFramework: "mocha",
    coverageAnalysis: "off",
    babelrcFile: ".babelrc"
  });
};
