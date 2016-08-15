module.exports = function(grunt,config){
  return {
    options: {
      builder: "source/template/",
      css: [
        "cui-styleguide-styles.min.css",
        "styles.min.css"
      ],
      extend: "source/scripts/helpers",
      homepage: "README.md",
      js: [
        "https://cdnjs.cloudflare.com/ajax/libs/classlist/2014.01.31/classList.min.js",
        "scripts/cui-scripts.js"
      ],
      mask: "*.scss"
    },
    dist: {
      src: "source",
      dest: "styleguide/"
    }
  }
};