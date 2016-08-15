module.exports = function(grunt,config){
  return {
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
  }
};