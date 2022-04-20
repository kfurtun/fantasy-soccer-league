import { PageTemplate } from "../PageTemplate";
import styled from "styled-components";
import { IoIosPersonAdd, IoIosStar, IoIosMail } from "react-icons/io";
import { PersonalDetails } from "./PersonalDetails";
const sections = [
  { name: "1. Personal details", logo: <IoIosPersonAdd size="3vw" /> },
  { name: "2. Your favorites", logo: <IoIosStar size="3vw" /> },
  { name: "3. Email preferences", logo: <IoIosMail size="3vw" /> },
];

export const SignUp = () => {
  return (
    <PageTemplate>
      <Wrapper>
        <Header>Create a new account</Header>
        <Sections>
          {sections.map((section, index) => {
            return (
              <>
                <Section>
                  <Logo>{section.logo}</Logo>
                  <div>{section.name}</div>
                </Section>
                {/* {index !== 2 && <Hr></Hr>} */}
              </>
            );
          })}
        </Sections>
        <Breaker>
          <Line></Line>
        </Breaker>
        <PersonalDetails />
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
  margin-top: 2vw;
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
  width: 4vw;
  height: 4vw;
  background: var(--primary-color);
  color: white;
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
