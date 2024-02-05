const sectionSignup = document.getElementById("section-signup");
const sectionSignin = document.getElementById("section-signin");
const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");

sectionSignup.addEventListener("click", () => {
	signupForm.classList.toggle("show-form");
});
sectionSignup.addEventListener("click", () => {
	signinForm.classList.toggle("show-form");
});
