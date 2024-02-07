const signUpDropDown = document.getElementById("signup-dropdown");
const signInDropDown = document.getElementById("signin-dropdown");
const signUpForm = document.getElementById("signup-form");
const signInForm = document.getElementById("signin-form");

signUpDropDown.addEventListener("click", () => {
	signUpForm.classList.toggle("show-form");
	signInForm.classList.remove("show-form");
});
signInDropDown.addEventListener("click", () => {
	signInForm.classList.toggle("show-form");
	signUpForm.classList.remove("show-form");
});
