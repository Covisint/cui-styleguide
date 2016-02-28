module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig ({
    watch:{
      css:{
        files: ['source/scss/**/*.scss','source/scripts/*.js','README.md'],
        tasks: ['concat:dist','sass','postcss','copy:min','exec','copy:icons','copy:build','concat:js','copy:js','copy:md']
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
        src: ['bower_components/jquery/dist/jquery.min.js','bower_components/snapjs/snap.min.js','bower_components/svg4everybody/dist/svg4everybody.min.js','source/scripts/*.js'],
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
          require('autoprefixer')({browsers: 'last 3 versions'}),
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
      },
      styleguideStyles: {
        src: ['source/cui-styleguide-styles.css'],
        dest: 'source/cui-styleguide-styles.min.css'
      }
    },
    copy:{
      icons: {
        files: [{
          cwd: 'bower_components/cui-icons/',
          src: [
            'dist/logos/logos-out.svg',
            'dist/icons/icons-out.svg',
            'dist/font-awesome/font-awesome-out.svg'
          ],
          dest: 'styleguide/bower_components/cui-icons/',
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
          'cui-styleguide-styles.min.css',
          'off-canvas-iframe.html',
          ],
          dest: 'styleguide/',
          expand: true
        },
        {
          cwd: 'bower_components/lato/font/lato-regular/',
          src: [
          '*.woff',
          '*.woff2',
          '*.ttf'
          ],
          dest: 'styleguide/bower_components/lato/font/lato-regular/',
          expand: true
        }],
        options:{
          process:function(content){
            if(grunt.option('env')==='qa') return content.replace('/bower_components','bower_components');
            else return content;
          }
        }
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
          dest: 'styleguide',
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
      kss: 'node node_modules/kss/bin/kss-node --config kss-config.json'
    }
  });

  grunt.registerTask('default', ['browserSync','watch:css','watch:js','watch:md']);
  grunt.registerTask('build', [
    'concat:specificity',
    'sass',
    'postcss:dist',
    'postcss:specificity',
    'postcss:styleguideStyles',
    'copy:min',
    'exec',
    'copy:icons',
    'copy:build',
    'concat:js',
    'copy:js'
    ]);
}
