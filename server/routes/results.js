const express = require("express");
const router = express.Router();

const { bringLineup, getResults, saveResults } = require("../handlers");

//gets searched players for search bar
router.get("/", async (req, res, next) => {
  bringLineup(req, res);
});

router.get("/all", async (req, res, next) => {
  getResults(req, res);
});

router.put("/", async (req, res, next) => {
  saveResults(req, res);
});
module.exports = router;
