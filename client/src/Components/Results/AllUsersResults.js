import React from "react";
import { proxy } from "../constants";
import { apiUrl, leagueId, season, headers } from "../constants";
import { individualPoints } from "../../assets";
export const AllUsersResults = ({
  points,
  setPoints,
  allUsers,
  setAllUsers,
  games,
  selectedWeek,
  setGameIds,
  gameIds,
  setGames,
}) => {
  console.log(selectedWeek);
  React.useEffect(() => {
    fetch(`${proxy}/results/all?week=${selectedWeek}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setAllUsers(data.data);
        if (data.data[0].point === null) {
          fetch(
            `${apiUrl}/fixtures?season=${season}&league=${leagueId}&round=Regular Season - ${selectedWeek}`,
            { headers }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              data.response.map((game) =>
                setGameIds((prev) => [
                  ...prev,
                  {
                    id: game.fixture.id,
                    teams: game.teams,
                    goals: game.goals,
                  },
                ])
              );
            });
        }
      });
  }, [selectedWeek, setAllUsers, setGameIds]);

  React.useEffect(() => {
    gameIds.length > 0 &&
      gameIds.map((game) =>
        fetch(`${apiUrl}/fixtures/players?fixture=${game.id}`, {
          headers,
        })
          .then((res) => res.json())
          .then((data) => setGames((prev) => [...prev, data.response]))
      );
  }, [selectedWeek, gameIds, setGames]);

  React.useEffect(() => {
    if (games.length === 10) {
      allUsers.forEach((user) => {
        let sum = 0;
        Object.values(user.lineUp).forEach((player) =>
          games.forEach((game) => {
            game.forEach((team) => {
              if (team.team.id === player.teamId) {
                team.players.forEach((playerStat) => {
                  if (playerStat.player.id === player._id) {
                    sum += individualPoints(
                      playerStat.statistics[0]?.games.minutes,
                      playerStat.statistics[0]?.games.position,
                      playerStat.statistics[0]?.goals,
                      playerStat.statistics[0]?.cards,
                      playerStat.statistics[0]?.penalty,
                      playerStat.statistics[0]?.games.captain
                    );
                    setPoints((prev) => {
                      return {
                        ...prev,
                        [user.email]: sum,
                      };
                    });
                  }
                });
              }
            });
          })
        );
      });
    }
  }, [gameIds, selectedWeek, games, allUsers]);

  React.useEffect(() => {
    if (Object.values(points).length === allUsers.length) {
      const body = {
        method: "PUT",
        body: JSON.stringify({ ...points }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };

      fetch(`${proxy}/results?week=${selectedWeek}`, body)
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [points]);

  return <div></div>;
};
