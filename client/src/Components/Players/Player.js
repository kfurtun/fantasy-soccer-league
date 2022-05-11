import React from "react";
import styled from "styled-components";
import { PlayerStats } from "./PlayerStats";

export const Player = (props) => {
  const { firstname, lastname, team, position, teamId, _id } = props;

  const [showPlayerStats, setShowPlayerStats] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("zaa");
    setShowPlayerStats(true);
  };

  return (
    <>
      <Wrapper onClick={handleClick}>
        <div>
          <strong>
            {firstname} {lastname},{" "}
          </strong>
          {position},
        </div>
        <div>
          <i>{team}</i>
        </div>
      </Wrapper>
      {showPlayerStats && (
        <PlayerStats
          setShowPlayerStats={setShowPlayerStats}
          teamId={teamId}
          id={_id}
        />
      )}
    </>
  );
};

const Wrapper = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: block;
  color: white;
  width: 20vw;
  padding: 0.8vw;
  border-bottom: 1px solid white;
  &:hover {
    background: var(--primary-color-hover);
  }
`;
