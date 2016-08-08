svg4everybody();


/*var TopNav = (function () {

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

}) ();*/

// Desktop Navigation Functions

// var Nav = (function () {

//   var cache = new Array();
//   cache.push(document.querySelector('.cui-desktop-menu'));
//   cache.push(document.querySelector('.cui-menu__content-wrapper'));
//   cache.push(document.querySelector('.cui-menu__toggle-button-container'));

//   function toggleDesktopNav() {
//     cache[0].classList.toggle('cui-desktop-menu--collapse');
//     cache[1].classList.toggle('cui-desktop-menu--collapse');
//     cache[2].classList.toggle('active');
//   };

//   return {
//     navToggle: toggleDesktopNav
//   };

// }) ();

$(document).ready(function(){

  (function() {


  //TopNav
  var TopNav = {
    init: function() {
      this.cacheDOM();
      this.bindWatch();
    },
    cacheDOM: function(){
      this.$el = $('.cui-top-nav__sub-title, .cui-search__filter');
    },
    bindWatch: function(){
      this.$el.on('click', this.expand);
    },
    expand: function(){
      $(this).toggleClass('expanded');
    }
  }
  TopNav.init();


  // Desktop Navigation Functions
    var $Nav = {
      init: function(){
        this.cacheDOM();
        this.bindWatch();
      },
      cacheDOM: function(){
          this.$el                =   $('.snap-content');
          this.$desktopMenu       =   this.$el.find('.cui-desktop-menu');
          this.$wrapper           =   this.$el.find('.cui-menu__content-wrapper');
          this.$buttonContainer   =   this.$el.find('.cui-menu__toggle-button--desktop');
      },
      doToggle: function(){
          this.$desktopMenu.toggleClass('cui-desktop-menu--collapse');
          this.$wrapper.toggleClass('cui-desktop-menu--collapse');
          this.$buttonContainer.toggleClass('active');
      },
      bindWatch: function(){
        this.$buttonContainer.click(this.doToggle.bind(this));
      }
    }
    $Nav.init();

  //Off Canvas Nav Functions
    var offCanvasNav = {
        init: function(){
          this.cacheDOM();
          this.bindWatch();
      },
      cacheDOM: function(){
        this.$el = $('.snap-content');
        this.$menuToggle = this.$el.find('.cui-menu__toggle-button--mobile');

        // Initialize Snap.js Mobile Navigation
        this.$snapMenu = new Snap({
            element: this.$el[0], //Use index to mimic the output of querySelector.  Needs the element, not the jQuery object
            disable: 'right'
        });
      },
      bindWatch: function(){
          this.$menuToggle.click(this.doSnapMenu.bind(this));
      },
      doSnapMenu: function(){
    
            if (this.$snapMenu.state().state == "left") {
                this.$snapMenu.close();
            } else {
                this.$snapMenu.open('left');
            }
      }
    }
   offCanvasNav.init();

	// Tabs Functions
    var Tab = {
      init: function() {
        this.cacheDOM();
        this.bindWatch();
      },
      cacheDOM: function(){
        this.$el    = $('.cui-tabs');
        this.$tabs  = this.$el.find('.cui-tabs__tab');
        this.$panes = this.$el.find('.cui-tabs__tab-pane');
      },
      bindWatch: function(){
        this.$tabs.on('click', this.showTab.bind(this));
      },
      showTab: function(event){
        $this  = $(event.target); //The tab that was clicked
        paneID = $this.data('pane');
        pane   = this.$panes.filter('#' + paneID); //Add # to make it a selector 

        $this.addClass('cui-tabs__tab--active').parent('li').siblings().find('a').removeClass('cui-tabs__tab--active');
        pane.addClass('cui-tabs__tab-pane--active').siblings().removeClass('cui-tabs__tab-pane--active');
      }
    }

    Tab.init();


    var Expandable = {

      init: function() {
        this.cacheDOM();
        this.closeOnLoad();
        this.bindWatch();
      },

      cacheDOM: function() {
        this.$el = $(".cui-expandable__title");
        this.$wrapper = this.$el.parent()
      },

      closeOnLoad: function() {
        this.$wrapper.each(function() {
          if (!$(this).hasClass("expanded")) {
            $(this).children(".cui-expandable__body").css('display','none');
          }
        });
      },

      bindWatch: function() {
        this.$el.on('click', this.toggleExpandable);
      },

      toggleExpandable: function() {
        $(this).parent().toggleClass("expanded");
        $(this).siblings(".cui-expandable__body").animate({'height':'toggle'},300,'linear');
      }

    };
    Expandable.init();

    var Button = {

      init: function() {
        this.cacheDOM();
        this.bindWatch();
      },

      cacheDOM: function() {
        this.$el = $(".cui-button");
      },

      bindWatch: function() {
        this.$el.on('click', this.clickAnimation);
      },

      clickAnimation: function(el) {
        $(this).addClass("cui-button--clicked").delay(300).queue(function(){
          $(this).removeClass("cui-button--clicked").dequeue();
        });
      }

    };
    Button.init();

    var Profile = {

      init: function() {
        this.cacheDOM();
        this.bindWatch();
      },

      cacheDOM: function() {
        this.$el = $(".cui-profile");
      },

      bindWatch: function() {
        this.$el.on('click', this.toggleProfileMenu);
      },

      toggleProfileMenu: function() {
        $(this).toggleClass("cui-profile--active");
      }

    };
    Profile.init();
  }) ()
});