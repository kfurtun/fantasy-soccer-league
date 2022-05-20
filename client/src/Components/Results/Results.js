import React from "react";
import { PageTemplate } from "../PageTemplate";
import { ShowWeeks } from "../BuildTeam";
import { useSelector } from "react-redux";
import { AllUsersResults } from "./AllUsersResults";
import styled from "styled-components";

export const Results = () => {
  const week = useSelector((state) => state.currentWeek);
  const user = useSelector((state) => state.currentUser);
  const [selectedWeek, setSelectedWeek] = React.useState(week);
  const [gameIds, setGameIds] = React.useState([]);
  const [games, setGames] = React.useState([]);
  const [allUsers, setAllUsers] = React.useState([]);
  const [points, setPoints] = React.useState({});

  console.log(points);
  //   console.log(games.length);

  return (
    <PageTemplate>
      <Wrapper>
        <ShowWeeks
          selectedWeek={selectedWeek}
          setSelectedWeek={setSelectedWeek}
          setGameIds={setGameIds}
          shouldResetIds={true}
          setGames={setGames}
          setPoints={setPoints}
          setAllUsers={setAllUsers}
        />
        <PointsDiv>
          <MyPoints>
            <div>My Points:</div>
            {allUsers.map(
              (eachUser) =>
                eachUser.email === user.email && (
                  <div key={eachUser.email}>{eachUser.point}</div>
                )
            )}
          </MyPoints>
          <OtherUsers>
            <div>Top 10</div>
            {allUsers
              .sort((a, b) => b.point - a.point)
              .map((eachUser, index) => (
                <div key={eachUser.email}>
                  {index + 1}. {eachUser.email.split("@").shift()}:{" "}
                  {eachUser.point}
                </div>
              ))}
          </OtherUsers>
        </PointsDiv>

        <AllUsersResults
          selectedWeek={selectedWeek}
          games={games}
          setGameIds={setGameIds}
          gameIds={gameIds}
          setGames={setGames}
          allUsers={allUsers}
          setAllUsers={setAllUsers}
          setPoints={setPoints}
          points={points}
        />
      </Wrapper>
    </PageTemplate>
  );
};

const Wrapper = styled.div`
  width: 40vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vw;
`;

const MyPoints = styled.div`
  background: var(--primary-color);
  border-radius: var(--border-radius);
  width: 10vw;
  color: white;
  padding: 1vw;
  text-align: center;
`;

const OtherUsers = styled(MyPoints)`
  width: 20vw;
`;

const PointsDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10vw;
  margin-top: 6vw;
`;
