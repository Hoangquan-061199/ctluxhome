const a = $(
  '.fotorama__stage__frame.fotorama__loaded.fotorama__loaded--img.fotorama__active .fotorama__img'
);

$('.fotorama-productdetail').fotorama({
  width: 700,
  maxwidth: '100%',
  height: '50%',
  ratio: 16 / 3,
  click: true,
  nav: 'thumbs',
});

$('.fotorama').fotorama({
  maxwidth: '100%',
  ratio: 16 / 6.5,
  nav: 'thumbs',
  navposition: 'bottom',
});

$('.fotorama__iconclose').click(() => {
  $('.pop__up').removeClass('active');
  $('.info__product').removeClass('active');
});

$('.show-img-zoom').click(() => {
  $('.pop__up').addClass('active');
  $('.info__product').addClass('active');
});

// a.click(() => {
//   console.log('oke');
// });
