module.exports = function (Handlebars) {
  'use strict';

  // used to determine if example needs different markup 
  // or styling from standard generated template
  Handlebars.registerHelper('eq', function(val, val2, block) {
    if(val == val2){
      return block.fn(this);
    }
  });
};