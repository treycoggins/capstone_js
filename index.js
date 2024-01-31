import { getDog, getDogs } from "./database.js";

import express from "express";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(
	express.static(path.join(__dirname, "node_modules/feather-icons/dist"))
);

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/dogs", async (req, res) => {
	const dogs = await getDogs();
	res.send(dogs);
});

app.get("/signin", (req, res) => {
	res.render("signin");
});

app.listen(3000, () => {
	console.log("Listening on port 3000!");
});
