module.exports = function(grunt,config){
  return {
    icons: {
      files: [{
        cwd: 'node_modules/@covisint/cui-icons/',
        src: [
          'dist/logos/logos-out.svg',
          'dist/icons/icons-out.svg',
          'dist/font-awesome/font-awesome-out.svg'
        ],
        dest: 'styleguide/node_modules/cui-icons/',
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
        cwd: 'node_modules/lato-font/fonts/lato-normal/',
        src: [
        '*.woff'
        ],
        dest: 'styleguide/node_modules/lato-font/fonts/lato-normal/',
        expand: true
      },
      {
        cwd: 'node_modules/lato-font/fonts/lato-black/',
        src: [
        '*.woff'
        ],
        dest: 'styleguide/node_modules/lato-font/fonts/lato-black/',
        expand: true
      },
      {
        cwd: 'node_modules/lato-font/fonts/lato-bold/',
        src: [
        '*.woff'
        ],
        dest: 'styleguide/node_modules/lato-font/fonts/lato-bold/',
        expand: true
      }],
      options:{
        process:function(content){
          if(grunt.option('env')==='qa') return content.replace('/node_modules','node_modules');
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
  }
};