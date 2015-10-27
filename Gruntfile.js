module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig ({
    watch:{
      css:{
        files: ['source/scss/**/*.scss','styleguide/**/*'],
        tasks: ['sass','copy:build']
      },
      build:{
        files: 'styleguide/**/*',
        tasks: ['sass']
      }
    },
    sass:{
      dist:{
        files:{
          'source/styles.css': 'source/styles.scss'
        }
      }
    },
    copy:{
      build:{
        files: [{
          cwd: 'source/',
          src: 'styles.css',
          dest: 'styleguide/public/',
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
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['browserSync','watch:css']);
}