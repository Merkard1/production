import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Link } from "react-router-dom";

import "./styles/index.scss";

// App
import { useTheme } from "./providers/themeProvider";
// Pages
import { AboutPageAsync } from "@/2_pages/AboutPage";
import { MainpageAsync } from "@/2_pages/MainPage";
// Shared
import { classNames } from "@/6_shared/lib/classNames/className";

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
