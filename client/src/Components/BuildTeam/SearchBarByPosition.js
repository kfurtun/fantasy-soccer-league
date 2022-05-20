import React from "react";
import styled from "styled-components";
import { proxy } from "../constants";
import { Player } from "./Player";
import { useSelector } from "react-redux";

export const SearchBarByPosition = React.memo(({ position, index }) => {
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);

  const state = useSelector((state) => state.lineUp);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  React.useEffect(() => {
    if (input.length > 2) {
      fetch(`${proxy}/player/${input}?position=${position}`)
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
  console.log(result);
  console.log(state);

  return (
    <Wrapper>
      {result.data && showResult && (
        <Background onClick={() => setShowResult(false)}></Background>
      )}
      <Container>
        <Input
          type="text"
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
          placeholder="Search player"
        />
        {result.data && showResult ? (
          <SearchResult>
            {result.data.map((player) =>
              Object.values(state).length > 0 ? (
                Object.values(state).some(
                  (stateEl) => stateEl?._id !== player._id
                ) && <Player {...player} key={player._id} index={index} />
              ) : (
                <Player {...player} key={player._id} index={index} />
              )
            )}
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
  width: 10vw;
  z-index: 2;
  position: relative;
  text-align: center;
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Input = styled.input`
  width: 8vw;
  height: 2vw;
  margin-top: 1vw;
`;

const SearchResult = styled.div`
  width: 20vw;
  max-height: 30vw;
  overflow: auto;
  overflow-x: hidden;
  background: var(--primary-color);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  position: absolute;
  left: -6vw;
  z-index: 6;
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
