module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig ({
    watch:{
      css:{
        files: ['source/scss/**/*.scss','source/scripts/*.js','README.md'],
        tasks: ['concat:dist','sass','postcss','copy:min','exec','copy:build','concat:js','copy:js','copy:md']
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
        src: ['source/cui-wrapper.intro','source/styles.scss','source/cui-wrapper.outro'],
        dest: 'source/styles.specific.scss'
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
      specificity: {
        files: {
          '.tmp/styles.specific.css':'source/styles.specific.scss'
        }
      }
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano')({discardComments: 'true'})
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
      bowerImg: {
        files: [{
          cwd: 'bower_components/cui-icons/dist',
          src: [
            'logos/logos-out.svg',
            'icons/icons-out.svg',
            'favicon.ico'
          ],
          dest: 'source/img',
          expand: true
        }]
      },
      build:{
        files: [{
          cwd: 'source/',
          src: [
          'styles.min.css',
          'styles.specific.min.css',
          'img/**/*.svg',
          'img/**/*.png',
          'img/*.ico',
          'cui-styleguide-styles.css',
          'off-canvas-iframe.html',
          ],
          dest: 'styleguide/public/',
          expand: true
        },
        {
          cwd: 'bower_components/lato/font/lato-regular/',
          src: [
          '*.woff',
          '*.woff2',
          '*.ttf'
          ],
          dest: 'styleguide/public/fonts',
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
      },
      md: {
        files: [{
          cwd: '.',
          src: 'README.md',
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
    },
    exec: {
      kss: 'node_modules/kss/bin/kss-node --config kss-config.json'
    }
  });

 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['browserSync','watch:css','watch:js','watch:md']);
  grunt.registerTask('build', [
    'concat:specificity',
    'sass',
    'postcss:dist',
    'postcss:specificity',
    'copy:min',
    'exec',
    'copy:bowerImg', 
    'copy:build', 
    'copy:js'
    ]);
}