# Change Log
All notable changes to this project will be documented in this file.
This project tries its best to adhere to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [1.6]
### Added
- Media Block and Tabs to Blocks
- Badge to Elements
- Background arrow to dropdown inputs
- SVG support for older version of IE with svg4everybody
- Vars for new components as well as off-canvas nav

### Changed
- bower_components is now at the root of the build (styleguide) folder

## [1.4] Release Notes - 2015-12-23
### Added
- Responsive tables on tablet and mobile. In order for this to work, an attribute titled "data-label" must be added to each td. The value of this attribute should be the same as the column header. For example, each td in a column for "Name" should also have a data-label attribute with the value "Name".
- Lato font weight 400 has been added as the main body font. If you are using CUI styleguide as a dependency and want to use a body font, please add the variable $base-font-family variable to your custom vars file and assign your preferred font stack.
- Loading spinner
- Pagination

### Changed
- Replaces incorrect favicon with correct one

### Fixed
- Fixes odd nesting displayed in examples