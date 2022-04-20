import React from "react";
import styled from "styled-components";
import { PageTemplate } from "../PageTemplate";
import { Link } from "react-router-dom";
import { proxy } from "../constants";

export const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const body = {
    method: "PUT",
    body: JSON.stringify({ username, password }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };

  const handleSubmitClick = () => {
    fetch(`${proxy}/user`, body)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <PageTemplate>
      <SignInWrapper>
        <Wrapper>
          <InfoWrapper>
            <InfoCont>
              <label>Username</label>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                value={username}
              />
            </InfoCont>
            <InfoCont>
              <label>Password</label>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                value={password}
              />
            </InfoCont>
          </InfoWrapper>
          <Button onClick={handleSubmitClick}>Login</Button>
          <Link to="/">Forgot password?</Link>
          <Link to="/">Don't you have an account? Sign up here!</Link>
        </Wrapper>
      </SignInWrapper>
    </PageTemplate>
  );
};

const Wrapper = styled.div`
  border-radius: var(--border-radius);
  width: 30vw;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
  padding: 1vw;
  color: var(--secondary-color);
  a {
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7vw;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  font-size: 1.5vw;
`;

const InfoCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
`;

const Input = styled.input`
  width: 10vw;
  height: 2vw;
  border: none;
`;

const Button = styled.button`
  cursor: pointer;
  height: 2.5vw;
  width: 10vw;
  background-color: var(--secondary-color);
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.5vw;
  &:hover {
    background-color: var(--secondary-color-hover);
  }
`;
