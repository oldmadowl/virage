$(function () {


  // animation for drop menu
  $('.drop-menu-link').hover(function () {
    $(this).toggleClass('drop-menu-link--active');
    $('.drop-menu').toggleClass('drop-menu--active');
  });

  $('.drop-menu').hover(function () {
    $(this).toggleClass('drop-menu--active');
    $('.drop-menu-link').toggleClass('drop-menu-link--active');
  });

});