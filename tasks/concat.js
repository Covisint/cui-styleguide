module.exports = function(grunt,config){
  return {
    dist: {
      src: ['source/base.scss','source/components.scss'],
      dest: 'source/styles.scss'
    },
    specificity: {
      src: ['source/cui-wrapper.intro','source/styles.scss','source/cui-wrapper.outro'],
      dest: 'source/styles.specific.scss'
    },
    js: {
      src: ['node_modules/jquery/dist/jquery.min.js','node_modules/snap.js/dist/snap.min.js','node_modules/svg4everybody/dist/svg4everybody.min.js','source/scripts/*.js'],
      dest: '.tmp/scripts/cui-scripts.js'
    }
  }
};