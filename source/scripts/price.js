
const resetButton = document.querySelector('.filter__button--reset');
const sliderElement = document.querySelector('#slider');
const minValue = document.querySelector('.filter-group__price--min');
const maxValue = document.querySelector('.filter-group__price--max');

noUiSlider.cssClasses.target += ' target';
noUiSlider.cssClasses.connect += ' connect';
noUiSlider.cssClasses.handle += ' handle';
noUiSlider.cssClasses.handleLower += ' handle-lower';
noUiSlider.cssClasses.handleUpper += ' handle-upper';
noUiSlider.cssClasses.horizontal += ' horizontal';

noUiSlider.create(sliderElement, {
  start: [0, 123],
  connect: true,
  step: 1,
  range: {
    min: 0,
    max: 150,
  },
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', (values)=>{
  minValue.value = values[0];
  maxValue.value = values[1];
});

minValue.addEventListener('change', function(){
  sliderElement.noUiSlider.set(this.value);
});

maxValue.addEventListener('change', function(){
  sliderElement.noUiSlider.set(this.value);
});

resetButton.addEventListener('click', ()=> {
  sliderElement.noUiSlider.updateOptions({
    start: [0, 123],
    step: 1,
    range: {
      min: 0,
      max: 150,
    },
  });
});
