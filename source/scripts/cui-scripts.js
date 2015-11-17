function toggle_visibility(Id) {
   var e = document.getElementById(Id);
   e.style.opacity = ((e.style.opacity!='0') ? '0' : '1');
}

// Desktop Navigation Functions

var Nav = (function () {

  var cache = new Array();
  cache.push(document.querySelector('.desktop-menu'));
  cache.push(document.querySelector('.cui-nav__content-wrapper'));
  cache.push(document.querySelector('.menu-toggle'));

  function toggleDesktopNav() {
    cache[0].classList.toggle('desktop-menu--collapse');
    cache[1].classList.toggle('desktop-menu--collapse');
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

var menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('click', function() {

    if (snapMenu.state().state == "left") {
        snapMenu.close();
    } else {
        snapMenu.open('left');
    }

});

