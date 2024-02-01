const dotenv = require("dotenv")
const cors = require('cors');
const express = require("express");
const path = require("path");
const mysql = require("mysql2");


dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Serve the static files
app.use(express.static(path.join(__dirname, "public")));
app.use(
	express.static(path.join(__dirname, "node_modules/feather-icons/dist"))
	);
	
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON bodies in the request object


app.get("/", (req, res) => {
	res.render("home");
});

app.get("/get_access", (req, res) => {
	res.render("get_access");
});

// CREATE
app.post('/signup', (req, res) => {

})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}!"`);
});
