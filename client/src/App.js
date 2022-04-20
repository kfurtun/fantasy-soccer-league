import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Components";
import { Login } from "./Components";
import GlobalStyles from "./GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
