const slides = Array.from(document.querySelectorAll('.slide'));
let currentIndex = 0;
const paginationList = document.querySelector('.slider-pagination');
const paginations = Array.from(document.querySelectorAll('.slider-pagination__item'));

const slider = document.querySelector('.slider');
const sliderColors = [
  'slider--flat-white',
  'slider--lavender-latte',
  'slider--esspresso',
];

sliderColors.forEach((element)=>{
  if(slider.classList.contains(element)) {
    slider.classList.remove(element);
    slider.classList.add(sliderColors[currentIndex]);
  }
});

const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');

prevButton.onclick = ()=>{
  slides.forEach((element, index)=>{
    if(element.classList.contains('slide--active')){
      currentIndex = index;
    }
  });
  if(currentIndex > 0) {
    slides[currentIndex].classList.remove('slide--active');
    slides[currentIndex - 1].classList.add('slide--active');
    paginations[currentIndex].classList.remove('slider-pagination__item--current');
    paginations[currentIndex - 1].classList.add('slider-pagination__item--current');

    slider.classList.remove(sliderColors[currentIndex]);
    slider.classList.add(sliderColors[currentIndex - 1]);
    currentIndex--;
  }
};

nextButton.onclick = ()=>{
  slides.forEach((element, index)=>{
    if(element.classList.contains('slide--active')){
      currentIndex = index;
    }
  });
  if(currentIndex < slides.length - 1) {
    slides[currentIndex].classList.remove('slide--active');
    slides[currentIndex + 1].classList.add('slide--active');
    paginations[currentIndex].classList.remove('slider-pagination__item--current');
    paginations[currentIndex + 1].classList.add('slider-pagination__item--current');

    slider.classList.remove(sliderColors[currentIndex]);
    slider.classList.add(sliderColors[currentIndex + 1]);
    currentIndex++;
  }
};

paginationList.onclick = (evt)=>{
  paginations.forEach((element, index)=>{
    if(element.classList.contains('slider-pagination__item--current')){
      currentIndex = index;
    }
  });
  if(evt.target.className === 'slider-pagination__button') {
    paginations[currentIndex].classList.remove('slider-pagination__item--current');
    slides[currentIndex].classList.remove('slide--active');
    slider.classList.remove(sliderColors[currentIndex]);
    evt.target.parentElement.classList.add('slider-pagination__item--current');
    paginations.forEach((element, index)=>{
      if(element.classList.contains('slider-pagination__item--current')){
        slides[index].classList.add('slide--active');
        slider.classList.add(sliderColors[index]);
      }
    });
  }
};
