import React from "react";
import styled from "styled-components";
import { proxy } from "../constants";
import { Player } from "./Player";

export const SearchBar = React.memo(() => {
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  console.log(result);
  React.useEffect(() => {
    if (input.length > 2) {
      fetch(`${proxy}/player/${input}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setShowResult(true);
          setResult(data);
        });
    } else {
      setResult([]);
    }
  }, [input]);

  return (
    <Wrapper>
      <Background onClick={() => setShowResult(false)}></Background>
      <Container>
        <Input
          type="text"
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
          placeholder="Search player"
        />
        {result.data && showResult ? (
          <SearchResult>
            {result.data.map((player) => (
              <Player {...player} key={player._id} />
            ))}
          </SearchResult>
        ) : (
          input.length > 2 &&
          result.status === 404 && <SearchResult>{result.message}</SearchResult>
        )}
      </Container>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2vw;
  z-index: 3;
`;
const Container = styled.div`
  width: 20vw;
  z-index: 2;
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;
const Input = styled.input`
  width: 20vw;
  height: 2vw;
`;

const SearchResult = styled.div`
  width: 20.5vw;
  max-height: 30vw;
  overflow: auto;
  overflow-x: hidden;
  background: var(--primary-color);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);

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
