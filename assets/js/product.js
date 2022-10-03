// ! lọc sản phẩm theo giá bằng cách kéo input range

$('.js-range-slider').ionRangeSlider({
  type: 'double',
  min: 0,
  max: 1000,
  from: 0,
  to: 1000,
  grid: true,
  onStart: function (data) {
    $('.price-from').html(data.from);
    $('.price-to').html(data.to);
  },
  onChange: function (data) {
    $('.price-from').html(data.from);
    $('.price-to').html(data.to);
  },
});
