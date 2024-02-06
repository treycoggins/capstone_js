const navMenu = document.getElementById("hamburger");
const navPane = document.getElementById("nav");
const mainBody = document.getElementById("overlay");
const navMenuCloseBtn = document.getElementById("navMenu-close");

const navLinks = [...document.getElementsByClassName("nav-link-item")];

const navMenuOpen = () => {
	navPane.classList.remove("side-nav-close");
	navPane.classList.toggle("side-nav-open");
	mainBody.classList.toggle("overlay-open");
	document.body.style.overflow = "hidden";
};

const navMenuClose = () => {
	navPane.classList.remove("side-nav-open");
	navPane.classList.add("side-nav-close");
	mainBody.classList.remove("overlay-open");
	document.body.style.overflow = "visible";
};

navMenu.addEventListener("click", navMenuOpen);
navMenuCloseBtn.addEventListener("click", navMenuClose);
navLinks.forEach((navLink) => navLink.addEventListener("click", navMenuClose));

const findItems = () => {
	const item = document.getElementById("header-search-field").value;
	const htmlOutput = `<p>Search results for ${item}:</p>`;

	document.getElementById("search-output").innerHTML = htmlOutput;
};
