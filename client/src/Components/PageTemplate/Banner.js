import React from "react";
import styled from "styled-components";
import { loginItems, bannerItems } from "../../assets";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currentUserLoggedOut } from "../../globalState";
import logo from "../../assets/images/logo.png";

export const Banner = React.memo(() => {
  const user = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  return (
    <Container>
      <Link to="/">
        <Img src={logo} />
      </Link>
      <Wrapper>
        <LeftDiv>
          {bannerItems.map((item) => {
            return (
              <Item key={item.name} to={item.route}>
                {item.name}
              </Item>
            );
          })}
        </LeftDiv>
        <RightDiv>
          {user.firstName ? (
            <Cont>
              <div style={{ color: "var(--secondary-color" }}>
                {`Hello ${user.firstName}`}{" "}
              </div>
              <Item to="/" onClick={() => dispatch(currentUserLoggedOut())}>
                Logout
              </Item>
            </Cont>
          ) : (
            loginItems.map((item) => {
              return (
                <Item key={item.name} to={item.route}>
                  {item.name}
                </Item>
              );
            })
          )}
        </RightDiv>
      </Wrapper>
    </Container>
  );
});

const Container = styled.div``;
const Wrapper = styled.nav`
  background-color: var(--primary-color);
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
  margin-left: 8vw;
  padding-left: var(--padding-in-banner);
  font-size: 1.2vw;
  margin-top: 1vw;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

const LeftDiv = styled.div`
  display: flex;
  height: 5vw;
`;

const RightDiv = styled.div`
  display: flex;
  height: 5vw;
  padding-right: var(--padding-in-banner);
`;
const Item = styled(Link)`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1vw;
  border-radius: var(--border-radius);
  text-decoration: none;
  color: white;

  &:hover {
    background-color: var(--primary-color-hover);
  }
`;

const Cont = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`;

const Img = styled.img`
  height: 5vw;
  position: absolute;
  left: 2vw;
`;
