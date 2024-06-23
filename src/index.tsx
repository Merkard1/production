import { render } from "react-dom";
import App from "./1_app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./1_app/providers/themeProvider";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
