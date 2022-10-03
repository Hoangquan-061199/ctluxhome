const headerLogin = $('.header__action-user');
const menuMobileIcon = $('.menu__mobile-icon');
const navbarMobile = $('.navbar');
const loginMobileBtn = $('.login__item-mobile');
const listMenuSmall = $('.small__item-list');
const showlogin = $('.showlogin');
const navbarCategory = $('.navbar__category');
const backscrolltop = $('.backscrolltop');

const iconDown = $('.item__icon-down');
const backMenuBtn = $('.small__item-list-header');
const iconExit = $('.icon-exit');
const login = $('.login');
const overlay = $('.overlay');

// ! function handle
const overlayShow = () => {
  overlay.css('display', 'block');
};

const overlayHidden = () => {
  overlay.css('display', 'none');
};

const listMenuSmallHidden = () => {
  listMenuSmall.css({ transform: 'translateX(-100%)' });
};

const menuMobileShow = () => {
  navbarMobile.css('transform', 'translateX(0)');
};

const menuMobileHidden = () => {
  navbarMobile.css('transform', 'translateX(-100%)');
};

const loginShow = () => {
  login.css('transform', 'translateX(0)');
};

const loginHidden = () => {
  login.css('transform', 'translateX(100%)');
};

const handleMenuMobile = () => {
  if (window.matchMedia('(max-width: 991px)').matches) {
    menuMobileHidden();
  }
};

const scrollTop = () => {
  $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
};

menuMobileIcon.click(() => {
  menuMobileShow();
  overlayShow();
});

overlay.click(() => {
  handleMenuMobile();
  overlayHidden();
  loginHidden();
  listMenuSmallHidden();
  $('.content__product-catergory').removeClass('active');
});

//! handle menu navbar mobile
iconDown.click(function () {
  $(this).next().css('transform', 'translateX(0)');
});

backMenuBtn.click(function () {
  listMenuSmallHidden();
});

//! login handle
loginMobileBtn.click(() => {
  loginShow();
  overlayShow();
  handleMenuMobile();
});

headerLogin.click(() => {
  loginShow();
  overlayShow();
});

iconExit.click(() => {
  handleMenuMobile();
  loginHidden();
  overlayHidden();
});

showlogin.click(() => {
  loginShow();
  overlayShow();
});

//! scrollTop
backscrolltop.click(() => {
  scrollTop();
});

// ! CountDown Timer
function makeTimer() {
  let endTime = new Date('10 Oct 2022 0:00:00 GMT+07:00');
  endTime = Date.parse(endTime) / 1000;

  let now = new Date();
  now = Date.parse(now) / 1000;

  let timeLeft = endTime - now;

  let days = Math.floor(timeLeft / 86400);
  let hours = Math.floor((timeLeft - days * 86400) / 3600);
  let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  let seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );

  if (hours < '10') {
    hours = '0' + hours;
  }
  if (minutes < '10') {
    minutes = '0' + minutes;
  }
  if (seconds < '10') {
    seconds = '0' + seconds;
  }

  $('.day').html(days);
  $('.hours').html(hours);
  $('.minutes').html(minutes);
  $('.seconds').html(seconds);
}

setInterval(function () {
  makeTimer();
}, 1000);

//! toggle menu mobile footer
$('.footer__group-item-title .icon-down').click(function () {
  $(this).parent().next('.text-group').toggle('slow');
});

//! scroll show menu navbar
$(window).scroll(() => {
  if ($(window).width() >= 992) {
    let headerHeight = $('.header').height() + $('.navbar').height();

    if ($(this).scrollTop() >= headerHeight) {
      $('.navbar').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed');
    }
  }
});

//! toggle list content for news details
$('.header-icon-toggle').click(function () {
  $(this).parent().next('.contents__news-item').toggle('slow');
});

//! toggle list content small for news details
$('.item-title-icon').click(function () {
  console.log($(this).next().children('.nav'));

  $(this).next().children('.nav').toggle('slow');
});

