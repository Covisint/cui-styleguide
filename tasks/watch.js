module.exports = function(grunt,config){
  return {
    css:{
      files: ['source/scss/**/*.scss'],
      tasks: ['concat:dist','sass','postcss','copy:min','copy:css_to_kss']
    },
    js: {
      files: ['source/scripts/*.js'],
      tasks: ['concat:js','copy:js']
    },
    hbs: {
      files: ['source/hbs/**/*.hbs'],
      tasks: ['kss','copy:icons','copy:build','concat:js','copy:js','copy:md']
    },
    build:{
      files: 'styleguide/**/*',
      tasks: ['concat','sass','postcss','copy:min']
    }
  };
};