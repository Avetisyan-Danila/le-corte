const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav');
const navMenuClose = document.querySelector('.nav__close');
const body = document.querySelector('.page-body');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  navMenu.classList.toggle('nav--active');
  body.classList.toggle('lock');
})

navMenuClose.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  navMenu.classList.toggle('nav--active');
  body.classList.toggle('lock');
})
