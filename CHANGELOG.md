# Change Log
All notable changes to this project will be documented in this file.
This project tries its best to adhere to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [2.2.0]
### Added
- styles for items on the the following security admin screens
  - 5. Org-Directory
  - 6. Org-Dir-Divpulldown
  - 60. Org Hierarchy

### Updates
- Cards no longer have a border or hover state
- Buttons no longer have a hover state, active and visited colors are updated


## [2.0]
### Added
- Major style updates
  - If you are using the styleguide as a dependency, some default colors, sizes and spacing have changed. Please refer to _vars.scss to make your own updates if you prefer. We tried our best to use current variables / add new variables for all v2.0 style changes.

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