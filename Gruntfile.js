module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.initConfig({
    jasmine: {
      src: ['src/coffee_machine.js', 'tests/actionwords.js'],
      options: {
        specs: ['tests/project_test.js'],
        junit: {
          path: '_build/test-reports/jasmine',
          consolidate: true
        }
      }
    }
  });
};