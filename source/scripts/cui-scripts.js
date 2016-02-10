svg4everybody();

function toggle_visibility(Id) {
   var e = document.getElementById(Id);
   e.style.opacity = ((e.style.opacity!='0') ? '0' : '1');
}

var TopNav = (function () {

  var e = document.querySelectorAll('.cui-top-nav__sub-title');
  var f = document.querySelectorAll('.cui-search__filter');

  for (var i = 0; i < e.length; i++) {
    e[i].addEventListener('click', function() {expandNav(this);} );
  }

  for (var i = 0; i < f.length; i++) {
    f[i].addEventListener('click', function() {expandNav(this);} );
  }

  function expandNav(elem) {
    elem.classList.toggle('expanded');
  };

}) ();

var Expandable = (function () {

  var e = document.querySelectorAll('.cui-expandable__title');

  for (var i = 0; i < e.length; i++) {
    e[i].addEventListener('click', function() {expandableToggle(this);} );
  }

  function expandableToggle(elem) {
    var parent = elem.parentNode;
    parent.classList.toggle('expanded');
  };

}) ();

// Desktop Navigation Functions

var Nav = (function () {

  var cache = new Array();
  cache.push(document.querySelector('.desktop-menu'));
  cache.push(document.querySelector('.cui-menu__content-wrapper'));
  cache.push(document.querySelector('.cui-menu__toggle-button-container'));

  function toggleDesktopNav() {
    cache[0].classList.toggle('desktop-menu--collapse');
    cache[1].classList.toggle('desktop-menu--collapse');
    cache[2].classList.toggle('active');
  };

  return {
    navToggle: toggleDesktopNav
  };

}) ();

// Snap.js Mobile Navigation

var snapMenu = new Snap({
    element: document.querySelector('.snap-content'),
    disable: 'right'
});

var menuToggle = document.querySelector('.cui-menu__toggle-button-container')

menuToggle.addEventListener('click', function() {

    if (snapMenu.state().state == "left") {
        snapMenu.close();
    } else {
        snapMenu.open('left');
    }

});

// Tabs Functions

var Tabs = (function () {

  var e = document.querySelectorAll('.cui-tabs__tab');
  var p = document.querySelectorAll('.cui-tabs__tab-pane')

  for (var i = 0; i < e.length; i++) {
    e[i].addEventListener('click', function() {showTab(this);} );
  }

  function showTab(elem) {
    elemPane = elem.getAttribute('data-pane');
    pane = document.getElementById(elemPane);
    for (var i = 0; i < e.length; i++) {
      e[i].className = 'cui-tabs__tab';
    }
    for (var i = 0; i < e.length; i++) {
      p[i].className = 'cui-tabs__tab-pane';
    }
    elem.className = 'cui-tabs__tab cui-tabs__tab--active';
    pane.className = 'cui-tabs__tab-pane cui-tabs__tab-pane--active'
  };

}) ();

