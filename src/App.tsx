import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useTranslation } from "react-i18next";
import Home from "./pages/home/Home";

import About from "./pages/about/About";

function App() {
  const { i18n } = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${i18n.language}/`} />} />
      <Route path="/:lng">
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
