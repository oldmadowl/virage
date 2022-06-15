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

  //slider in section offer
  $('.offer__slider').slick({
    dots: true,
    prevArrow: '<button class="slick-btn slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
    initialSlide: 2,
  });

  //slider in section price
  $('.price__slider').slick({
    dots: true,
    prevArrow: '<button class="slick-btn slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 4,
  });

});