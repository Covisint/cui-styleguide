module.exports = function(grunt,config){
  return {
    dev: {
      bsFiles: {
          src : [
              'styleguide/**/*'
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
};