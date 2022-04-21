import React from "react";
import styled from "styled-components";
import { countryList, formElements, inputStatus, genders } from "../../assets";
import {
  addInputValues,
  addCheckbox,
  changeCurrentPage,
} from "../../globalState";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignUp } from "./SignUp";

export const PersonalDetails = () => {
  const navigate = useNavigate();
  const infoState = useSelector((state) => state.registration);
  const dispatch = useDispatch();

  const [checked, setChecked] = React.useState(
    infoState.gender ? { [infoState.gender]: true } : false
  );
  const [validate, setValidate] = React.useState(false);

  const handleChecked = (event) => {
    setChecked({ [event.target.name]: true });
    dispatch(addCheckbox({ value: event.target.name }));
  };

  const handleChange = (event) => {
    dispatch(
      addInputValues({ name: event.target.name, value: event.target.value })
    );
  };

  const handleClick = () => {
    setValidate(true);
    const clonedState = { ...infoState };
    delete clonedState.team;
    if (Object.values(clonedState).some((input) => !input)) {
      alert("Please fix incorrect area/s");
    } else if (!infoState.email.includes("@")) {
      alert("Please enter valid email address!");
    } else {
      dispatch(changeCurrentPage(2));
      navigate("/sign-up/your-favorites");
    }
  };

  return (
    <SignUp>
      <Container>
        <Wrapper>
          <Header>Your Personal Details</Header>
          {formElements.map((el) => (
            <Section key={el.name}>
              <Labels>
                <Label>{el.label}</Label>
                <ReqLabel>* Required</ReqLabel>
              </Labels>
              <Input
                value={infoState[el.name]}
                name={el.name}
                onChange={handleChange}
                type={el.type}
              />
              {validate && (
                <Icon>
                  {infoState[el.name] === "" ||
                  (el.name === "email" && !infoState.email.includes("@"))
                    ? inputStatus.warning.icon
                    : inputStatus.success.icon}
                </Icon>
              )}
            </Section>
          ))}
          <Section>
            <Labels>
              <Label>Gender </Label>
              <ReqLabel>* Required</ReqLabel>
            </Labels>
            <Genders>
              {genders.map((gender) => (
                <Gender key={gender.name}>
                  <Checkbox
                    type="checkbox"
                    value={gender.value}
                    name={gender.name}
                    checked={!!checked[gender.name]}
                    onChange={handleChecked}
                  />
                  <label>{gender.value}</label>
                </Gender>
              ))}
              {validate && (
                <Icon>
                  {infoState.gender === "" || !Object.values(checked).length
                    ? inputStatus.warning.icon
                    : inputStatus.success.icon}
                </Icon>
              )}
            </Genders>
          </Section>
          <Section>
            <Labels>
              <Label>Country of Residence </Label>
              <ReqLabel>* Required</ReqLabel>
            </Labels>
            <Select
              name="country"
              value={infoState.country}
              onChange={handleChange}
            >
              {countryList.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </Select>
            {validate && (
              <Icon>
                {infoState.country === ""
                  ? inputStatus.warning.icon
                  : inputStatus.success.icon}
              </Icon>
            )}
          </Section>
          <ButtonDiv>
            <Button onClick={handleClick}>Next</Button>
          </ButtonDiv>
        </Wrapper>
      </Container>
    </SignUp>
  );
};

const Container = styled.div`
  height: 60vw;
`;

const Wrapper = styled.div`
  width: 55vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding: 3vw 5vw;
  position: relative;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div``;

const Input = styled.input`
  width: 25vw;
  height: 2.2vw;
  font-size: 1.3vw;
  padding: 0.18vw;
`;

const Labels = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.3vw;
`;
const ReqLabel = styled.label`
  color: var(--primary-color);
  font-size: 1vw;
`;

const Genders = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26vw;
  gap: 0.8vw;
`;

const Gender = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3vw;
  font-size: 1.3vw;
`;

const Checkbox = styled.input`
  width: 2.2vw;
  height: 2.2vw;
`;

const Select = styled.select`
  width: 25.8vw;
  height: 2.2vw;
  font-size: 1.3vw;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  height: 2.2vw;
  width: 20vw;
  font-size: 1.3vw;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  &:hover {
    background: var(--primary-color-hover);
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 1.5vw;
`;
