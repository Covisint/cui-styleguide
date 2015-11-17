module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig ({
    watch:{
      css:{
        files: ['source/scss/**/*.scss','source/scripts/*.js'],
        tasks: ['concat:dist','sass','postcss','copy:min','copy:build','concat:js','copy:js']
      },
      js: {
        files: ['source/scripts/*.js'],
        tasks: ['concat:js','copy:js']
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
      },
      specificity: {
        src: ['source/cui-wrapper.intro','.tmp/styles.css','source/cui-wrapper.outro'],
        dest: '.tmp/styles.specific.css'
      },
      js: {
        src: ['bower_components/snapjs/snap.min.js','source/scripts/*.js'],
        dest: '.tmp/scripts/cui-scripts.js'
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
      },
      specificity: {
        src: ['.tmp/styles.specific.css'],
        dest: '.tmp/styles.specific.min.css'
      }
    },
    copy:{
      build:{
        files: [{
          cwd: 'source/',
          src: ['styles.min.css','styles.specific.min.css','img/svg-out.svg','img/select-arrows.svg','cui-styleguide-styles.css'],
          dest: 'styleguide/public/',
          expand: true
        }]
      },
      min:{
        files: [{
          cwd: '.tmp/',
          src: ['styles.min.css','styles.specific.min.css'],
          dest: 'source/',
          expand: true
        }]
      },
      js: {
        files: [{
          cwd: '.tmp',
          src: ['scripts/*.js'],
          dest: 'styleguide/public',
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
  grunt.registerTask('build', ['sass','concat:specificity','postcss:dist','postcss:specificity','copy:min', 'copy:build', 'copy:js']);
}