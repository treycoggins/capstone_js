document.addEventListener("DOMContentLoaded", function () {
	const signInDropDown = document.getElementById("signin-dropdown-title");
	const signInForm = document.getElementById("signin-form");
  // const isShrunk = false;

	signInDropDown.addEventListener("click", () => {
		signInForm.classList.toggle("hidden");
		signUpForm.classList.add("hidden");
	});

	// const textElements = document.querySelectorAll(".shrink-text");
	// for (let i = 0; i < textElements.length; i++) {
	// 	textElements[i].addEventListener("click", (event) => {
	// 		let index = Array.from(textElements).indexOf(event.target);
	// 		if (!isShrunk) {
	// 			textElements[index].classList.toggle("shrink-text-active");
	// 			isShrunk = false;
	// 		} else {
	// 			textElements[index].classList.toggle("shrink-text");
	// 			isShrunk = true;
	// 		}
	// 	});
	// }

	/*///////////////////////*/
	/*/ SignIn Form //*/

	signInForm.addEventListener("submit", (event) => {
		// prevent form from submitting
		event.preventDefault();
		let isValid = true;

		// get form values
		const username = document.getElementById("username-verify");
		const password = document.getElementById("password-verify");

		const verifyFormValues = () => {
			// get form values
			const username = document.getElementById("first-name").value.trim();
			const password = document.getElementById("last-name").value.trim();

			// evaluate input fields
			if (username === "") {
				document.getElementById("fname-error").textContent =
					"Please enter your first name.";
				document.getElementById("first-name").classList.add("input-error");
				isValid = false;
			}
			if (password === "") {
				document.getElementById("lname-error").textContent =
					"Please enter your last name";
				document.getElementById("last-name").classList.add("input-error");
				isValid = false;
			}
			return isValid;
		};

		if (isValid) {
			document.getElementById("signin-form").submit();
			window.location.replace("/");
		}
	});
});

