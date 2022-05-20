const express = require("express");
const router = express.Router();

const { submitTeam, bringLineup } = require("../handlers");

//gets searched players for search bar
router.post("/", async (req, res, next) => {
  submitTeam(req.body, req, res);
});

router.get("/saved-lineup", async (req, res, next) => {
  bringLineup(req, res);
});

module.exports = router;
