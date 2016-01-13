# cui-styleguide
Digital Style Guide for Core CUI Elements

## Quick Start

* Clone the repo into your project's root: 

        git clone https://github.com/thirdwavellc/cui-styleguide.git

* If you do not plan on altering the base styles, serve the file `styles.min.css` from the source folder in your project

* If you do plan to alter variables and include your own components , you can @import using the following code block for direction:

        @import 'path/to/cui-styleguide/source/base';
        @import 'your-variable-overrides';
        @import 'path/to/cui-styleguide/source/components';
        @import 'your/own/components';

## Assets

There are two css files one can choose to include in their projects in order to access cui-styleguide styles:

* **styles.min.css**: This file is ideal for use in projects that contain no other style frameworks (ie. Bootstrap, AUI, etc.). The class names are namespaced and written with a low specificity

* **styles.specific.min.css**: This file is ideal for use in projects that contain another css framework. The styles are wrapped in an ID (#cui-wrapper, which should be added to the body element in your markup), which gives the CUI styles an extra level of specificity. This ensures CUI styles do not lose a specificity battle with other CSS frameworks used in a project.

In addition to these two CSS assets, one can access scss files. This is ideal if a user wants to @import the base files (which include vars), @import their own variable overrides and then @import the styleguide elements and blocks.

## Browser Support

This project supports the latest two releases of Chrome, Firefox, Internet Explorer and Safari. Supporting browsers older than that would have required a great deal of effort. By taking this approach, we are able to allocate our resources toward making the best UI library for the present and future, rather than spending countless hours supporting a handful of browsers from the past that hold a small and increasingly shrinking market share.