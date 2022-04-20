import styled from "styled-components";
import { screenSizes } from "../../GlobalStyles";

export const Header = ({ clubs }) => {
  return (
    <Wrapper>
      <Text>CLUB SITES</Text>
      <Clubs>
        {clubs.map((club) => {
          return (
            <a href={club.website} target="_blank" key={Math.random()}>
              <Img src={club.logo} alt={`${club.name} logo`} {...screenSizes} />
            </a>
          );
        })}
      </Clubs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1vw;
  margin-left: 10vw;
  margin-top: 1vw;
  align-items: center;
`;

const Text = styled.div`
  font-size: 1.1rem;
`;
const Clubs = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70vw;
`;
const Img = styled.img`
  width: 50px;
`;
