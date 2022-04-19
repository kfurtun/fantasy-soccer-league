import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Components";
import GlobalStyles from "./GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
