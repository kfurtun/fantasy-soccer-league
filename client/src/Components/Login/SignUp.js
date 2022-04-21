import { PageTemplate } from "../PageTemplate";
import styled from "styled-components";
import { registrationSections } from "../../assets";
import { useSelector } from "react-redux";

export const SignUp = ({ children }) => {
  const currentPage = useSelector((state) => state.page);
  const sections = registrationSections(currentPage);
  return (
    <PageTemplate>
      <Wrapper>
        <Header>Create a new account</Header>
        <Sections>
          {sections.map(
            (section, index) => (
              <Section key={section.id}>
                <Logo page={section.id} currentPage={currentPage}>
                  {section.logo}
                </Logo>
                <Name>{section.name}</Name>
              </Section>
            )
            /* {index !== 2 && <Hr></Hr>} */
          )}
        </Sections>
        <Breaker>
          <Line></Line>
        </Breaker>
        {children}
      </Wrapper>
    </PageTemplate>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  background-color: #f91f5d;
  margin-top: 3vw;
  height: 3.5vw;
  color: white;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: var(--padding-in-banner);
  border-radius: var(--border-radius);
`;
const Breaker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vw 0;
  color: #bfbfbf;
`;
const Line = styled.div`
  border-top: 1px solid #bfbfbf;
  width: 60vw;
`;

const Sections = styled.div`
  display: flex;
  margin-top: 2vw;
  gap: 5vw;
  position: relative;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5vw;
`;

const Logo = styled.div`
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5vw;
  height: 3.5vw;
  background: ${(props) =>
    props.page === props.currentPage
      ? "var(--primary-color)"
      : props.currentPage === 2
      ? "#13cf00"
      : "gray"};
  color: ${(props) =>
    props.page === props.currentPage
      ? "white"
      : props.currentPage === 2
      ? "white"
      : "lightgray"};
`;

const Name = styled.div`
  font-size: 1.1vw;
`;

const Hr = styled.hr`
  transform: rotate(90deg);
  height: 10vw;
`;

const LogoCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5vw;
`;
