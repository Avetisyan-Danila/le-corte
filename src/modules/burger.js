const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav');
const body = document.querySelector('.page-body');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  navMenu.classList.toggle('nav--active');
  body.classList.toggle('lock');
})
