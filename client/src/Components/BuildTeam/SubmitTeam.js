import { useSelector } from "react-redux";
import { proxy } from "../constants";
import styled from "styled-components";
export const SubmitTeam = () => {
  const lineUp = useSelector((state) => state.lineUp);
  const week = useSelector((state) => state.currentWeek);
  const user = useSelector((state) => state.currentUser);

  const body = {
    method: "POST",
    body: JSON.stringify({
      lineUp,
      week,
      email: user.email,
      point: null,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };
  const handleClick = () => {
    fetch(`${proxy}/team`, body).then((res) => res.json());
  };

  return <Button onClick={handleClick}>Submit</Button>;
};

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  background: var(--primary-color);
  color: white;
  width: 8vw;
  height: 2vw;
  font-size: 1.2vw;
  /* padding: 0.8vw; */
  border-radius: var(--border-radius);
  &:hover {
    background: var(--primary-color-hover);
  }
`;
