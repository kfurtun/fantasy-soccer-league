import { Route, Routes } from "react-router-dom";
import { HomePage, Login, SignUp } from "./Components";

import GlobalStyles from "./GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
