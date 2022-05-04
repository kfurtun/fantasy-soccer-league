import styled from "styled-components";

export const Player = (props) => {
  const { firstname, lastname, team, position } = props;
  const handleClick = (e) => {
    e.preventDefault();
    console.log("zaa");
  };

  return (
    <Wrapper onClick={handleClick}>
      <div>
        <strong>
          {firstname} {lastname},{" "}
        </strong>
        {position},
      </div>
      <div>
        <i>{team}</i>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: block;
  color: white;
  width: 20vw;
  padding: 0.8vw;
  border-bottom: 1px solid white;
  &:hover {
    background: var(--primary-color-hover);
  }
`;
