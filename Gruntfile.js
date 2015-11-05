module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig ({
    watch:{
      css:{
        files: ['source/scss/**/*.scss'],
        tasks: ['concat','sass','postcss','copy:min','copy:build']
      },
      js: {
        files: ['source/scripts/*.js'],
        tasks: ['copy:build']
      },
      build:{
        files: 'styleguide/**/*',
        tasks: ['concat','sass','postcss','copy:min']
      }
    },
    concat: {
      dist: {
        src: ['source/base.scss','source/components.scss'],
        dest: 'source/styles.scss'
      }
    },
    sass:{
      dist:{
        files:{
          '.tmp/styles.css': ['source/styles.scss'],
          'source/cui-styleguide-styles.css': 'source/cui-styleguide-styles.scss'
        }
      },
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano')()
        ]
      },
      dist: {
        src: ['.tmp/styles.css'],
        dest: '.tmp/styles.min.css'
      }
    },
    copy:{
      build:{
        files: [{
          cwd: 'source/',
          src: ['styles.min.css','img/svg-out.svg','img/select-arrows.svg','cui-styleguide-styles.css','scripts/*.js'],
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
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['browserSync','watch:css','watch:js']);
  grunt.registerTask('build', ['sass','postcss','copy:min', 'copy:build']);
}