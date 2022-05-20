import React from "react";

import { PageTemplate } from "../PageTemplate";
import { apiUrl, leagueId, season, headers } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ShowWeeks } from "../BuildTeam";
import { FixtureTable } from "./FixtureTable";

export const Fixtures = () => {
  const week = useSelector((state) => state.currentWeek);
  const [selectedWeek, setSelectedWeek] = React.useState(week);
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `${apiUrl}/fixtures?season=${season}&league=${leagueId}&round=Regular Season - ${selectedWeek}`,
      { headers }
    )
      .then((res) => res.json())
      .then((data) => setGames([...data.response]));
  }, [selectedWeek]);

  return (
    <PageTemplate>
      <Wrapper>
        <ShowWeeks
          selectedWeek={selectedWeek}
          setSelectedWeek={setSelectedWeek}
          week={week}
        />
        <FixtureTable games={games} />
      </Wrapper>
    </PageTemplate>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vw;
  margin-top: 2vw;
`;
