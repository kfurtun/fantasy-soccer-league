import { Route, Routes } from "react-router-dom";
import { HomePage, Login, SignUp } from "./Components";
import { PersonalDetails } from "./Components/Login/PersonalDetails";
import { YourFavorites } from "./Components/Login/YourFavorites";
import { NotFound } from "./Components/NotFound";

import GlobalStyles from "./GlobalStyles";
import { Players } from "./Components/Players";
function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<PersonalDetails />} />
        <Route path="/sign-up/your-favorites" element={<YourFavorites />} />
        <Route path="players" element={<Players />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
