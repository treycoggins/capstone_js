const dotenv = require("dotenv");
const mysql = require("mysql2");


dotenv.config();

const connection = mysql.createConnection({
	// host: process.env.MYSQL_HOST,
	// user: process.env.MYSQL_USER,
	// password: process.env.MYSQL_PASSWORD,
	// database: process.env.MYSQL_DATABASE,

	host: "127.0.0.1",
	user: "treycoggins",
	password: "Biodon4$",
	database: "capstone",
});

connection.connect((err) => {
	if (err) {
		console.log(err.stack);
		console.log(err.message);
		console.log(err.name);
		return;
	}
	console.log('db ' + connection.state);
});

module.exports = connection;
