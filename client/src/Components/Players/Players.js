import { PageTemplate } from "../PageTemplate";
import { SearchBar } from "./SearchBar";
import { TopPlayers } from "./TopPlayers";
import styled from "styled-components";

export const Players = () => {
  return (
    <PageTemplate>
      <Wrapper>
        <SearchBar />
        <TopPlayers />
      </Wrapper>
    </PageTemplate>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
