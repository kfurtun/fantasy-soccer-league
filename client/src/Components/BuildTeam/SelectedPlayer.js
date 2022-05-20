import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removePlayerFromPosition } from "../../globalState";
import { FaTrash } from "react-icons/fa";

export const SelectedPlayer = ({ player, position, index, pastWeek }) => {
  console.log(player);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      removePlayerFromPosition({ position: `${position.charAt(0)}${index}` })
    );
  };
  return (
    <Wrapper>
      <Img src={player.img} />
      <Text>{player.lastname}</Text>
      {!pastWeek && (
        <Button onClick={handleClick}>
          <FaTrash />
        </Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Img = styled.img`
  width: 5vw;
  height: 5vw;
  border-radius: 100%;
`;

const Text = styled.div`
  font-size: 1.3vw;
  width: 5vw;
  text-align: center;
`;

const Button = styled.button`
  position: absolute;
  right: -2vw;
  z-index: 10;
  background: none;
  border: none;
  cursor: pointer;
`;
