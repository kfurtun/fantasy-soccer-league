import styled from "styled-components";

const bannerItems = [
  { name: "Fixtures", route: "/" },
  { name: "Players", route: "/" },
  { name: "Teams", route: "/" },
  { name: "Build Your Team", route: "/" },
  { name: "Results", route: "/" },
  { name: "Rules", route: "/" },
];

export const Banner = () => {
  return (
    <Wrapper>
      {bannerItems.map((item) => {
        return <Item>{item.name}</Item>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--primary-color);
  display: flex;
  gap: 50px;
  height: 5vw;
  align-items: center;
  margin-left: 8vw;
  padding-left: 2vw;
  color: white;
  margin-top: 1vw;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

const Item = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1vw;
  border-radius: 6px;

  &:hover {
    background-color: var(--primary-color-hover);
  }
`;
