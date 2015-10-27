module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig ({
    watch:{
      css:{
        files: 'source/styles/**/*',
        tasks: ['sass']
      },
      build:{
        files: 'styleguide/**/*',
        tasks: ['sass']
      }
    },
    sass:{
      dist:{
        files:{
          'styleguide/public/styles.css': 'source/styles/styles.scss'
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
            src : [
                'styleguide/**/*.html',
                'source/**/*.js',
                'source/**/*.scss'
            ]
        },
        options: {
          ghostMode: false,
          watchTask: true,
          online: true,
          server:{
            baseDir: 'styleguide'
          }
        }
      }
    }
  });

 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['browserSync','watch:css']);
  grunt.registerTask('build', ['browserSync','watch:build']);
}