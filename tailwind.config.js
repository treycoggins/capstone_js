/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./views/**/*.{html,ejs,js}", "./src/**/*.{html,css,js}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
			display: ["Orbitron"],
		},
		extend: {
			colors: {
				secondary: {
					light: "#c4a15d",
					dark: "#af8c4a",
				},
				primary: {
					light: "#38785d",
					DEFAULT: "#175442",
					dark: "#063427",
				},
			},
		},
	},
	plugins: [],
};
