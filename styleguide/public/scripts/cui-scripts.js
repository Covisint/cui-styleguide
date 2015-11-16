function toggle_visibility(Id) {
   var e = document.getElementById(Id);
   e.style.opacity = ((e.style.opacity!='0') ? '0' : '1');
}

function toggle_desktop_nav() {
   var e = document.querySelector('.desktop-menu');
   var wrapper = document.querySelector('.cui-nav__content-wrapper');
   e.classList.toggle('desktop-menu--collapse');
   wrapper.classList.toggle('desktop-menu--collapse');
}