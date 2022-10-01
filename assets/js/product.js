// ! lọc sản phẩm theo giá bằng cách kéo input range

$('#slider-range').slider({
  range: true,
  min: 2700000,
  max: 35500000,
  values: [2700000, 35500000],
  slide: function (event, ui) {
    $('#amount-min').val(ui.values[0]);
    $('#amount-max').val(ui.values[1]);
  },
});
$('#amount-min').val($('#slider-range').slider('values', 0));
$('#amount-max').val($('#slider-range').slider('values', 1));
