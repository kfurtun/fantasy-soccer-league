import React from "react";
import { PageTemplate } from "../PageTemplate";
import styled from "styled-components";
import { currentWeek } from "../../assets/currentWeek";
import { apiUrl, leagueId, season, headers } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentWeek } from "../../globalState/currentWeekSlice";

export const HomePage = () => {
  const [groupedArr, setGroupedArr] = React.useState({});
  const [dataResult, setDataResult] = React.useState([]);
  const dispatch = useDispatch();
  const playingWeek = useSelector((state) => state.currentWeek);
  console.log(playingWeek);
  React.useEffect(() => {
    fetch(`${apiUrl}/fixtures?league=${leagueId}&season=${season}`, {
      headers,
    })
      .then((res) => res.json())
      .then((data) => setDataResult(data.response));
  }, []);

  React.useEffect(() => {
    let week = 1;
    let gameCount = 0;
    dataResult.length > 0 &&
      dataResult.forEach((game, index) => {
        setGroupedArr((prev) => {
          gameCount += 1;
          if (index % 10 === 0 && index !== 0) {
            week += 1;
            gameCount = 1;
          }
          return { ...prev, [week]: { ...prev[week], [gameCount]: game } };
        });
      });
  }, [dataResult]);
  React.useEffect(() => {
    Object.values(groupedArr).length === 38 &&
      dispatch(setCurrentWeek(currentWeek(groupedArr)));
  }, [groupedArr, dispatch]);
  return (
    <PageTemplate>
      <Breaker>
        <Line></Line>
        <div>Or sign up </div>
        <Line></Line>
      </Breaker>
    </PageTemplate>
  );
};

const Wrapper = styled.div``;

const Breaker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2vw;
  gap: 1vw;
  color: #bfbfbf;
`;
const Line = styled.div`
  border-top: 1px solid #bfbfbf;
  width: 40vw;
`;
