module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig ({
    watch:{
      css:{
        files: ['source/scss/**/*.scss','styleguide/**/*'],
        tasks: ['sass','cssmin','copy:min','copy:build']
      },
      build:{
        files: 'styleguide/**/*',
        tasks: ['sass','cssmin','copy:min']
      }
    },
    sass:{
      dist:{
        files:{
          '.tmp/styles.css': 'source/styles.scss'
        }
      }
    },
    cssmin: {
      options: {
        keepSpecialComments: 0,
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: [{
          src: ['.tmp/styles.css'],
          dest: '.tmp/styles.min.css'
        }]
      }
    },
    copy:{
      build:{
        files: [{
          cwd: 'source/',
          src: 'styles.min.css',
          dest: 'styleguide/public/',
          expand: true
        }]
      },
      min:{
        files: [{
          cwd: '.tmp/',
          src: 'styles.min.css',
          dest: 'source/',
          expand: true
        }]
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
            src : [
                'styleguide/*.html',
                'styleguide/**/*',
                'source/**/*.js',
                'source/**/*.scss'
            ]
        },
        options: {
          ghostMode: false,
          watchTask: true,
          online: true,
          port: 4000,
          server:{
            baseDir: 'styleguide'
          },
          ui: {
            port: 4001
          }
        }
      }
    }
  });

 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['browserSync','watch:css']);
}