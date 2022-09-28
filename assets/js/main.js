const headerLogin = $('.header__action-user');
const menuMobileIcon = $('.menu__mobile-icon');
const navbarMobile = $('.navbar');
const loginMobileBtn = $('.login__item-mobile');
const listMenuSmall = $('.small__item-list');
const showlogin = $('.showlogin');
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
});

$('.item__icon-down').click((e) => {
  console.log($(this).data('index'));
  e.preventDefault();
  $(this)
    .parent('.category__list-small-item')
    .next('.small__item-list')
    .css({ transform: 'translateX(0)' });
  // console.log(menuSmallItem);
});

backMenuBtn.click((e) => {
  e.preventDefault();
  listMenuSmall.css('transform', 'translateX(-100%)');
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

// ! library owl-carousel
$('.owl-carousel').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 0,
  nav: false,
  items: 1,
  dots: true,
});
