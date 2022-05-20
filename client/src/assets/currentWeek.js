export const currentWeek = (groupedArr) => {
  const games =
    Object.values(groupedArr).length > 0 &&
    Object.values(groupedArr).findLast((week) => {
      return Object.values(week).every(
        (game) => game.fixture.status.short === "FT"
      );
    });

  return parseInt(games[1].league.round.slice(17)) + 1;
};
