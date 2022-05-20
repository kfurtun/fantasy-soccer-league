import React from "react";
import { useDispatch } from "react-redux";
import { addPlayerToPosition } from "../../globalState";
import styled from "styled-components";

export const Player = (props) => {
  const { firstname, lastname, team, position, teamId, _id, index } = props;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      addPlayerToPosition({
        position: `${position.charAt(0)}${index}`,
        player: props,
      })
    );
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
