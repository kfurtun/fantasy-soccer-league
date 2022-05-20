import React from "react";
import styled from "styled-components";
import field from "../../assets/images/field.png";
import { position } from "../../assets/position";
import { formationOptions } from "../../assets/formationOptions";
import { useDispatch, useSelector } from "react-redux";
import { proxy } from "../constants";
import { bringSubmittedLineup, clearLineup } from "../../globalState";
import { currentWeek } from "../../assets/currentWeek";

export const Formation = React.memo(({ selectedWeek }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser);
  const week = useSelector((state) => state.currentWeek);
  const [selectedFormation, setSelectedFormation] = React.useState(
    formationOptions[0]
  );
  const [pastWeek, setPastWeek] = React.useState(false);
  React.useEffect(() => {
    fetch(`${proxy}/team/saved-lineup?email=${user.email}&week=${selectedWeek}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(bringSubmittedLineup(data.data.lineUp));
        } else {
          dispatch(clearLineup());
        }
      });

    if (selectedWeek < week) {
      setPastWeek(true);
    } else {
      setPastWeek(false);
    }
  }, [selectedWeek, pastWeek]);
  const state = useSelector((state) => state.lineUp);

  const handleSelect = (e) => {
    setSelectedFormation(e.target.value.split("-"));
  };
  return (
    <Container>
      <Select onChange={handleSelect} value={selectedFormation.join("-")}>
        {formationOptions.map((formation) => (
          <option key={formation.join("-")}>{formation.join("-")}</option>
        ))}
      </Select>
      <Wrapper image={field}>
        <Position>
          <Title>Goalkeeper</Title>
          <Search>{position(1, "Goalkeeper", state, pastWeek)}</Search>
        </Position>
        <Position>
          <Title>Defense</Title>
          <Search>
            {position(selectedFormation[0], "Defender", state, pastWeek)}
          </Search>
        </Position>
        <Position>
          <Title>Midfield</Title>
          <Search>
            {position(selectedFormation[1], "Midfielder", state, pastWeek)}
          </Search>
        </Position>
        <Position>
          <Title>Forward</Title>
          <Search>
            {position(selectedFormation[2], "Attacker", state, pastWeek)}
          </Search>
        </Position>
      </Wrapper>
    </Container>
  );
});

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5vw;
`;

const Wrapper = styled.div`
  width: 60vw;
  max-height: 40vw;
  margin: auto;
  margin-top: 2vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  padding: 2vw 0.5vw;
  background: ${(props) => `url(${props.image})`} no-repeat;
  background-size: cover;
`;

const Position = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;
`;

const Search = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60vw;
`;

const Select = styled.select`
  width: 8vw;
  height: 2vw;
  margin-top: 2vw;
  color: white;
  text-align: center;
  overflow: auto;
  overflow-x: hidden;
  background: var(--primary-color);
  border-radius: var(--border-radius);
  &::-webkit-scrollbar {
    width: 0.5vw;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color-hover);
  }
`;

const Title = styled.div`
  color: var(--primary-color);
`;
