const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/feather-icons/dist')));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/signin", (req, res) => {
	res.render("signin");
});

app.listen(3000, () => {
	console.log("Listening on port 3000!");
});
