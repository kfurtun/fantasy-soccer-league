import React from "react";
import { PageTemplate } from "../PageTemplate";
import { apiUrl, season, leagueId, headers } from "../constants";
import styled from "styled-components";
export const Teams = () => {
  const [teams, setTeams] = React.useState();
  React.useEffect(() => {
    fetch(`${apiUrl}/standings?league=${leagueId}&season=${season}`, {
      headers,
    })
      .then((res) => res.json())
      .then((data) => setTeams({ ...data.response[0].league }));
  }, []);
  const goalDiff = (team, type) => {
    return team[type].goals.for - team[type].goals.against;
  };
  return (
    <PageTemplate>
      <Wrapper>
        {teams && (
          <Table>
            <thead>
              <tr>
                <th colSpan={2} style={{ border: "none" }}></th>
                <th colSpan={7}>All</th>
                <th colSpan={7}>Home</th>
                <th colSpan={7}>Away</th>
              </tr>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>G</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>G</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>G</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>Form</th>
              </tr>
            </thead>
            <tbody>
              {teams.standings[0].map((team) => {
                // const resultAll = team.all.goals.for - team.all.goals.against;
                return (
                  <tr>
                    <td>{team.rank}</td>
                    <td>{team.team.name}</td>
                    <td>{team.all.played}</td>
                    <td>{team.all.win}</td>
                    <td>{team.all.draw}</td>
                    <td>{team.all.lose}</td>
                    <td>{team.all.goals.for}</td>
                    <td>{team.all.goals.against}</td>
                    <td>{goalDiff(team, "all")}</td>
                    <td>{team.home.played}</td>
                    <td>{team.home.win}</td>
                    <td>{team.home.draw}</td>
                    <td>{team.home.lose}</td>
                    <td>{team.home.goals.for}</td>
                    <td>{team.home.goals.against}</td>
                    <td>{goalDiff(team, "home")}</td>
                    <td>{team.away.played}</td>
                    <td>{team.away.win}</td>
                    <td>{team.away.draw}</td>
                    <td>{team.away.lose}</td>
                    <td>{team.away.goals.for}</td>
                    <td>{team.away.goals.against}</td>
                    <td>{goalDiff(team, "away")}</td>
                    <td style={{ border: "none" }}>{team.form}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Wrapper>
    </PageTemplate>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1vw;
  margin-bottom: 1vw;
`;

const Table = styled.table`
  border-collapse: collapse;
  background: var(--secondary-color);
  color: var(--primary-color);
  border-radius: var(--border-radius);
  th {
    padding: 0.5vw;
  }
  thead > tr:nth-child(1) > th:nth-child(2),
  thead > tr:nth-child(1) > th:nth-child(3),
  thead > tr:nth-child(1) > th:nth-child(4) {
    border-right: 1px solid var(--primary-color);
  }

  td {
    padding: 0.5vw;
    border-right: 1px solid var(--primary-color);
    text-align: center;
  }
  tbody > tr:nth-child(even) {
    background: var(--secondary-color-hover);
  }
`;
