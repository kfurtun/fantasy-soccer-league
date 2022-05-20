import React from "react";
import { PageTemplate } from "../PageTemplate";
import { Formation } from "./Formation";
import { ShowWeeks } from "./ShowWeeks";
import { SubmitTeam } from "./SubmitTeam";
import { useSelector } from "react-redux";
import styled from "styled-components";
export const BuildTeam = () => {
  const week = useSelector((state) => state.currentWeek);
  const [selectedWeek, setSelectedWeek] = React.useState(week);

  return (
    <PageTemplate>
      <ShowWeekCont>
        <ShowWeeks
          selectedWeek={selectedWeek}
          setSelectedWeek={setSelectedWeek}
        />
      </ShowWeekCont>

      <Formation selectedWeek={selectedWeek} />
      {selectedWeek >= week && <SubmitTeam />}
    </PageTemplate>
  );
};

const ShowWeekCont = styled.div`
  width: 5vw;
  text-align: center;
  margin: auto;
  margin-top: 2vw;
`;
