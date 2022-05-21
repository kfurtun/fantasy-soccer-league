import React from "react";
import styled from "styled-components";
import { screenSizes } from "../../GlobalStyles";
import { headers } from "../constants";

export const Header = React.memo(({ clubs }) => {
  const [teams, setTeams] = React.useState([]);
  //brings all the teams
  React.useEffect(() => {
    fetch("https://v3.football.api-sports.io/teams?league=203&season=2021", {
      headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.response);
      });
  }, []);
  return (
    <Wrapper>
      <Clubs>
        {teams.map((club) => {
          return (
            <Img
              src={club.team.logo}
              alt={`${club.team.name} logo`}
              {...screenSizes}
              key={club.team.name}
            />
          );
        })}
      </Clubs>
    </Wrapper>
  );
});

const Wrapper = styled.header`
  display: flex;
  margin-top: 1vw;
  align-items: center;
`;

const Clubs = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1vw;
  margin-left: 8vw;
`;
const Img = styled.img`
  width: 3.5vw;
`;
