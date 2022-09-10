const header = document.querySelector('.header');

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    header.classList.add('header--scroll')
  } else {
    header.classList.remove('header--scroll')
  }
});
