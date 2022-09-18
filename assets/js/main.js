// ! lọc sản phẩm theo giá bằng cách kéo input range

const rangeInput = document.querySelectorAll('.range__input input'),
  progress = document.querySelector('item__category-slider .slider__progress');

rangeInput.forEach((input) => {
  input.addEventListener('input', () => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    // console.log(minVal, maxVal);

    let precent = (minVal / rangeInput[0].max) * 100;
    // console.log(precent);

    progress.style.left = (minVal / rangeInput[0].max) * 100 + 'px';
  });
});
