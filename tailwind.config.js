/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./views/**/*.{html,ejs,js}", "./src/**/*.{html,css,js}"],
	theme: {
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
