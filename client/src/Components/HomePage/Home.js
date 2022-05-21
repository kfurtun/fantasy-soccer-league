import React from "react";

import { slides } from "../../assets/slides";
import styled from "styled-components";

export const Home = () => {
  const [page, setPage] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setPage((prev) => prev + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [page]);
  if (page === 5) {
    setPage(0);
  }
  return (
    <Wrapper>
      {slides.slice(page, page + 1).map((slide) => (
        <Container img={slide.img} key={page}>
          <Text>{slide.text}</Text>
        </Container>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5vw auto;
`;
const Container = styled.div`
  background: ${(props) => `url(${props.img})`} no-repeat center top;
  background-size: cover;
  width: 40vw;
  height: 20vw;
  position: relative;
  border: 1px solid var(--primary-color);
  border-radius: var(--border-radius);
`;

const Text = styled.div`
  position: absolute;
  bottom: 1vw;
  right: 0.5vw;
  background: white;
  padding: 0.5vw;
  border-radius: var(--border-radius);
  border: 1px solid var(--primary-color);
`;
