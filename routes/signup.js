const express = require('express');
const router = express.Router();



router.post("/signup", (req, res) => {
	console.log(req.body);

	const sql = `INSERT INTO users VALUES (
		${req.body.first_name}, 
		${req.body.last_name}, 
		${req.body.email}, 
		${req.body.username}, 
		${req.body.create_password}, 
		${req.body.confirm_password}
		)`;

	pool.query(sql, function (err) {
		if (err) {
			console.log("something went wrong :(");
			return;
		}
		console.log("Data inserted successfully!");
	});
});

module.exports = router;