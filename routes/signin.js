const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("List all users.")
});

router.get("/signup", (req, res, next) => {
  res.send("Add user.")
});


module.exports = router;