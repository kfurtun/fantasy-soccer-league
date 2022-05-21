import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage, Login } from "./Components";
import { PersonalDetails } from "./Components/Login/PersonalDetails";
import { YourFavorites } from "./Components/Login/YourFavorites";
import { NotFound } from "./Components/NotFound";

import GlobalStyles from "./GlobalStyles";
import { Players } from "./Components/Players";
import { Teams } from "./Components/Teams";
import { BuildTeam } from "./Components/BuildTeam";
import { Fixtures } from "./Components/Fixtures";
import { useSelector } from "react-redux";
import { Results } from "./Components/Results";
import { PointSystem } from "./Components/PointSystem";
function App() {
  const user = useSelector((state) => state.currentUser);
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<PersonalDetails />} />
        <Route path="/sign-up/your-favorites" element={<YourFavorites />} />
        <Route path="players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
        <Route
          path="/build-your-team"
          element={user.firstName ? <BuildTeam /> : <Navigate to="*" />}
        />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route
          path="/results"
          element={user.firstName ? <Results /> : <Navigate to="*" />}
        />
        <Route path="/point-system" element={<PointSystem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
