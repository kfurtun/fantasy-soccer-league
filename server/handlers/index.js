const login = require("./userHandlers/login");
const signUp = require("./userHandlers/signUp");
const filterPlayers = require("./playersHandler/filterPlayers");
const submitTeam = require("./teamHandler/submitTeam");
const bringLineup = require("./teamHandler/bringLineup");
const getResults = require("./resultsHandler/getResults");
const saveResults = require("./resultsHandler/saveResults");

module.exports = {
  login,
  signUp,
  filterPlayers,
  submitTeam,
  bringLineup,
  getResults,
  saveResults,
};
