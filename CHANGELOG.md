# Change Log
All notable changes to this project will be documented in this file.
This project tries its best to adhere to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [2.7.3] 2016-10-31
### Fixed
- text overflow in flex table rows now shows ellipsis
- footer now forced to bottom of page

### Added
- '$menu-hamburger-color' and '$menu-hamburger-color--hover' vars allow user to control hover state color

## [2.7.2] 2016-10-25
### Fixed
- pagination ellipses now align with page numbers

## [2.7.1] 2016-10-25

### Fixed
- pagination mobile styles have been adjusted to match designs

### Changed
- action titles are always charcoal instead of alternatively matching the breadcrumb color

## [2.7.0] 2016-10-13
### Added
- content loading placeholder

## [2.6.0] 2016-09-28
### Added
- Stylehint Linting for SCSS. Requires `npm install stylehint -g`

### Fixed
- correct hover color for left menu
- #000 now charcoal grey
- app launch icon position on desktop now aligned in row
- center image for avatar directive
- tr title color now charcoal

### Changed
- dropdown font color now matches standard font color

## [2.5.4] 2016-09-20
### Fixed
- aligns icons in action bar
- style tweaks for mobile profile menu

## [2.5.3] 2016-09-14
### Fixed
- horizontally center centered media object images that are smaller than expected
- small button now has tighter radius
- active state color for folder icon
- wizard title styling

### Changed
- Update input button styles
- Update popover styles

## [2.5.1] 2016-09-12
### Added
- padding class for links in sentences

### Fixed
- tiny icons in left mobile menu now regular size

## [2.5.0] 2016-08-11
### Changed
- upgraded to KSS 3.0.0
- Gruntfile tasks are now broken down into partials located in the /tasks directory
- markup for examples is now moved to the source/hbs directory

## [2.4.1] 2016-08-05
### Added
- styling modifier for buttons to look like links

### Fixed
- left menu now goes all the way down to bottom of window on large displays
- other action bar items still align right when breadcrumbs disappear on mobile

## [2.4.0] 2016-08-01
### Added
- Table header row for table row version c
- Borderless modifier for table headers

### Fixes
- Removes transition from ui-views originating from ngAnimate

### Updates
- Sidebar links are now reordered in the styleguide

## [2.3.0] 2016-07-01
### Added
- styles for items on the organization.directory.user-directory page
- a modifier class for cui-popover removing positioning styles

## [2.2.2] 2016-06-20
### Fixed
- Resolves 404's from missing lato font(s).

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

## [1.4] 2015-12-23
### Added
- Responsive tables on tablet and mobile. In order for this to work, an attribute titled "data-label" must be added to each td. The value of this attribute should be the same as the column header. For example, each td in a column for "Name" should also have a data-label attribute with the value "Name".
- Lato font weight 400 has been added as the main body font. If you are using CUI styleguide as a dependency and want to use a body font, please add the variable $base-font-family variable to your custom vars file and assign your preferred font stack.
- Loading spinner
- Pagination

### Changed
- Replaces incorrect favicon with correct one

### Fixed
- Fixes odd nesting displayed in examples
