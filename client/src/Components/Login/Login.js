import React from "react";
import styled from "styled-components";
import { PageTemplate } from "../PageTemplate";
import { Link } from "react-router-dom";
import { proxy } from "../constants";
import { Spinner } from "../../GlobalStyles";
import { useDispatch } from "react-redux";
import { currentUserLoggedIn } from "../../globalState";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showSpinner, setShowSpinner] = React.useState(false);
  let navigate = useNavigate();

  const body = {
    method: "PUT",
    body: JSON.stringify({ email, password }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };

  const handleSubmitClick = () => {
    setShowSpinner(true);
    fetch(`${proxy}/user`, body)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(currentUserLoggedIn({ ...data.data }));
          navigate("/");
        } else {
          alert(data.message);
          setShowSpinner(false);
        }
      });
  };

  return (
    <PageTemplate>
      <SignInWrapper>
        <Wrapper>
          <InfoWrapper>
            <InfoCont>
              <label>Email</label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                value={email}
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
          <Button onClick={handleSubmitClick}>
            {showSpinner ? <LoginSpinner></LoginSpinner> : "Login"}
          </Button>
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
    font-size: 1.3vw;
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
  display: flex;
  align-items: center;
  justify-content: center;
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

const LoginSpinner = styled(Spinner)`
  border-top: 0.5vw solid var(--primary-color);
  border-left: 0.5vw solid var(--primary-color);
  border-bottom: 0.5vw solid var(--primary-color);
`;
