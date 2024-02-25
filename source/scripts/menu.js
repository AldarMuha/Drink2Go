const navElement = document.querySelector('.main-nav');
const buttonElement = document.querySelector('.main-nav__toggler');

navElement.classList.remove('main-nav--nojs');

buttonElement.onclick = () => {
  if(navElement.classList.contains('main-nav--opened')) {
    navElement.classList.add('main-nav--closed');
    navElement.classList.remove('main-nav--opened');
  } else {
    navElement.classList.add('main-nav--opened');
    navElement.classList.remove('main-nav--closed');
  }
};
