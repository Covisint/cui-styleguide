module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var config = {

  };

  var tasks = [
    'watch',
    'browserSync',
    'concat',
    'sass',
    'postcss',
    'copy',
    'exec',
    'kss'
  ];

  var opts = {
    config:config
  };

  tasks.forEach(function(task) {
    opts[task] = require('./tasks/' + task + '.js')(grunt, config);
  });

  grunt.initConfig(opts);

  grunt.registerTask('default', ['browserSync','watch:css','watch:js']);
  grunt.registerTask('build', [
    'concat:specificity',
    'sass',
    'postcss:dist',
    'postcss:specificity',
    'postcss:styleguideStyles',
    'copy:min',
    'kss',
    'copy:icons',
    'copy:build',
    'concat:js',
    'copy:js'
    ]);
};
