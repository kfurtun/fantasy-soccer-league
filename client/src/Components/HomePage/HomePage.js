import { PageTemplate } from "../PageTemplate";
import styled from "styled-components";
import { useSelector } from "react-redux";
export const HomePage = () => {
  console.log(useSelector((state) => state));
  return (
    <PageTemplate>
      <Breaker>
        <Line></Line>
        <div>Or sign up </div>
        <Line></Line>
      </Breaker>
    </PageTemplate>
  );
};

const Wrapper = styled.div``;

const Breaker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2vw;
  gap: 1vw;
  color: #bfbfbf;
`;
const Line = styled.div`
  border-top: 1px solid #bfbfbf;
  width: 40vw;
`;
