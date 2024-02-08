// Module Imports
require("dotenv").config;
const express = require("express");
const path = require("path");
// const connection = require("./db/dbService");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARES
// Serve the static files
// app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(__dirname));
app.use(
	express.static(path.join(__dirname, "/node_modules/feather-icons/dist"))
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON bodies in the request object

// END POINTS

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/get-access", (req, res) => {
	res.render("get-access");
});

app.post("/signup", (req, res) => {
// 	const sql = `INSERT INTO users
//       (first_name, last_name, email, username, create_password, confirm_password)
//     VALUES (
// 		'${req.body.first_name}',
// 		'${req.body.last_name}',
// 		'${req.body.email}',
// 		'${req.body.username}',
// 		'${req.body.create_password}',
// 		'${req.body.confirm_password}'
// 		);`;

// 	connection.query(sql, (err) => {
// 		if (err) {
// 			throw err;
// 		}
// 		console.log("query successful");
// 	});

	res.redirect('/signup-success');
});

app.get('/signup-success', (req, res) => {
	res.render('signup-success')
})

// app.post("/signin", (req, res) => {
// 	res.send(req.body);
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}!`);
});
