import React from "react";
import { apiUrl, leagueId, season, headers } from "../constants";
import styled from "styled-components";
import { Spinner } from "../../GlobalStyles";

export const PlayerStats = ({ teamId, id, setShowPlayerStats }) => {
  const [games, setGames] = React.useState([]);
  const [playerStats, setPlayerStats] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  let week = 0;
  const currentWeek = 36;

  const handleScroll = (event) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;
    const scroll = scrollHeight - scrollTop - clientHeight;
    console.log(scroll);

    if (scroll <= 1 && playerStats.length < currentWeek) {
      setIsLoading(true);
      for (let i = 19; i < currentWeek; i++) {
        fetch(
          `${apiUrl}/fixtures/players?fixture=${
            games[i - 1].fixture.id
          }&team=${teamId}`,
          { headers }
        )
          .then((res) => res.json())
          .then((data) => {
            setPlayerStats((prev) => [
              ...prev,
              data.response[0].players.filter(
                (player) => player.player.id === id
              ),
            ]);
            setIsLoading(false);
          });
      }
    }
  };

  React.useEffect(() => {
    fetch(
      `${apiUrl}/fixtures?season=${season}&league=${leagueId}&team=${teamId}`,
      { headers }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.response);
        setGames(data.response);
      });
  }, []);

  React.useEffect(() => {
    if (games.length === 38 && playerStats.length < 19) {
      for (let i = 0; i < 19; i++) {
        fetch(
          `${apiUrl}/fixtures/players?fixture=${games[i].fixture.id}&team=${teamId}`,
          { headers }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setPlayerStats((prev) => [
              ...prev,
              data.response[0].players.filter(
                (player) => player.player.id === id
              ),
            ]);
            setIsLoading(false);
          });
      }
    }
  }, [games]);
  //   console.log(isLoading);
  //   games.length > 0 && console.log(games);
  playerStats.length > 0 && console.log(playerStats);
  //   console.log(id);
  return (
    <div>
      <Background onClick={() => setShowPlayerStats(false)}></Background>
      <Wrapper>
        <table onScroll={handleScroll}>
          <thead>
            <tr>
              <th>Week</th>
              <th>Vs.</th>
              <th>Mins.</th>
              <th>Pos.</th>
              <th>Goals</th>
              <th>Assists</th>
              {/* <th>Own goals</th> */}
              <th>Yellow C.</th>
              <th>Red C.</th>
              <th>Goal Saves</th>
              <th>Penalty Taken</th>
              <th>Penalty Missed</th>
              <th>Penalty Led</th>
              <th>Penalty Saved</th>
              <th>Captain</th>
            </tr>
          </thead>
          {playerStats.length > 0 && games.length > 0 && (
            <tbody>
              {playerStats.map((stat, index) => {
                week++;
                const statistics =
                  stat.length > 0 ? stat[0].statistics[0] : undefined;

                return (
                  <tr>
                    <td>{week}</td>
                    <td>
                      {
                        Object.values(games[index].teams).filter(
                          (opponent) => opponent.id !== teamId
                        )[0].name
                      }
                    </td>
                    <td>{statistics?.games.minutes || 0}</td>
                    <td>{statistics?.games.position || "-"}</td>
                    <td>{statistics?.goals.total}</td>
                    <td>{statistics?.goals.assists}</td>
                    <td>{statistics?.cards.yellow}</td>
                    <td>{statistics?.cards.red}</td>
                    <td>{statistics?.goals.saves}</td>
                    <td>{statistics?.penalty.won}</td>
                    <td>{statistics?.penalty.missed}</td>
                    <td>{statistics?.penalty.commited}</td>
                    <td>{statistics?.penalty.saved}</td>
                    <td>{statistics?.games.captain && "Yes"}</td>
                  </tr>
                );
              })}
            </tbody>
          )}
          {isLoading && (
            <SpinnerDiv>
              <LoadingSpinner></LoadingSpinner>
            </SpinnerDiv>
          )}
        </table>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  table {
    position: absolute;
    display: block;
    left: 15vw;
    top: 8vw;
    width: 70vw;
    max-height: 30vw;
    background: var(--secondary-color);
    color: var(--primary-color);
    z-index: 5;
    font-size: 1vw;
    overflow: auto;
    overflow-x: hidden;
  }

  th {
    top: 0;
    position: sticky;
    background: var(--secondary-color);
  }

  td,
  th {
    border: 1px solid #ddd;
    padding: 0.5vw;
    text-align: center;
  }
  table::-webkit-scrollbar {
    width: 0.5vw;
  }

  table::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 10px;
  }

  table::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color-hover);
  }
`;

const Background = styled.div`
  background: white;
  opacity: 0;
  width: 100%;
  height: 100vh;
  z-index: 4;
  position: absolute;
  left: 0;
  top: 0;
`;

const LoadingSpinner = styled(Spinner)`
  border: 1vw solid #f3f3f3;
  border-top: 1vw solid var(--primary-color);
  border-left: 1vw solid var(--primary-color);
  border-bottom: 1vw solid var(--primary-color);
  width: 7vw;
  height: 7vw;
`;

const SpinnerDiv = styled.div`
  width: 70vw;
  display: flex;
  justify-content: center;
  padding: 0.5vw;
`;
