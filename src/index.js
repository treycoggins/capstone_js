
const navMenu = document.getElementById('hamburger');
const navPane = document.getElementById('nav');
const mainBody = document.getElementById('overlay');
const navMenuCloseBtn = document.getElementById('navMenu-close');

const navLinks = [...document.getElementsByClassName('nav-link-item')];

const navMenuOpen = () => {
  navPane.classList.remove('nav-close');
  navPane.classList.toggle('nav-open');
  mainBody.classList.toggle('overlay-open');
};

const navMenuClose = () => {
  navPane.classList.remove('nav-open');
  navPane.classList.add('nav-close');
  mainBody.classList.remove('overlay-open');
};

navMenu.addEventListener('click', navMenuOpen);
navMenuCloseBtn.addEventListener('click', navMenuClose)
navLinks.forEach(navLink => navLink.addEventListener('click', navMenuClose));

const findItems = () => {
  const item = document.getElementById('main-search-field').value;
  const htmlOutput = `<p>Search results for ${item}:</p>`;


  document.getElementById('search-output').innerHTML = htmlOutput;
}