import styled from "styled-components";
import { SearchBarByPosition, SelectedPlayer } from "../Components/BuildTeam";

export const position = (count, playerPosition, state, pastWeek) => {
  const positionArr = [];

  for (let i = 0; i < parseInt(count); i++) {
    positionArr.push(
      <div>
        {state[`${playerPosition.charAt(0)}${i}`] ? (
          <SelectedPlayer
            player={state[`${playerPosition.charAt(0)}${i}`]}
            position={playerPosition}
            index={i}
            pastWeek={pastWeek}
          />
        ) : (
          <SearchBarByPosition key={i} position={playerPosition} index={i} />
        )}
      </div>
    );
  }
  return positionArr;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
