const express = require("express");
const router = express.Router();

const { login, signUp } = require("../handlers");

/* GET signed in user. */
router.put("/", async (req, res, next) => {
  const { email, password } = req.body;
  login(password, email, req, res);
});

router.post("/", async (req, res, next) => {
  signUp(req.body, req, res);
});

module.exports = router;
