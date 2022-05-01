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
      <Text>CLUB SITES</Text>
      <Clubs>
        {teams.map((club) => {
          return (
            <a href={club.website} target="_blank" key={Math.random()}>
              <Img
                src={club.team.logo}
                alt={`${club.team.name} logo`}
                {...screenSizes}
              />
            </a>
          );
        })}
      </Clubs>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  gap: 1vw;
  margin-left: 10vw;
  margin-top: 1vw;
  align-items: center;
`;

const Text = styled.div`
  font-size: 1.1rem;
`;
const Clubs = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70vw;
`;
const Img = styled.img`
  width: 50px;
`;
