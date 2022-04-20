import React from "react";
import styled from "styled-components";
import { countryList } from "../constants";
import { proxy } from "../constants";

export const PersonalDetails = () => {
  const [infoState, setInfoState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    country: "",
  });
  const [checked, setChecked] = React.useState({
    male: false,
    female: false,
    unspecified: false,
  });

  const handleChecked = (event) => {
    setChecked({
      [event.target.id]: !checked[event.target.id],
    });
  };

  const handleChange = (event) => {
    setInfoState({ ...infoState, [event.target.name]: event.target.value });
  };
  const body = {
    method: "POST",
    body: JSON.stringify({
      ...infoState,
      gender: Object.keys(checked)[0],
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };
  const handleClick = () => {
    fetch(`${proxy}/user`, body)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  console.log(body.body);
  return (
    <Wrapper>
      <Header>Your Personal Details</Header>
      <Section>
        <Labels>
          <Label>First Name </Label>
          <ReqLabel>* Required</ReqLabel>
        </Labels>
        <Input
          value={infoState.firstName}
          name="firstName"
          onChange={handleChange}
        />
      </Section>
      <Section>
        <Labels>
          <Label>Last Name </Label>
          <ReqLabel>* Required</ReqLabel>
        </Labels>
        <Input
          value={infoState.lastName}
          name="lastName"
          onChange={handleChange}
        />
      </Section>
      <Section>
        <Labels>
          <Label>Email Address </Label>
          <ReqLabel>* Required</ReqLabel>
        </Labels>
        <Input value={infoState.email} name="email" onChange={handleChange} />
      </Section>
      <Section>
        <Labels>
          <Label>Password </Label>
          <ReqLabel>* Required</ReqLabel>
        </Labels>
        <Input
          value={infoState.password}
          name="password"
          onChange={handleChange}
        />
      </Section>
      <Section>
        <Labels>
          <Label>Gender </Label>
          <ReqLabel>* Required</ReqLabel>
        </Labels>
        <Genders>
          <Gender>
            <Checkbox
              type="checkbox"
              name="gender"
              value="Male"
              id="male"
              checked={!!checked.male}
              onChange={handleChecked}
            />
            <label>Male</label>
          </Gender>
          <Gender>
            <Checkbox
              type="checkbox"
              name="gender"
              value="Female"
              id="female"
              checked={!!checked.female}
              onChange={handleChecked}
            />
            <label>Female</label>
          </Gender>
          <Gender>
            <Checkbox
              type="checkbox"
              name="gender"
              value="Unspecified"
              id="unspecified"
              checked={!!checked.unspecified}
              onChange={handleChecked}
            />
            <label>Unspecified</label>
          </Gender>
        </Genders>
      </Section>
      <Section>
        <Labels>
          <Label>Date of Birth </Label>
          <ReqLabel>* Required</ReqLabel>
        </Labels>
        <Date
          type="date"
          name="dob"
          value={infoState.dob}
          onChange={handleChange}
        />
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
            <option>{country}</option>
          ))}
        </Select>
      </Section>
      <button onClick={handleClick}>Submit</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding: 3vw 5vw;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div``;

const Input = styled.input`
  width: 30vw;
  height: 2.5vw;
`;

const Labels = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.5vw;
`;
const ReqLabel = styled.label`
  color: var(--primary-color);
  font-size: 1.2vw;
`;

const Genders = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  gap: 0.8vw;
`;

const Gender = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3vw;
  font-size: 1.5vw;
`;

const Checkbox = styled.input`
  width: 2.5vw;
  height: 2.5vw;
`;

const Date = styled.input`
  width: 30.5vw;
  height: 2.5vw;
  font-size: 1.4vw;
`;

const Select = styled.select`
  width: 31vw;
  height: 2.5vw;
  font-size: 1.4vw;
`;
