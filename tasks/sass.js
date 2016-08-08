module.exports = function(grunt,config){
  return {
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
  }
};