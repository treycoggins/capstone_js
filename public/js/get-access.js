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

	const textElements = document.querySelectorAll(".shrink-text");
	for (let i = 0; i < textElements.length; i++) {
		textElements[i].addEventListener("click", (event) => {
			let index = Array.from(textElements).indexOf(event.target);
			if (!isShrunk) {
				textElements[index].classList.toggle("shrink-text-active");
				isShrunk = false;
			} else {
				textElements[index].classList.toggle("shrink-text");
				isShrunk = true;
			}
		});
	}

	/** FORM VALIDATION */
	/**SIGN-UP Form */

	const highlightInputBorder = () => {
		const inputErrors = document.getElementsByClassName("input-error");
		inputErrors.forEach((error) => {
			if (error.textContent === "") {
				error.style.borderColor = "red";
			}
		});
	};
	signUpForm.addEventListener("submit", (event) => {
		// prevent form from submitting
		event.preventDefault();
		// reset error messages
		document.getElementById("fname-error").textContent = "";
		document.getElementById("lname-error").textContent = "";
		document.getElementById("email-error").textContent = "";
		document.getElementById("username-error").textContent = "";
		document.getElementById("password-error").textContent = "";
		document.getElementById("confirmed-password-error").textContent = "";

		// get form values
		const fname = document.getElementById("first-name").value.trim();
		const lname = document.getElementById("last-name").value.trim();
		const email = document.getElementById("email").value.trim();
		const username = document.getElementById("username").value.trim();
		const password = document.getElementById("password").value.trim();
		const confirmedPassword = document
			.getElementById("confirmed-password")
			.value.trim();

		let isValid = true;
		if (fname === "") {
			document.getElementById("fname-error").textContent =
				"Please enter your first name.";
			highlightInputBorder();
			isValue = false;
		}
		if (lname === "") {
			document.getElementById("lname-error").textContent =
				"Please enter your last name.";
			highlightInputBorder();
			isValue = false;
		}
		if (email === "") {
			document.getElementById("email-error").textContent =
				"Please enter your email address.";
			highlightInputBorder();
			isValue = false;
		}
		if (username === "") {
			document.getElementById("username-error").textContent =
				"Please enter a username.";
			highlightInputBorder();

			isValue = false;
		}
		if (password === "") {
			document.getElementById("password-error").textContent =
				"Please enter a password.";
			highlightInputBorder();
			isValue = false;
		}
		if (confirmedPassword === "") {
			document.getElementById("confirmed-password-error").textContent =
				"Please confirm your password.";
			highlightInputBorder();
			if (password !== confirmedPassword) {
				document.getElementById("confirmed-password-error").textContent =
					"Your passwords much match. Please retype both.";
			}
			isValue = false;
		}

		if (isValid) {
			alert("The form was submitted");
		}
	});
});
