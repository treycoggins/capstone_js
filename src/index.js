
const navMenu = document.getElementById('hamburger');
const navPane = document.getElementById('nav');
const mainBody = document.getElementById('overlay');
const navMenuClose = document.getElementById('navMenu-close');


navMenu.addEventListener('click', () => {
  navPane.classList.remove('nav-close');
  navPane.classList.toggle('nav-open');
  mainBody.classList.toggle('overlay-open');
});

navMenuClose.addEventListener('click', () => {
  navPane.classList.remove('nav-open');
  navPane.classList.add('nav-close');
  mainBody.classList.remove('overlay-open');
})