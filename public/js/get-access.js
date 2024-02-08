document.addEventListener("DOMContentLoaded", function () {
	const signUpDropDown = document.getElementById("signup-dropdown-title");
	const signInDropDown = document.getElementById("signin-dropdown-title");
	const signUpForm = document.getElementById("signup-form");
	const signInForm = document.getElementById("signin-form");
	let isShrunk = false;

	signUpDropDown.addEventListener("click", () => {
		signUpForm.classList.toggle("hidden");
		signInForm.classList.add("hidden");
	});
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

	/** FORM VALIDATION */
	/**SIGN-UP Form */

	signUpForm.addEventListener("submit", (event) => {
		// prevent form from submitting
		event.preventDefault();
		let isValid = true;

		const verifyFormValues = () => {
			// get form values
			const fname = document.getElementById("first-name").value.trim();
			const lname = document.getElementById("last-name").value.trim();
			const email = document.getElementById("email").value.trim();
			const username = document.getElementById("username").value.trim();
			const password = document.getElementById("password").value.trim();
			const confirmedPassword = document
				.getElementById("confirmed-password")
				.value.trim();

			// evaluate input fields
			if (fname === "") {
				document.getElementById("fname-error").textContent =
					"Please enter your first name.";
				document.getElementById("first-name").classList.add("input-error");
				isValid = false;
			}
			if (lname === "") {
				document.getElementById("lname-error").textContent =
					"Please enter your last name";
				document.getElementById("last-name").classList.add("input-error");
				isValid = false;
			}
			if (email === "") {
				document.getElementById("email-error").textContent =
					"Please enter your email address";
				document.getElementById("email").classList.add("input-error");
				isValid = false;
			}
			if (username === "") {
				document.getElementById("username-error").textContent =
					"Please enter a username";
				document.getElementById("username").classList.add("input-error");
				isValid = false;
			}
			if (password === "") {
				document.getElementById("password-error").textContent =
					"Please enter a password";
				document.getElementById("password").classList.add("input-error");
				isValid = false;
			}
			if (confirmedPassword === "") {
				document.getElementById("confirmed-password-error").textContent =
					"Please confirm your password";
				document
					.getElementById("confirmed-password")
					.classList.add("input-error");
			}
			if (password !== confirmedPassword) {
				document.getElementById("confirmed-password-error").textContent =
					"Your passwords do not match. Please retype both";
				document.getElementById("password").classList.add("input-error");
				document
					.getElementById("confirmed-password")
					.classList.add("input-error");
				isValid = false;
			}
			return isValid;
		};

		const email = document.getElementById("email").value;

		const verifyEmail = (email) => {
			const regex = /\S+@\S+\.\S+/;
			console.log(email);
			document.getElementById("email-error").textContent =
				"Please correct your email address";
			document.getElementById("email").classList.add("input-error");
			return regex.test(email);
		};

		if (verifyEmail(email) && verifyFormValues()) {
			isValid = true;
		} else {
			isValid = false;
		}

		if (isValid) {
			document.getElementById("signup-form").submit();
			window.location.replace("/signup-success");
		}
	});
});
