import React from "react";
import styled from "styled-components";
import { apiUrl, leagueId, season, headers } from "../constants";
import { TopPlayersEachCategory } from "./TopPlayersEachCategory";
import { categories } from "../../assets";

export const TopPlayers = () => {
  const [topPlayers, setTopPlayers] = React.useState({});
  React.useEffect(() => {
    categories.forEach((category) => {
      fetch(
        `${apiUrl}/players/${category.category}?season=${season}&league=${leagueId}`,
        { headers }
      )
        .then((res) => res.json())
        .then((data) =>
          setTopPlayers((prev) => {
            return { ...prev, [category.category]: data.response };
          })
        );
    });
  }, []);

  return (
    <Wrapper>
      {Object.keys(topPlayers).length > 3 &&
        categories.map((category) => (
          <div key={category.category}>
            <TopPlayersEachCategory
              category={category.category}
              players={topPlayers[category.category]}
              keyValue={category.keyValue}
              subKeyValue={category.subKeyValue}
              subKeyValue2={category.subKeyValue2}
            />
          </div>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  margin-top: 6vw;
  width: 64vw;
  display: flex;
  flex-wrap: wrap;
  gap: 4vw;
  font-size: 1vw;
`;
