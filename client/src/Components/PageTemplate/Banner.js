import styled from "styled-components";
import { bannerItems, loginItems } from "../constants";

export const Banner = () => {
  return (
    <Wrapper>
      <LeftDiv>
        {bannerItems.map((item) => {
          return (
            <Item key={item.name} href={item.route}>
              {item.name}
            </Item>
          );
        })}
      </LeftDiv>
      <RightDiv>
        {loginItems.map((item) => {
          return (
            <Item key={item.name} href={item.route}>
              {item.name}
            </Item>
          );
        })}
      </RightDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
const Item = styled.a`
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
