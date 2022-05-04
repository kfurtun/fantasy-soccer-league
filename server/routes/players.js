const express = require("express");
const router = express.Router();

const { filterPlayers } = require("../handlers");

//gets searched players for search bar
router.get("/:letters", async (req, res, next) => {
  filterPlayers(req.params.letters, req, res);
});

// router.post("/", async (req, res, next) => {
//   signUp(req.body, req, res);
// });

module.exports = router;
