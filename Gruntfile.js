module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.initConfig({
    jasmine: {
      src: ['src/coffee_machine.js', 'tests/actionwords.js'],
      options: {
        specs: [
          'tests/bad_usage_test.js',
          'tests/can_be_configured_test.js',
          'tests/serve_coffee_test.js',
          'tests/support_internationalisation_test.js',
          'tests/display_errors/beans_test.js',
          'tests/display_errors/grounds_test.js',
          'tests/display_errors/water_test.js'
        ],
        junit: {
          path: '_build/test-reports/jasmine',
          consolidate: true
        }
      }
    }
  });
};