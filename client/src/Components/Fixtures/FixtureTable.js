import styled from "styled-components";

export const FixtureTable = ({ games }) => {
  const dates = [];
  games.forEach((game) => {
    if (dates.length === 0) {
      dates.push(new Date(game.fixture.date).toLocaleDateString());
    } else if (
      dates.every(
        (date) => new Date(game.fixture.date).toLocaleDateString() !== date
      )
    ) {
      dates.push(new Date(game.fixture.date).toLocaleDateString());
    }
  });
  const options = { hour: "2-digit", minute: "2-digit", hour12: true };
  return (
    <Wrapper>
      {games.length === 10 &&
        dates.length > 0 &&
        dates
          .sort((a, b) => new Date(a) - new Date(b))
          .map((date) => {
            return (
              <div key={Math.random()}>
                <DateCont>{date}</DateCont>
                <Line>
                  {games
                    .sort(
                      (a, b) =>
                        new Date(a.fixture.date) - new Date(b.fixture.date)
                    )
                    .map(
                      (game) =>
                        new Date(game.fixture.date).toLocaleDateString() ===
                          date && (
                          <Game>
                            <div>
                              {new Date(game.fixture.date).toLocaleTimeString(
                                [],
                                options
                              )}
                            </div>
                            <div>{game.fixture.status.short}</div>
                            <Teams>
                              <Home>{game.teams.home.name}</Home>
                              <div>
                                {game.goals.home}-{game.goals.away}
                              </div>
                              <Away>{game.teams.away.name}</Away>
                            </Teams>
                          </Game>
                        )
                    )}
                </Line>
              </div>
            );
          })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60vw;
  background: var(--primary-color);
  border-radius: var(--border-radius);
  margin: auto;
  padding: 2vw;
`;
const Game = styled.div`
  display: flex;
  gap: 1vw;
`;

const Teams = styled.div`
  display: flex;
  gap: 1vw;
`;

const Line = styled.div`
  display: flex;
  gap: 2vw;
  flex-direction: column;
  color: white;
`;

const Home = styled.div`
  width: 20vw;
  display: flex;
  justify-content: flex-end;
`;

const Away = styled(Home)`
  justify-content: flex-start;
`;

const DateCont = styled.div`
  background: var(--secondary-color);
  margin: 0.8vw 0;
  border-radius: var(--border-radius);
  padding: 0.5vw 0;
`;
