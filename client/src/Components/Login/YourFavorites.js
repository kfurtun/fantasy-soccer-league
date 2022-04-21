import React from "react";
import { SignUp } from "./SignUp";
import { clubs } from "../../assets";
import styled from "styled-components";
import { chooseTeam, changeCurrentPage } from "../../globalState";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { proxy } from "../constants";
export const YourFavorites = React.memo(() => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const navigate = useNavigate();

  const handleClick = (name) => {
    dispatch(chooseTeam({ value: name }));
  };

  const body = {
    method: "POST",
    body: JSON.stringify({
      ...state.registration,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };
  const handleSubmitClick = () => {
    fetch(`${proxy}/user`, body)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  if (state.page !== 2) {
    dispatch(changeCurrentPage(2));
  }

  return (
    <SignUp>
      <PageContainer>
        <Wrapper>
          {clubs.map((club) => (
            <Container
              onClick={() => handleClick(club.name)}
              key={Math.random()}
              team={club.name}
              selectedTeam={state.registration.team}
            >
              <Img src={club.logo} />
              <Name>{club.name}</Name>
            </Container>
          ))}
        </Wrapper>
        <ButtonGroup>
          <Button name="submit" onClick={handleSubmitClick}>
            Submit
          </Button>
          <Button
            onClick={() => {
              dispatch(changeCurrentPage(1));
              navigate("/sign-up");
            }}
          >
            Back to personal details
          </Button>
        </ButtonGroup>
      </PageContainer>
    </SignUp>
  );
});
const PageContainer = styled.div`
  height: 90vw;
`;
const Wrapper = styled.div`
  width: 60vw;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2vw;
  border-top: 1px solid black;
  border-left: 1px solid black;
`;
const Container = styled.button`
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-top: 0;
  border-left: 0;
  background: none;
  width: calc(15vw - 0.35px);
  height: calc(15vw - 0.35px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw;
  box-sizing: border-box;
  cursor: pointer;
  background: ${(props) => props.team === props.selectedTeam && "#f91f5d"};
  color: ${(props) => props.team === props.selectedTeam && "white"};
`;

const Img = styled.img`
  height: 10vw;
`;

const Name = styled.div`
  font-size: 1.5vw;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vw;
  gap: 2vw;
`;
const Button = styled.button`
  height: 2.5vw;
  width: 20vw;
  background: ${(props) => (props.name ? "var(--primary-color)" : "gray")};
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  &:hover {
    background: var(--primary-color-hover);
  }
`;
