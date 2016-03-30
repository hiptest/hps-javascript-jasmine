module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.initConfig({
    jasmine: {
      src: ['src/coffee_machine.js', 'tests/actionwords.js'],
      options: {
        specs: [
          'tests/nominal_case_test.js',
          'tests/weird_specs_test.js',
          'tests/error_messages/beans_test.js',
          'tests/error_messages/grounds_test.js',
          'tests/error_messages/water_test.js'
        ],
        junit: {
          path: '_build/test-reports/jasmine',
          consolidate: true
        }
      }
    }
  });
};