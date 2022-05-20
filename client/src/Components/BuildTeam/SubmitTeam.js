import { useSelector } from "react-redux";
import { proxy } from "../constants";
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
    fetch(`${proxy}/team`, body)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return <button onClick={handleClick}>Submit</button>;
};
