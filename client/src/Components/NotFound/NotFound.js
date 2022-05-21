import { PageTemplate } from "../PageTemplate";
import image from "../../assets/images/missing-goal.png";
import styled from "styled-components";
export const NotFound = () => {
  return (
    <PageTemplate>
      <Wrapper>
        <Error>404</Error>
        <Text>Oops! Looks like you are on the page that does not exist.</Text>
        <Img src={image} />
      </Wrapper>
    </PageTemplate>
  );
};

const Wrapper = styled.div`
  width: 40vw;
  margin: 5vw auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  background: var(--secondary-color);
  padding: 1vw;
  border-radius: var(--border-radius);
`;

const Error = styled.div`
  font-size: 4vw;
`;

const Text = styled.div`
  font-size: 1.5vw;
`;

const Img = styled.img`
  width: 25vw;
`;