//! show search navbar
$('.navbar__search-icon').click(() => {
  if ($('.navbar__search-input').hasClass('active')) {
    $('.navbar__search-input').removeClass('active');
  } else {
    $('.navbar__search-input').addClass('active');
  }
});

//! click see more show text for product
$('.product__block-details-btn-reading-more').click(() => {
  if ($('.product__block-details').hasClass('active')) {
    $('.product__block-details').removeClass('active');
  } else {
    $('.product__block-details').addClass('active');
  }
});

$('.product__block-icon-filter').click(() => {
  $('.content__product-catergory').addClass('active');
  overlayShow();
});

$('.close-filter').click(() => {
  $('.content__product-catergory').removeClass('active');
  overlayHidden();
});

$('.product__filter-item-grid').click(() => {
  if ($(this).hasClass('active')) {
    $('.product__filter-item-list').removeClass('active');
  } else {
    $('.product__filter-item-grid').addClass('active');
    $('.product__filter-item-list').removeClass('active');
  }
});

$('.product__filter-item-list').click(() => {
  if ($(this).hasClass('active')) {
    $('.product__filter-item-grid').removeClass('active');
  } else {
    $('.product__filter-item-list').addClass('active');
    $('.product__filter-item-grid').removeClass('active');
  }
});

$('.product__specifications-btn').click(() => {
  $('.specifications__details').addClass('active');
});

$('.specifications__details-exit').click(() => {
  $('.specifications__details').removeClass('active');
});

$('.discussion__product-block').click(() => {
  $('.form-cmt').addClass('active');
});

// ! library owl-carousel
$('.slide-content').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 0,
  nav: false,
  items: 1,
  dots: true,
});

$('.list__category-product').owlCarousel({
  autoplay: false,
  loop: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    800: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
});

$('.content__hotdeals-products').owlCarousel({
  autoplay: false,
  loop: false,
  margin: 0,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    800: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
  dots: true,
});

$(
  '.product__news .product__lists, .product__outstanding .product__lists'
).owlCarousel({
  autoplay: false,
  loop: false,
  margin: 5,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    500: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 2.5,
    },
    1200: {
      items: 3,
    },
  },
  dots: true,
});

$('.trademark__product-list').owlCarousel({
  autoplay: false,
  loop: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1080: {
      items: 6,
    },
  },
  dots: true,
});

$('.content__product-bestseller .product__list').owlCarousel({
  autoplay: false,
  loop: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },

    800: {
      items: 3,
    },

    1000: {
      items: 4,
    },
    1240: {
      items: 5,
    },
  },
  dots: true,
});

$('.content__product-details .product__lists').owlCarousel({
  autoplay: false,
  autoWidth: true,
  loop: false,
  margin: 5,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 3,
    },
  },
  dots: false,
});

$('.customer__service-list').owlCarousel({
  autoplay: false,
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1400: {
      items: 5,
    },
  },
  dots: false,
});

$('.promotion__silde-content').owlCarousel({
  autoplay: false,
  loop: true,
  margin: 0,
  nav: true,
  items: 1,
  dots: true,
});

$('.product__description-slide').owlCarousel({
  autoplay: false,
  loop: true,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
  },
  dots: true,
});

$('.products__similar .product__lists').owlCarousel({
  autoplay: false,
  autoWidth: true,
  loop: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
  dots: false,
});

$('.slider-product-details').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
  },
  dots: false,
});

// $('#image-gallery').lightSlider({
//   gallery: true,
//   item: 1,
//   thumbItem: 6,
//   slideMove: 1,
//   loop: true,
//   onSliderLoad: function () {
//     $('#image-gallery').removeClass('cS-hidden');
//   },
// });

$('#imageGallery').lightSlider({
  gallery: true,
  item: 1,
  loop: true,
  thumbItem: 6,
  slideMargin: 0,
  enableDrag: false,
  currentPagerPosition: 'middle',
  onSliderLoad: function (el) {
    el.lightGallery({
      selector: '#imageGallery .lslide',
    });
  },
});
