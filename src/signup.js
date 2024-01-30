const createSection = document.getElementById("section-create");
const signinSection = document.getElementById("section-signin");
const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");


createSection.addEventListener("click", () => {
	signupForm.classList.toggle('show-form');
});
signinSection.addEventListener("click", () => {
	signinForm.classList.toggle('show-form');
});
