const express = require("express");
const router = express.Router();

const { login } = require("../handlers");

/* GET signed in user. */
router.put("/", async (req, res, next) => {
  const { username, password } = req.body;
  login(password, username, req, res);
});

module.exports = router;
