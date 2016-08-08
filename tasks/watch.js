module.exports = function(grunt,config){
  return {
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
  };
};