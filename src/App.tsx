import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useTranslation } from "react-i18next";
import Home from "./pages/home/Home";

import About from "./pages/about/About";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import { useState } from "react";
import Login from "./pages/login/Login";

function App() {
  const { i18n } = useTranslation();
  const [loc, setLoc] = useState<string | null>(
    localStorage.getItem("token") || null
  );
  const handleLoc = () => {
    localStorage.setItem("token", JSON.stringify(1));
    setLoc("1");
  };

  return (
    <Routes>
      <Route path="/login" element={<Login handleLoc={handleLoc} />} />
      <Route path="/" element={<Navigate to={`/${i18n.language}/`} />} />
      <Route path="/:lng">
        <Route path="" element={<PrivateRoute onlyFor={loc} />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="about" element={<PrivateRoute onlyFor={loc} />}>
          <Route index element={<About />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
