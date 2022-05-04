import React from "react";
import { SignUp } from "./SignUp";
import styled from "styled-components";
import {
  chooseTeam,
  changeCurrentPage,
  currentUserLoggedIn,
} from "../../globalState";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { proxy, apiUrl, headers, leagueId, season } from "../constants";
import { Spinner } from "../../GlobalStyles";

export const YourFavorites = React.memo(() => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const navigate = useNavigate();

  const [showSpinner, setShowSpinner] = React.useState(false);
  const [teams, setTeams] = React.useState([]);

  //if this route is not clicked just after sign up page, it is redirected to not-found page
  React.useEffect(() => {
    if (!state.registration.firstName) {
      navigate("/not-found");
    }
  }, []);

  //brings all the teams
  React.useEffect(() => {
    fetch(`${apiUrl}/teams?league=${leagueId}&season=${season}`, {
      headers,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeams(data.response);
      });
  }, []);

  //adds team selection to registration state
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

  //submits complete registration form
  const handleSubmitClick = () => {
    if (state.registration.team) {
      //checks if the team is selected
      setShowSpinner(true);
      fetch(`${proxy}/user`, body)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            dispatch(currentUserLoggedIn({ ...data.data })); //gets user info from DB and put in global state
            navigate("/");
          } else {
            alert(data.message);
            setShowSpinner(false);
          }
        });
    } else {
      alert("Please select your team");
    }
  };

  if (state.page !== 2) {
    dispatch(changeCurrentPage(2));
  }

  return (
    <>
      {state.registration.firstName && (
        <SignUp>
          <PageContainer>
            <Wrapper>
              {teams.map((club) => (
                <Container
                  onClick={() => handleClick(club.team.name)}
                  key={Math.random()}
                  team={club.team.name}
                  selectedTeam={state.registration.team}
                >
                  <Img src={club.team.logo} />
                  <Name>{club.team.name}</Name>
                </Container>
              ))}
            </Wrapper>
            <ButtonGroup>
              <Button
                name="submit"
                onClick={handleSubmitClick}
                showSpinner={showSpinner}
              >
                {!showSpinner ? "Submit" : <SignupSpinner></SignupSpinner>}
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
      )}
    </>
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
  height: calc(16vw - 0.35px);
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5vw;
  width: 20vw;
  background: ${(props) => (props.name ? "var(--primary-color)" : "gray")};
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  pointer-events: ${(props) => (props.showSpinner ? "none" : "auto")};
  text-align: center;
  &:hover {
    background: var(--primary-color-hover);
  }
`;

const SignupSpinner = styled(Spinner)``;
