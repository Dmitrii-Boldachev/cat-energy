var navMain = document.querySelector('.main-nav__wrapper');
    var navToggle = document.querySelector('.header-menu__toggle');
    var activateButton = document.querySelector('.no-js');

  navToggle.addEventListener('click', function() {

    if (navToggle.classList.contains('header-menu__toggle-open')) {
      navToggle.classList.remove('header-menu__toggle-open');
      navToggle.classList.add('header-menu__toggle-close');
    } else {
      navToggle.classList.add('header-menu__toggle-open');
      navToggle.classList.remove('header-menu__toggle-close');
    }

    if (navMain.classList.contains('menu-opened')) {
      navMain.classList.remove('menu-opened');
      navMain.classList.add('menu-closed');
    } else {
      navMain.classList.add('menu-opened');
      navMain.classList.remove('menu-closed');
    }
  });

  window.onload = function () {
    navToggle.classList.remove("no-js");
    navMain.classList.remove('menu-opened');
    navMain.classList.add('menu-closed');
  };
