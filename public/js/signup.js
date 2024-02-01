const signupDropDown = document.getElementById("signup-dropdown");
const signinDropDown = document.getElementById("signin-dropdown");
const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");

signupDropDown.addEventListener("click", () => {
	signupForm.classList.toggle("show-form");
});
signinDropDown.addEventListener("click", () => {
	signinForm.classList.toggle("show-form");
});
