import { Route, Routes } from "react-router-dom";
import { HomePage, Login, SignUp } from "./Components";
import { PersonalDetails } from "./Components/Login/PersonalDetails";
import { YourFavorites } from "./Components/Login/YourFavorites";

import GlobalStyles from "./GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<PersonalDetails />} />
        <Route path="/sign-up/your-favorites" element={<YourFavorites />} />
      </Routes>
    </>
  );
}

export default App;
