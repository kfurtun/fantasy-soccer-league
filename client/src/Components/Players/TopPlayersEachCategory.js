import React from "react";
import styled from "styled-components";

export const TopPlayersEachCategory = React.memo((props) => {
  const { category, players, keyValue, subKeyValue, subKeyValue2 } = props;

  const title =
    (category === "topscorers" && "Scores") ||
    (category === "topassists" && "Assists") ||
    "Cards";
  const header =
    (category === "topscorers" && "Top Scorers") ||
    (category === "topassists" && "Top Assists") ||
    (category === "topyellowcards" && "Top Yellow Cards") ||
    "Top Red Cards";

  return (
    <>
      <strong>
        <u>{header}</u>
      </strong>
      <Table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Team</th>
            <th>Position</th>
            <th>{title}</th>
          </tr>
        </thead>
        <tbody>
          {players &&
            players.slice(0, 5).map((player) => (
              <tr key={player.player.name}>
                <td>
                  <div>{player.player.name}</div>
                  <Img src={player.player.photo} />
                </td>
                <td>
                  <Logo
                    src={
                      player.statistics[player.statistics.length - 1].team.logo
                    }
                  />
                </td>
                <td>
                  {
                    player.statistics[player.statistics.length - 1].games
                      .position
                  }
                </td>
                <td>
                  {!subKeyValue2
                    ? player.statistics[0][keyValue][subKeyValue]
                    : player.statistics[0][keyValue][subKeyValue] +
                      player.statistics[0][keyValue][subKeyValue2]}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
});

const Table = styled.table`
  width: 30vw;
  border-collapse: collapse;
  th,
  td {
    border-bottom: 1px solid black;
    padding: 0.5vw;
    vertical-align: middle;
    text-align: center;
  }
`;

const Img = styled.img`
  width: 4vw;
  height: 4vw;
`;

const Logo = styled.img`
  width: 3vw;
  height: 3vw;
`;
