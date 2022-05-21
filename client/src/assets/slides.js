import fixtures from "./images/fixtures.png";
import players from "./images/players.png";
import teams from "./images/teams.png";
import build from "./images/build.png";
import results from "./images/results.png";

export const slides = [
  {
    page: 0,
    name: "Fixtures",
    img: fixtures,
    text: "Check weekly schedule to help you decide your squad!",
  },
  {
    page: 1,
    name: "Players",
    img: players,
    text: "Check players' statistics to decide which one to pick!",
  },
  {
    page: 2,
    name: "Teams",
    img: teams,
    text: "See teams' standing to make sure your players are winning!",
  },
  {
    page: 3,
    name: "Squad",
    img: build,
    text: "After analyzing, finally decide on your weekly squad!",
  },
  {
    page: 4,
    name: "Results",
    img: results,
    text: "After all games have been played, see your weekly result!",
  },
];
