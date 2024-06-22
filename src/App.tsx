import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Link } from "react-router-dom";

import "./styles/index.scss";

import MainpageAsync from "./pages/MainPage/Mainpage.async";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/className";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/"> main</Link>
      <Link to="/about"> about</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainpageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
